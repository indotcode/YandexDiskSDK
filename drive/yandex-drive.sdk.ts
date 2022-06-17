import {YandexAbstractSdk} from "../yandex-abstract.sdk";
import type {
  YandexDriveInterface,
  ParamsGetFilesYandex,
  ParamsGetLatestFilesYandex,
  ParamsGetDownloadFileYandex,
  ParamsGetMetaFileYandex,
  ParamsSetUploadFileYandex,
  ParamsSetUploadFileNetYandex,
  ParamsSetCopyYandex,
  ParamsSetMetaFilesYandex,
  ParamsSetMoveYandex,
  ParamsSetFolderCreateYandex,
  ParamsSetDeleteYandex,
  ParamsSetPathYandex,
  ParamsGetPublishMetaYandex,
  ParamsGetDownloadPublishYandex,
  ParamsSetSavePublishDownloadYandex,
  ParamsGetPublishYandex, ParamsSetBasketDeleteYandex, ParamsSetBasketRestoreYandex
} from "./yandex-drive.types";

export class YandexDriveSdk extends YandexAbstractSdk implements YandexDriveInterface {

  protected url = 'https://cloud-api.yandex.net/v1/disk'

  public async getDriveInfo() {
    const response = await this.api.get(`${this.url}`)
    return response.data
  }

  public async getFiles(paramsGetFilesYandex: ParamsGetFilesYandex = {}) {
    const response = await this.api.get(`${this.url}/resources/files`, {params: paramsGetFilesYandex})
    return response.data
  }

  public async getLatestFiles(paramsGetLatestFilesYandex: ParamsGetLatestFilesYandex = {}) {
    const response = await this.api.get(`${this.url}/resources/last-uploaded`, {params: paramsGetLatestFilesYandex})
    return response.data
  }

  public async getMetaFile(paramsGetMetaFileYandex: ParamsGetMetaFileYandex) {
    const response = await this.api.get(`${this.url}/resources`, {params: paramsGetMetaFileYandex})
    return response.data
  }

  public async setMetaFile(paramsSetMetaFilesYandex: ParamsSetMetaFilesYandex, customProperties: any = {}) {
    const response = await this.api.patch(`${this.url}/resources`, {custom_properties: customProperties}, {params: paramsSetMetaFilesYandex})
    return response.data
  }

  public async setUploadFile(paramsSetUploadFileYandex: ParamsSetUploadFileYandex, originalName: string, fileBuffer) {
    paramsSetUploadFileYandex.path = `${paramsSetUploadFileYandex.path}/${originalName}`
    const {path} = paramsSetUploadFileYandex
    const responseUploadUrl: any = await this.api.get(`${this.url}/resources/upload`, {params: paramsSetUploadFileYandex})
    await this.api.put(`${responseUploadUrl.data.href}`, fileBuffer)
    return await this.getMetaFile({path})
  }

  public async setUploadFileNet(paramsSetUploadFileNetYandex: ParamsSetUploadFileNetYandex, fileName: string){
    paramsSetUploadFileNetYandex.path = `${paramsSetUploadFileNetYandex.path}/${fileName}`
    const responseUploadUrl = await this.api.post(`${this.url}/resources/upload`, null, {params: paramsSetUploadFileNetYandex})
    const response = await this.api.get(responseUploadUrl.data.href)
    return response.data
  }

  public async getDownloadFile(paramsGetDownloadFileYandex: ParamsGetDownloadFileYandex){
    const responseUDownload = await this.api.get(`${this.url}/resources/download`, {params: paramsGetDownloadFileYandex})
    return responseUDownload.data
  }

  public async setCopy(paramsSetCopyYandex: ParamsSetCopyYandex){
    const responseCopy: any = await this.api.post(`${this.url}/resources/copy`, null, {params: paramsSetCopyYandex})
    const response = await this.api.get(responseCopy.data.href)
    return response.data
  }

  public async setMove(paramsSetMoveYandex: ParamsSetMoveYandex){
    const responseCopy: any = await this.api.post(`${this.url}/resources/move`, null, {params: paramsSetMoveYandex})
    const response = await this.api.get(responseCopy.data.href)
    return response.data
  }

  public async setDelete(paramsSetDeleteYandex: ParamsSetDeleteYandex){
    await this.api.delete(`${this.url}/resources`, {params: paramsSetDeleteYandex})
  }

  public async setFolderCreate(paramsSetFolderCreateYandex: ParamsSetFolderCreateYandex){
    const responseCreate = await this.api.put(`${this.url}/resources`, null,{params: paramsSetFolderCreateYandex})
    const response = await this.api.get(responseCreate.data.href)
    return response.data
  }

  public async setPublish(paramsSetPathYandex: ParamsSetPathYandex){
    const responsePublish = await this.api.put(`${this.url}/resources/publish`, null,{params: paramsSetPathYandex})
    const response = await this.api.get(responsePublish.data.href)
    return response.data
  }

  public async setUnPublish(paramsSetPathYandex: ParamsSetPathYandex){
    const responsePublish = await this.api.put(`${this.url}/resources/unpublish`, null,{params: paramsSetPathYandex})
    const response = await this.api.get(responsePublish.data.href)
    return response.data
  }

  public async getPublishMeta(paramsGetPublishMetaYandex: ParamsGetPublishMetaYandex){
    const responsePublishMeta = await this.api.get(`${this.url}/public/resources`, {params: paramsGetPublishMetaYandex})
    return responsePublishMeta.data
  }

  public async getDownloadPublish(paramsGetDownloadPublishYandex: ParamsGetDownloadPublishYandex){
    const responseDownloadPublish = await this.api.get(`${this.url}/resources/download`, {params: paramsGetDownloadPublishYandex})
    const response = await this.api.get(responseDownloadPublish.data.href)
    return response.data
  }

  public async setSavePublishDownload(paramsSetSavePublishDownloadYandex: ParamsSetSavePublishDownloadYandex){
    const responseSavePublishDownload = await this.api.post(`${this.url}/resources/download`, null, {params: paramsSetSavePublishDownloadYandex})
    const response = await this.api.get(responseSavePublishDownload.data.href)
    return response.data
  }

  public async getPublish(paramsGetPublishYandex: ParamsGetPublishYandex = {}) {
    const response = await this.api.get(`${this.url}/resources/public`, {params: paramsGetPublishYandex})
    return response.data
  }

  public async setBasketDelete(paramsSetBasketDeleteYandex: ParamsSetBasketDeleteYandex = {}){
    const responseBasketDelete = await this.api.delete(`${this.url}/trash/resources`, {params: paramsSetBasketDeleteYandex})
    const response = await this.api.get(responseBasketDelete.data.href)
    return response.data
  }

  public async setBasketRestore(paramsSetBasketRestoreYandex: ParamsSetBasketRestoreYandex){
    const responsePublishMeta = await this.api.put(`${this.url}/trash/resources`, null,{params: paramsSetBasketRestoreYandex})
    const response = await this.api.get(responsePublishMeta.data.href)
    return response.data
  }
}