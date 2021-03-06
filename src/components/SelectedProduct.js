import React, {useEffect} from 'react'
import {fetchProduct, removeSelectedProduct} from '../redux/actions/productActions'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'

const SelectedProduct = () => {
    const dispatch = useDispatch()

    // Fetching the Parameter Value
    const {productId} = useParams()

    // Fetching the Selected Product from the global Store
    const product = useSelector((state) => state.selectedProduct)
    const {id, title, price, description, category, image} = product

    // This useEffect will run every time whenever "productId" will changes in the future
    useEffect(() => {
        if (productId && productId !== "") {dispatch(fetchProduct(productId)) }
        // Writing a cleanup function to unmount the selected product when the component umnount
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [productId,dispatch])



    return (
        <div className="ui grid container">
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">AND</div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img className="ui fluid image" src={image} />
                </div>
                <div className="column rp">
                  <h1>{title}</h1>
                  <h2>
                    <a className="ui teal tag label">${price}</a>
                  </h2>
                  <h3 className="ui brown block header">{category}</h3>
                  <p>{description}</p>
                  <div className="ui vertical animated button" tabIndex="0">
                    <div className="hidden content">
                      <i className="shop icon"></i>
                    </div>
                    <div className="visible content">Add to Cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
}

export default SelectedProduct
