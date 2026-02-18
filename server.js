import http from 'node:http';

const PORT = 8000

const CONNECTION_MESSAGE = () => { 
  console.log(`>> Server is running on port: ${PORT}
               \n>> To stop it, press "Ctrl + C"`)
}

const server  = http.createServer((req, res) => {
  res.end('Hello from console')
})

server.listen(PORT, CONNECTION_MESSAGE)