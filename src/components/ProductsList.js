import { useSelector } from "react-redux"

const ProductsList = () => {
    const products = useSelector()
  return (
    <div>
      <h1>ProductsList</h1>
    </div>
  )
}

export default ProductsList
