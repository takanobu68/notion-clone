const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;
require('dotenv').config();

// DB接続
try {
  mongoose.connect(process.env.MONGODB_URL);
  console.log('DBと接続中');
} catch (error) {
  console.log('error');
}

// ユーザ新規登録API

// ユーザログイン用API

app.listen(PORT, () => {
  console.log('ローカルサーバ起動中');
});
