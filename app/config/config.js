const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT,
  connectionString: process.env.CONNECTION_STRING,
  mongoUser: process.env.MONGO_USER,
  mongoKeyPath: process.env.MONGO_KEY_PATH,
  binFilePath: process.env.BIN_FILE_PATH,
  encryptionKeyPath: process.env.ENCRYPTION_KEY_PATH,
  authSource: process.env.AUTH_SOURCE,
  fcmAuthKey: process.env.FCM_AUTHKEY,
  azureAudiences: JSON.parse(process.env.AZURE_AUDIENCES),
  proxyIP: process.env.PROXY_IP,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  access_token_expiry: process.env.ACCESS_TOKEN_EXPIRY,
  tls_cert: process.env.TLS_CERT,
  oracle_hcm_user: process.env.ORACLE_HCM_USER,
  oracle_hcm_password: process.env.ORACLE_HCM_PASSWORD,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  clientScope: process.env.SCOPE,
  MAIL_HOST: process.env.MAIL_HOST,
  MAIL_PORT: process.env.MAIL_PORT,
  MAIL_FROM: process.env.MAIL_FROM,
  EMAIL_GROUP: JSON.parse(process.env.EMAIL_GROUP),
  NODE_HOST: process.env.NODE_HOST,
  APP_NAME: process.env.APP_NAME,
  APP_ID: process.env.APP_ID,
  weekdayStartTime: process.env.weekdayStartTime,
  weekdayEndTime: process.env.weekdayEndTime,
  weekendStartTime: process.env.weekendStartTime,
  weekendEndTime: process.env.weekendEndTime,
};
