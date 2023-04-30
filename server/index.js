const express = require('express');
const mongoose = require('mongoose');
const CryptoJS = require('crypto-js');
const JWT = require('jsonwebtoken');
const User = require('./src/v1/models/user');
const app = express();
const PORT = 5000;
require('dotenv').config();

app.use(express.json());

// DB接続
try {
  mongoose.connect(process.env.MONGODB_URL);
  console.log('DBと接続中');
} catch (error) {
  console.log('error');
}

// ユーザ新規登録API
app.post('/register', async (req, res) => {
  // パスワードの受け取り
  const password = req.body.password;

  try {
    // パスワードの暗号化
    req.body.password = CryptoJS.AES.encrypt(password, process.env.SECRET_KEY);
    // ユーザの新規登録
    const user = await User.create(req.body);
    // JWTの発行
    const token = JWT.sign({ id: user._id }, process.env.TOKEN_SECRET_KEY, {
      expiresIn: '24h',
    });
    return res.status(200).json({ user, token });
  } catch (err) {
    return res.status(500).json(err);
  }
});

// ユーザログイン用API

app.listen(PORT, () => {
  console.log('ローカルサーバ起動中');
});
