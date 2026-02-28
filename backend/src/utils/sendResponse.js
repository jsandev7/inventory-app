export async function sendResponse(responseObject, statusCode, contentType, data) {
  responseObject.statusCode = statusCode
  responseObject.setHeader('Content-Type', contentType)
  responseObject.end(data)
}