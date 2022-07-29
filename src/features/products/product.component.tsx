import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from './product.slice'

type Props = {}

const Product = (props: Props) => {
    const dispatch = useDispatch();
    const products = useSelector((state:any)=> state.product.value)
    useEffect(()=>{
        dispatch(getProducts())
    },[])
  return (
    <div>{products?.map((item:any)=>item.name)}</div>
  )
}

export default Product