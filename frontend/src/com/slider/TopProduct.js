import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listTopProducts } from '../../actions/productActions'
import Product from  '../product/Product'


const TopProduct = () => {
    const dispatch = useDispatch()
  
    const productTopRated = useSelector((state) => state.productTopRated)
    const { loading, error, products } = productTopRated
  
    useEffect(() => {
      dispatch(listTopProducts())
    }, [dispatch])
  
    return (
        <React.Fragment>
          {products && products.map( product => (  
            <Product key={product._id} product={product} col={3} />
          ))}
        </React.Fragment>
    )
  }
  
  export default TopProduct
