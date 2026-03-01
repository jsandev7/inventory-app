export function renderTable(data) {
  const tableBody = document.querySelector('#inventory-body')
  let tableTemplate = data.map(element =>
    `<tr>
      <td>
        <span class="badge ${element.isActive ? 'active' : 'inactive'}">
          ${element.isActive ? 'Active' : 'Inactive'} 
        <span>
      </td>
      <td>
        <strong>${element.name}</strong>
      </td>
      <td>${element.category}</td>
      <td>${element.brand}</td>
      <td>$${element.price}</td>
      <td>${element.warehouse_location}</td>
      <td class="text-center">
        <a href="./item-details.html?id=${element.uuid}" class="btn-detail">
        View Details
        </a>
      </td>
    </tr>`
  ).join('');
  
  tableBody.innerHTML = tableTemplate
}