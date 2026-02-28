export const getDataByQueryParameters = (data, queryObject) => {
  const {
    name,
    category,
    brand,
    isActive
  } = queryObject

  if (name) {
    return data.filter(element => {
      const searchName = name.toLowerCase()
      return element.name.toLowerCase().includes(searchName)
    })
  }

  if (category) {
    return data.filter(element => {
      const searchCategory = category.toLowerCase()
      return element.category.toLowerCase() === searchCategory.toLowerCase()
    })
  }

  if (brand) {
    return data.filter(element => {
      const searchBrand = brand.toLowerCase()
      return element.brand.toLowerCase() === searchBrand.toLowerCase()
    })
  }

  if (isActive) {
    return data.filter(element => {
      const elementValue = isActive === 'true' ? true : false
      return element.isActive === elementValue
    }
    )
  }
}