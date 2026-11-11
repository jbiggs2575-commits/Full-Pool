import { useState, useEffect, createContext } from 'react'
import { v4 } from 'uuid'
import axios from 'axios'

export const ProductsContext = createContext(null);

export const ProductsProvider = ({ children }) => {
  let [products, setProducts] = useState([])
  const [cost, setCost] = useState(0)
  const [finalCost, setFinalCost] = useState(0)
  const [clicked, setClicked] = useState(false)
  let [name, setName] = useState(String)
  let [counter1, setCounter1] = useState(Number)

  useEffect(() => {
    findAllProducts()
  }, [])

  const handleClick = function (e) {
    let type = e.target.name.slice(0, 1).toUpperCase()
    let type2 = e.target.name.slice(1)
    let finalType = type + type2

    findAllProducts(finalType)
  }

  const handleChange = async (e) => {
    let price = 0

    products.map((elem, i) => {
      if (elem._id === e.target.id) {
        let itemPrice = elem.price
        let qty = products[i].qty = Number(products[i].qty += 1)

        price = itemPrice++

        setName(e.target.name)
        setCounter1(qty)
      }
    })

    setCost(price)
    setFinalCost(price + finalCost)
  }

  const handleChangeSubtract = async (e) => {
    let price = 0

    products.map((elem, i) => {
      if (elem._id === e.target.id) {
        if (elem.qty <= 0) {
          return
        } else {
          let itemPrice = elem.price
          let qty = products[i].qty = Number(products[i].qty -= 1)

          price = itemPrice--

          setName(e.target.name)
          setCounter1(qty)
        }
      }
    });

    setCost(price)
    setFinalCost(finalCost - price)
  }

  const typeFilter = function (e) {
    setClicked(true)
  }

  const findAllProducts = async (finalType) => {
    try {
      const result = await axios.get('/products')

      setProducts(finalType
        ? result.data.filter(elem => elem.type === finalType)
        : result.data)

      return typeFilter(finalType)
    }
    catch (err) {
      console.error(err)
    }
  }

  return (
    <ProductsContext.Provider value={{
      products,
      v4,
      handleClick,
      handleChange,
      handleChangeSubtract,
      typeFilter,
      findAllProducts,
      cost,
      clicked,
      name,
      finalCost,
      counter1
    }}>

      {children}
    </ProductsContext.Provider>
  )
}