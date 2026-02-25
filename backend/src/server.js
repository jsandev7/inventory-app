import http from 'node:http';
import { getDataFromDB } from './database/getDataFromDB.js';
import { sendResponse } from './utils/sendResponse.js';

const PORT = 8000

const connectionMessage = () => console.log(`Server is running on port: ${PORT}`);

const server = http.createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === '/api') {
    const data = await getDataFromDB()
    const contentType = 'application/json'
    sendResponse(req, res, 200, contentType, data)
  } else {
    const data = {
      message: 'Error from API'
    }
    const contentType = 'application/json'
    sendResponse(req, res, 404, contentType, data.message)
    console.error('>> Error from API')
  }
})

server.listen(PORT, connectionMessage())