# Модуль на TS для работы с Yandex Диска

## Вызов SDK Yandex Диск
```typescript
const { drive } = new YandexSdk({})
```
**Массив параметров**

```txt
{
  format?: string //xml | json| jwt
  jwt_secret?: string,
  with_openid_identity?: number | string | boolean // 1 | yes | true
  oauth_token: string
}
```