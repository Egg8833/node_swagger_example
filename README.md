# Example Express Swagger API

本專案為 Node.js + Express API 範例，整合 swagger-jsdoc，並實作 JWT 驗證。

## 安裝

```sh
npm install
```

## 啟動

```sh
node index.js
```

## Swagger 文件

啟動後瀏覽： http://localhost:3000/api-docs

## API 範例

- `POST /login`：取得 JWT Token
- `GET /hello`：需 JWT 驗證，回傳 Hello 訊息

## JWT 測試帳號
- username: user
- password: pass
