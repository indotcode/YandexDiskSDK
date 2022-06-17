//Документация - https://yandex.ru/dev/disk/api/reference/all-files.html

export interface YandexDriveInterface{
  getDriveInfo: any
  getFiles: any
  getLatestFiles: any
  getMetaFile: any
}

//Плоский список всех файлов
export type ParamsGetFilesYandex = Limit & MediaType & Offset & Fields & PreviewSize & PreviewCrop

//Последние загруженные файлы
export type ParamsGetLatestFilesYandex = Limit & MediaType & Fields & PreviewSize & PreviewCrop

//Метаинформация о файле или папке
export type ParamsGetMetaFileYandex = Path & Limit & Offset & Fields & PreviewSize & PreviewCrop & Sort

//Добавление метаинформации для ресурса
export type ParamsSetMetaFilesYandex = Path & Fields

//Загрузка файла на Диск
export type ParamsSetUploadFileYandex = Path & Overwrite & Fields

//Скачивание файла из интернета на Диск
export type ParamsSetUploadFileNetYandex = Url & Path & Fields & DisableRedirects

//Скачивание файла с Диска
export type ParamsGetDownloadFileYandex = Path & Fields

//Копирование файла или папки
export type ParamsSetCopyYandex = From & Path & Overwrite & Fields

//Перемещение файла или папки
export type ParamsSetMoveYandex = From & Path & Overwrite & Fields

//Удаление файла или папки
export type ParamsSetDeleteYandex = Path & Permanently

//Создание папки
export type ParamsSetFolderCreateYandex = Path & Fields

//Публикация файла или папки
export type ParamsSetPathYandex = Path

//Метаинформация о публичном ресурсе
export type ParamsGetPublishMetaYandex = PublicKey & PathNot & Sort & Limit & PreviewSize & PreviewCrop & Offset

//Скачивание публичного файла или папки
export type ParamsGetDownloadPublishYandex = PublicKey & PathNot

//Сохранение публичного файла в «Загрузки»
export type ParamsSetSavePublishDownloadYandex = PublicKey & PathNot & Name

//Список опубликованных ресурсов
export type ParamsGetPublishYandex = Limit & Offset & Type & Fields & PreviewSize

//Очистка Корзины
export type ParamsSetBasketDeleteYandex = PathNot

export type ParamsSetBasketRestoreYandex = Path & Name & Overwrite

//путь к ресурсу
type Path = {
  path: string
}

//путь к ресурсу (необязательный)
type PathNot = {
  path?: string
}

//путь к ресурсу
type PublicKey = {
  public_key: string
}

//ссылка на скачиваемый файл
type Url = {
  url: string
}

//путь к копируемому ресурсу
type From = {
  from: string
}

type Name = {
  name?: string
}

type Permanently = {
  permanently?: boolean
}

//признак запрета редиректов
type DisableRedirects = {
  disable_redirects?: boolean
}

//количество файлов в списке
type Limit = {
  limit?: number
}

//тип запрашиваемых файлов
type MediaType = {
  media_type?: string
}

//смещение относительно начала списка
type Offset = {
  offset?: string
}

//свойства, которые нужно включить в ответ
type Fields = {
  fields?: string
}

//размер превью
type PreviewSize = {
  preview_size?: string
}

//признак обрезки превью
type PreviewCrop = {
  preview_crop?: boolean,
}

//атрибут сортировки
type Sort = {
  sort?: string,
}

//тип запрашиваемых файлов
type Type = {
  type?: string, // "dir" — папка; "file" — файл.
}

//признак перезаписи
type Overwrite = {
  overwrite?: boolean,
}