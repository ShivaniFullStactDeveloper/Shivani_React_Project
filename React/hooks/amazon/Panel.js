import './Panel.css';




const Panel = ({ productArray }) => {
    return (
       
        <div className='main-container'>
          
            {/* Mapping through the data */}
            {productArray.map((item) => (
                <div className='inner-container' key={item.id}>
                    <img className='product-img' src={item.image} alt={item.name} />
                    <div>
                        <h2>{item.name}</h2>
                        {/* <p>{item.description}</p> */}
                        <p>Price: ₹{item.price}</p>
                    </div>
                    <button className='bay-button' >Add to cart</button>
                </div>
            ))}
        </div>
    
    );
};

export default Panel;
