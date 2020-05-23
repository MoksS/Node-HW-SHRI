import axios from "axios";
import { Agent } from "https";

const httpsAgent = new Agent({
  rejectUnauthorized: false,
});

const inst = axios.create({
  baseURL: "https://hw.shri.yandex/api",
  timeout: 3000,
  headers: { Authorization: `Bearer ${process.env.TOKEN}` },
  httpsAgent,
});

export default inst;
