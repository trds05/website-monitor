const axios = require("axios");

const WEBSITE = "https://example.com";
const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

async function sendTelegram(message) {
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  await axios.post(url, {
    chat_id: CHAT_ID,
    text: message
  });
}

async function checkWebsite() {
  try {
    const res = await axios.get(WEBSITE);

    if (res.status === 200) {
      console.log("Website OK");
    }
  } catch (err) {
    await sendTelegram("⚠️ Website is DOWN: " + WEBSITE);
  }
}

checkWebsite();
