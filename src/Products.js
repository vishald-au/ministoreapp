import { useCart } from 'react-use-cart'

const Products = (props) => {

    const { addItem } = useCart()

    return (
        <div className='col-12 col-md-4 mx-0 mb-4'>
            <div className='card p-0 overflow-hidden h-100 shadow'>
                <img src={props.img} className='card-img-top img-fluid' alt={props.title} />
                <div className='card-body text-center'>
                    <h5 className='card-title'>{props.title}</h5>
                    <p className='card-text'>${props.price}</p>
                    <button href='#' className='btn btn-success' onClick={() => addItem(props.item)}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Products
