import axios from "axios"
import { HOPSHOP_USERNAME, HOPSHOP_PASSWORD } from "react-native-dotenv"
const hopshop = axios.create({
  baseURL: "https://online-mega-mall.my.canva.site/",
  auth: { username: HOPSHOP_USERNAME, password: HOPSHOP_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function hopshop_get__read(payload) {
  return hopshop.get(`/`)
}
export const apiService = { hopshop_get__read }
