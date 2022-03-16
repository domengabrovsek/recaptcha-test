module.exports = (siteKey) => {
  return `
<html>

<head>
  <title>reCAPTCHA demo: Simple page</title>
  <meta name="viewport"
    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
</head>

<body>
  <div class="g-recaptcha" data-sitekey="${siteKey}" data-callback="recaptcha_callback">
  </div>
  <script type="text/javascript">
    function recaptcha_callback(token) {
      console.log({ token })
    }
  </script>

</body>

</html>`
};
