try {
  const data = await fetch('/api')
  const response = await data.json()
  console.log(response)
} catch (error) {
  console.error(`Error: ${error.message}`)
}