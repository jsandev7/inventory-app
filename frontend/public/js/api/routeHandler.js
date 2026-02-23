export async function handleGet(url) {
  try {
    const response = await fetch(url, { method: 'GET' })
    if (!response.ok) {
      throw Error('API Error')
    }
    const data = response.json()
    return data

  } catch (error) {
    console.error(`Error: ${error.message}`)
  }
}