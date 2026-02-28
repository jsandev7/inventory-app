import { extname, join } from 'node:path'
import { readFile } from 'node:fs/promises'
import { sendResponse } from './sendResponse.js'
import { getContentType } from './getContentType.js'

export async function serveStaticResource(baseDirectory, req, res) {

  const publicPath = join(baseDirectory, '..', '..', 'frontend', 'public')
  console.log(publicPath)
  const filePath = join(publicPath,
    req.url === '/' ? 'index.html' : req.url
  )
  console.log(`File path: ${filePath}`)

  const fileExtension = extname(filePath)

  const contentType = getContentType(fileExtension)

  try {
    const content = await readFile(filePath, 'utf-8')
    console.log('Successfully read')
    sendResponse(res, 200, contentType, content)

  } catch (error) {
    if (error.code === 'ENOENT') {
      const notFoundPagePath = join(publicPath, 'views', '404-not-found-view.html')
      const content = await readFile(notFoundPagePath, 'utf-8')
      sendResponse(res, 404, contentType, content)
    } else {
      sendResponse(res, 500, 'text/html', `<html><h1>Server Error: ${error  .code}</h1></html>`)
    }
  }
}