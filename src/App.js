import './App.css';

// ** styles 

const styles = {
  backgroundColor : 'purple',
  color: "white",
  border: '1px solid black',
  padding : '20px',
  borderRadius: '15px',
  
}

function App() {
  const cartProducts = [
    {productName: 'laptop', price: 35000},
    {productName: 'Mobile', price: 95000},
    {productName: 'Watch', price: 75000},
    {productName: 'Charger', price: 35000},
    {productName: 'Desk', price: 25000},
    {productName: 'Matt', price: 15000},

  ]
  return (
    <div className="App">
       <h1>React</h1>
      {
        cartProducts.map(product => {
          const {productName,price} = product;
          return <Products name={productName} price={price}></Products>
        })
      }
     
    
    </div>
  );
};

// ** component -> functional component -> return korbe jsx , ei banano component ta amra amader issa moto use kore dekhte parbo

function Products({name,price}){
 
  return(

    <div style={styles}>
      <h1>Product-Name:{name} </h1>
      <p>Price:{price} </p>
    </div>

  )
}

export default App;
