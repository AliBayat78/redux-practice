import { useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'

const ProductsList = () => {
  const products = useSelector((state) => state)
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  )
}

export default ProductsList
