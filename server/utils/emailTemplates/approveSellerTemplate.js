exports.approveSellerTemplate = (name) => {
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
                max-width: 500px; 
                margin: 0 auto; 
                border: 1px solid #eeeeee; 
                border-radius: 12px; 
                padding: 30px; 
                text-align: center; 
                background-color: #ffffff;">

      <h2 style="color: #6f42c1; margin-bottom: 20px;">
        Power House
      </h2>

      <p style="font-size: 16px; color: #555;">
        Hello ${name},
      </p>

      <p style="font-size: 16px; color: #555;">
        Congratulations! Your seller account has been <b>approved</b> successfully.
        You can now log in and start listing your products on our platform.
      </p>

      <p style="font-size: 16px; color: #555; margin-top: 25px;">
        <a href="${process.env.PLATFORM_URL}/seller/dashboard" 
           style="color: #ffffff; 
                  background-color: #6f42c1; 
                  padding: 12px 25px; 
                  border-radius: 8px; 
                  text-decoration: none; 
                  font-weight: bold;">
          Go to Dashboard
        </a>
      </p>

      <p style="font-size: 14px; color: #555; margin-top: 30px; text-align: left;">
        Regards,<br/>
        <b>Sajin C L</b><br/>
        Power House Admin
      </p>

      <div style="margin-top: 30px; 
                  padding-top: 15px; 
                  border-top: 1px solid #eeeeee; 
                  font-size: 12px; 
                  color: #aaa;">
        © 2026 Power House Ecommerce. All rights reserved.
      </div>
    </div>
  `;
};