export const forgotPasswordTemplate = (userName, resetToken) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Reset Your Password</title>
        <style>
            body { 
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
                color: #333;
            }
            .email-container {
                max-width: 600px;
                margin: 20px auto;
                background-color: #fff;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                overflow: hidden;
            }
            .header {
                background-color: #f44336;
                color: #fff;
                text-align: center;
                padding: 20px;
            }
            .content {
                padding: 20px;
                font-size: 14px;
            }
            .token {
                display: inline-block;
                margin-top: 20px;
                padding: 12px 20px;
                background-color: #f44336;
                color: #fff;
                font-weight: bold;
                border-radius: 5px;
                text-align: center;
                letter-spacing: 2px;
                font-size: 16px;
            }
            .footer {
                background-color: #333;
                color: #fff;
                text-align: center;
                padding: 10px;
                font-size: 12px;
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="header">
                <h1>Reset Your Password</h1>
            </div>
            <div class="content">
                <p><b>Dear ${userName},</b></p>
                <p>We received a request to reset your password. Use the token below to set a new password:</p>
                <p class="token">${resetToken}</p>
                <p>If you did not request a password reset, please ignore this email. Your account is safe.</p>
            </div>
            <div class="footer">
                <p>&copy; 2025 Nnine Solution. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
  `;
};