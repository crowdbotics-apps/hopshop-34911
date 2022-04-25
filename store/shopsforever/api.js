import axios from "axios"
import {
  SHOPSFOREVER_USERNAME,
  SHOPSFOREVER_PASSWORD
} from "react-native-dotenv"
const shopsforever = axios.create({
  baseURL: "https://shopsforever.com",
  auth: { username: SHOPSFOREVER_USERNAME, password: SHOPSFOREVER_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
