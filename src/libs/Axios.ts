import { server, port } from "./ServerPort";

let HttpsProxyAgent = require("https-proxy-agent"),
      axios = require("axios");

const httpsAgent = new HttpsProxyAgent({host: `${server}`, port: `${port}`, auth: "username:password"})

//use axios as you normally would, but specify httpsAgent in the config
export default axios = axios.create({httpsAgent});