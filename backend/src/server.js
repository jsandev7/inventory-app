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
})
server.listen(PORT, connectionMessage())
