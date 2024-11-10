const crypto = require('crypto-js');

exports.encryptText = (text) => {
  return crypto.AES.encrypt(text, process.env.ENCRYPTION_KEY).toString();
};

exports.decryptText = (cipherText) => {
  const bytes = crypto.AES.decrypt(cipherText, process.env.ENCRYPTION_KEY);
  return bytes.toString(crypto.enc.Utf8);
};
 