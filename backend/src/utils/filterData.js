export const getDataByQueryParameters = (data, queryObject) => {
  const {
    name, 
    category,
    brand, 
    isActive, 
    warehouse_location
  } = queryObject
  
  if(name) {
    return data.filter( element => {
      element.name.toLowerCase().includes(queryObject.name.toLowerCase())
    })
  }
}