export async function sendResponse(requestObject, responseObject, statusCode, contentType, data) {
  responseObject.statusCode = statusCode
  responseObject.setHeader('Content-Type', contentType)
  responseObject.end(JSON.stringify(data))
}