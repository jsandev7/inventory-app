import http from 'node:http';
import { serveStaticResource } from './utils/serveStaticResource.js';
import { handleGet } from './utils/routeHandlers.js';

const PORT = 8000

const connectionMessage = () => console.log(`Server is running on port: ${PORT}`);

const __dirname = import.meta.dirname

const server = http.createServer(async (req, res) => {

  if (!req.url.startsWith('/api')) {
    return await serveStaticResource(__dirname, req, res)
  }

  if(req.url === '/api') {
    if(req.method === 'GET') {
      return handleGet(res)
    }
  }
  // if (req.method === 'GET' && req.url === '/api') {
  //   // const data = await getDataFromDB()
  //   // const contentType = 'application/json'
  //   // sendResponse(req, res, 200, contentType, data)
  //   await serveStaticResource(__dirname, req, res)

  // } else if (req.method === 'GET' && req.url.startsWith('/api/inventory')) {
  //   const urlObj = new URL(req.url, 'http://${req.headers.host}')
  //   const queryObj = Object.fromEntries(urlObj.searchParams)
  //   console.log(queryObj)

  //   const data = await getDataFromDB()

  //   if (Object.keys(queryObj).length === 0) {
  //     console.log('Not query parameters')
  //     const data = await getDataFromDB()
  //     const contentType = 'application/json'
  //     sendResponse(req, res, 200, contentType, data)
  //   } else {
  //     console.log('Have a query parameters')
  //     const filteredData = getDataByQueryParameters(data, queryObj)
  //     const contentType = 'application/json'
  //     sendResponse(req, res, 200, contentType, filteredData)
  //   }
  // }

  // else {
  //   const data = {
  //     message: 'Error from API'
  //   }
  //   const contentType = 'application/json'
  //   sendResponse(req, res, 404, contentType, data.message)
  //   console.error('>> Error from API')
  // }
})

server.listen(PORT, connectionMessage())