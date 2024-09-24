document.addEventListener('DOMContentLoaded', function () {
    const captchaText = document.getElementById('captchaText');
    const captchaInput = document.getElementById('captchaInput');

    function generateCaptcha() {
        const captcha = Math.random().toString(36).substring(2, 8);
        captchaText.textContent = captcha;
    }

    generateCaptcha();

    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();
        if (captchaInput.value !== captchaText.textContent) {
            alert('Captcha is incorrect. Please try again.');
            generateCaptcha();
            return;
        }
        alert('Login successful!');
    });
});
