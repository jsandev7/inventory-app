export const getDataByQueryParameters = (data, queryObject) => {
  const {
    uuid,
    name,
    category,
    brand,
    isActive
  } = queryObject

  if(uuid) {
    return data.filter(element => {
      searchUuid = uuid.toLowerCase()
      return element.uuid.toLowerCase() === searchUuid
  })
  }

  if (name) {
    return data.filter(element => {
      const searchName = name.toLowerCase()
      return element.name.toLowerCase().includes(searchName)
    })
  }

  if (category) {
    return data.filter(element => {
      const searchCategory = category.toLowerCase()
      return element.category.toLowerCase() === searchCategory
    })
  }

  if (brand) {
    return data.filter(element => {
      const searchBrand = brand.toLowerCase()
      return element.brand.toLowerCase() === searchBrand
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