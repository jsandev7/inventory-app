import { getData } from "../database/getData.js";
import { sendResponse } from "./sendResponse.js";

export async function handleGet(responseObject) {
  const data = await getData()
  const content = JSON.stringify(data)
  sendResponse(responseObject, 200, 'application/json', content)
}