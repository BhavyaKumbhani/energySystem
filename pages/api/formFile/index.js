const qs = require("qs");
import axios from "axios";

export default async function handler(req, res) {
  if (req.method != "POST") {
    res.status(405).json({ cod_resp: "901", msg: "Only POST request" });
  }
  const remoteServerUrl =
    "https://api.jesamconsulting.com/.netlify/functions/send-email-v2";
  try {
    const respuesta_api = await axios.post(remoteServerUrl, req.body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await respuesta_api.data; //json();

    if (!data) {
      res
        .status(200)
        .json({ cod_resp: "902", msg: "No data received from server" });
    }

    if (data.error === "") {
      res.status(200).json({ cod_resp: "000", msg: data.message });
    } else {
      res.status(200).json({ cod_resp: "903", msg: "Error: " + data.error });
    }
  } catch (err) {
    res.status(200).json({ cod_resp: "950", msg: err.message });
  }
}
