const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Hello Express');
});

// ユーザ新規登録API

// ユーザログイン用API

app.listen(PORT, () => {
  console.log('ローカルサーバ起動中');
});
