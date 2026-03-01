import { renderTable } from "./utils/renderTable.js"
import { getInventory } from "./api/api.js"

try {
  const data = await getInventory('/api')
  renderTable(data)
} catch (error) {
  console.error(`Error: ${error.message}`)
}

const detailsButton = document.querySelector('.btn-detail')

// When click pass and read url params
detailsButton.addEventListener('click', () => {

})