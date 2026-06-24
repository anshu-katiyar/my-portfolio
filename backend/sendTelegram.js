import axios from "axios";

export const sendTelegramMessage = async (data) => {
  const message = `
🚀 New Portfolio Lead

👤 Name: ${data.name}
📞 Phone: ${data.phone}
📧 Email: ${data.email}
💬 Message: ${data.message}
`;

  const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

  await axios.post(url, {
    chat_id: process.env.TELEGRAM_CHAT_ID,
    text: message,
  });
};