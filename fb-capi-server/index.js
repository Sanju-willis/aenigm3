const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const crypto = require("crypto");

const app = express();
app.use(bodyParser.json());

// ✅ Replace with your actual values
const ACCESS_TOKEN = 'EAASqEvORbPsBO6syakbgZCN75tzcq6d9QN09TAVorzwtIlKuZCSMYmVPFzMSNDUEYWYRKBV9kLfI1WJoo9yurJovZBPHE2SvZAgr7RLONBDrFZC2ZAyklLZCCF8vB9GmT3TuMaHOrEYfHM0ukdr41U0shL7TMZBAqRSgMgSECIiWCrcC8UjTwbNALBtoZCZBb1tzlFTQZDZD';
const PIXEL_ID = '543529782162200';
const TEST_EVENT_CODE = 'TEST69325';

app.get("/ping", (req, res) => {
  res.send("✅ CAPI server is alive");
});

// 🔄 PageView endpoint replacing Purchase
app.post("/events", async (req, res) => {
  console.log("👀 PageView received");
  console.log("🔥 Incoming PageView:", req.body);

  const {
    email,
    gender,
    city,
    country,
    client_ip_address,
    user_agent,
    event_id
  } = req.body;

  const userData = {
    client_ip_address,
    client_user_agent: user_agent,
  };

  if (email) {
    const hashedEmail = crypto.createHash("sha256").update(email.trim().toLowerCase()).digest("hex");
    userData.em = [hashedEmail];
  }

  if (gender) {
    const hashedGender = crypto.createHash("sha256").update(gender.trim().toLowerCase()).digest("hex");
    userData.ge = [hashedGender];
  }

  if (city) {
    const hashedCity = crypto.createHash("sha256").update(city.trim().toLowerCase()).digest("hex");
    userData.ct = [hashedCity];
  }

  if (country) {
    const hashedCountry = crypto.createHash("sha256").update(country.trim().toLowerCase()).digest("hex");
    userData.country = [hashedCountry];
  }

  const event = {
    access_token: ACCESS_TOKEN,
    test_event_code: TEST_EVENT_CODE,
    data: [
      {
        event_name: "PageView",
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        event_source_url: "http://localhost:3000",
        user_data: userData,
        event_id: event_id || "pageview-" + Date.now()
      }
    ]
  };

  try {
    const response = await axios.post(
      `https://graph.facebook.com/v18.0/${PIXEL_ID}/events`,
      event
    );
    console.log("✅ Facebook PageView:", response.data);
    res.send(response.data);
  } catch (error) {
    console.error("❌ Facebook API Error:", error.response?.data || error.message);
    res.status(500).send(error.response?.data || error.message);
  }
});

app.listen(3000, () => {
  console.log("🔥 FB CAPI Server running at http://localhost:3000");
});
