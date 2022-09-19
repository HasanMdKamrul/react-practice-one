import { useEffect, useState } from 'react';
import './App.css';

// ** styles 



function App() {
 
  return (
    <div className="App">
      <h1>Extranal Users from Api</h1>
      <ExtranalUsers></ExtranalUsers>
      {/* <h1>Counter App</h1>
      <Counter></Counter> */}
    </div>
  );
};


// ** Extranal user fetching component

function ExtranalUsers(){ 
  const [users,setUsers] = useState([]);
  // ** fetching the data 

  useEffect(()=>{
    const dataLoader = async ()=>{
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        response.ok ? console.log('Successfull') : console.log('failed');
        const data = await response.json();
        setUsers(data)
      } catch (error) {
        console.log(error)
      }
    }
    dataLoader()
  },[]);

  return(
    <div>
      {
        users.map(user => {
          const {name,email} = user;
          return <UserDisplay name={name} email={email}></UserDisplay>
        })
      }
    </div>
  )

};

const styles = {
  border: '2px solid red',
  margin: '15px',
  borderRadius: '20px',
  backgroundColor: 'beige',
  padding: '5%'
}

const UserDisplay = ({name,email})=>{
  return(
    <div style={styles}>
      <h1>Name:{name} </h1>
      <p>Email:{email}</p>
    </div>
  )
}

// ** Functional counter component

const Counter = ()=>{
  // ** useState() => ekta array return kore [initialvalue, function] ei format a
  const [count,setCount] = useState(0);
 // ** Increase handler function

  const increaseHandler = ()=> setCount(count + 1);
  const decreaseHandler = ()=> setCount(count - 1);
  const resetCounter = ()=> setCount(0);

  return(

    <div>
      <p>Count :{count} </p>
      <button onClick={increaseHandler}>Increase</button>
      <br />
      <br />
      <button onClick={decreaseHandler}>Decrease</button>
      <br />
      <br />
      <button onClick={resetCounter}>Reset</button>
    </div>

  )
}

// ** component -> functional component -> return korbe jsx , ei banano component ta amra amader issa moto use kore dekhte parbo

// const styles = {
//   backgroundColor : 'purple',
//   color: "white",
//   border: '1px solid black',
//   padding : '20px',
//   borderRadius: '15px',
  
// }

// function Products({name,price}){
 
//   return(

//     <div style={styles}>
//       <h1>Product-Name:{name} </h1>
//       <p>Price:{price} </p>
//     </div>

//   )
// }

export default App;


// const cartProducts = [
//   {productName: 'laptop', price: 35000},
//   {productName: 'Mobile', price: 95000},
//   {productName: 'Watch', price: 75000},
//   {productName: 'Charger', price: 35000},
//   {productName: 'Desk', price: 25000},
//   {productName: 'Matt', price: 15000},

// ];

// <h1>React</h1>
// {
//   cartProducts.map(product => {
//     const {productName,price} = product;
//     return <Products name={productName} price={price}></Products>
//   })
// }

