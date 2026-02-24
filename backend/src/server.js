import http from 'node:http';

const PORT = 8000

const connectionMessage = () => console.log(`Server is running on port: ${PORT}`);

const server = http.createServer( (req, res) => {
  res.end('Hello from server')
})

server.listen(PORT, connectionMessage())