import Products from './Products'
import data from './data'

const Home = () => {

    console.warn(data.productData)

    return (
        <>
            <h1 className='text-center mt-3'>All Products</h1>
            <section className='py-4 container'>
                <div className='row justify-content-center'>
                    {data.productData.map(item => (
                        <Products
                            key={item.id}
                            item={item}
                            img={item.img}
                            title={item.title}
                            price={item.price}
                        />
                    ))}

                </div>
            </section>
        </>
    )
}

export default Home
