exports.orderStatusTemplate = (name, status, orderId) => {
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
        Your order with ID <b>${orderId}</b> status has been updated to:
      </p>

      <div style="margin: 25px 0;">
        <span style="font-size: 28px;
                     font-weight: bold;
                     color: #6f42c1;
                     background-color: #f3f0ff;
                     padding: 12px 20px;
                     border-radius: 10px;
                     border: 2px solid #dcd3ff;">
          ${status.toUpperCase()}
        </span>
      </div>

      <p style="font-size: 14px; color: #555;">
        You can check your order details on your <a href="${process.env.PLATFORM_URL}/myorders" style="color:#6f42c1; text-decoration:none;">dashboard</a>.
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