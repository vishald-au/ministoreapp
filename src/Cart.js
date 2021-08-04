import { useCart } from 'react-use-cart'

const Cart = () => {

    const {
        items,
        isEmpty,
        totalItems,
        totalUniqueItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart()
    if (isEmpty) return <h1>Cart Empty</h1>
    return (
        <section className='py-4 container'>
            <div className='row justify-content-center'>
                <div className='col-12'>
                    <h5>Cart ({totalUniqueItems}) Total Items: ({totalItems})</h5>
                    <table className='table table-light table-hover m-0'>
                        <tbody>
                            {items.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.img} className='maxh100' /></td>
                                    <td>{item.title}</td>
                                    <td>${item.price}</td>
                                    <td>Quantity ({item.quantity})</td>
                                    <td>
                                        <button
                                            className='btn btn-info ms-2'
                                            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                        >-</button>
                                        <button
                                            className='btn btn-info ms-2'
                                            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                        >+</button>
                                        <button
                                            className='btn btn-danger ms-2'
                                            onClick={() => removeItem(item.id)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='col-auto ms-auto'>
                    <h2>Total Price: ${cartTotal}</h2>
                </div>
                <div className='col-auto'>
                    <button
                        className='btn btn-danger'
                        onClick={() => emptyCart()}
                    >Clear Cart</button>
                    <button
                        className='btn btn-info ms-2'
                    >Checkout</button>
                </div>
            </div>
        </section >
    )
}

export default Cart
