import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export async function getData() {
  const __dirname = import.meta.dirname
  const filePath = join(__dirname, '..', 'data')
  const contentPath = join(filePath, 'data.json')
  try {
    const data = await readFile(contentPath, 'utf-8')
    const parsedData = JSON.parse(data)
    return parsedData
  } catch (error) {
    console.error(`Error reading file: ${error.message}`)
    return []
  }
}