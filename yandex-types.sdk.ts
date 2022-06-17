export interface ParamsTypes{
  format?: string //xml | json| jwt
  jwt_secret?: string,
  with_openid_identity?: number | string | boolean // 1 | yes | true
  oauth_token: string
}