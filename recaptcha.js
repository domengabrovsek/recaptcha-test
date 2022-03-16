module.exports = (siteKey) => {
  return `
<html>

<head>
  <title>reCAPTCHA demo: Simple page</title>
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
</head>

<body>
  <div class="g-recaptcha" data-sitekey="${siteKey}" data-callback="recaptcha_callback"></div>
  <script type="text/javascript">
    function recaptcha_callback(token) { console.log({ token })}
  </script>
</body>

</html>`
};
