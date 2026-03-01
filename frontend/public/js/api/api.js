export async function getInventory(url) {
  try {
    const response = await fetch('/api')
    if(!response.ok) {
      throw Error('Error to get data from api')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error(`Error: ${error.message}`)
  }
}

