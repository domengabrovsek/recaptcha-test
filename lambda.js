const recaptchaHtml = require('./recaptcha');

module.exports.handler = async (event) => {

  const siteKey = process.env.RECAPTCHA_SITE_KEY;
  const html = recaptchaHtml(siteKey);

  return {
    body: html,
    statusCode: 200,
    headers: { 'Content-Type': 'text/html' }
  };
};
