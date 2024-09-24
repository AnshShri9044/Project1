document.addEventListener('DOMContentLoaded', function () {
    const generateOtpButton = document.getElementById('generateOtp');
    const captchaText = document.getElementById('captchaText');
    const captchaInput = document.getElementById('captchaInput');
    
    function generateCaptcha() {
        const captcha = Math.random().toString(36).substring(2, 8);
        captchaText.textContent = captcha;
    }

    generateCaptcha();

    generateOtpButton.addEventListener('click', function () {
        alert('OTP has been generated and sent to your mobile number.');
    });

    document.getElementById('signupForm').addEventListener('submit', function (e) {
        e.preventDefault();
        if (captchaInput.value !== captchaText.textContent) {
            alert('Captcha is incorrect. Please try again.');
            generateCaptcha();
            return;
        }
        alert('Signup successful!');
    });
});
