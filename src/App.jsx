import { useState } from 'react';

// export default function App(){

//   const [count,setCount] = useState(0);
//   const increase = () =>{
//     setCount(count+1);
//   };
//   const deacrese = () =>{
//     setCount(count-1);
//   };

//   const [theme,setTheme] = useState('light');
//   const toggletheme = () =>{
//     setTheme(theme === 'light' ? "dark" : "light");

//   }
//   const isDark = theme === "dark";

//   return (
//     <div style={{
//         minHeight: "100vh",
//         padding: "30px",
//         backgroundColor: isDark ? "#1e293b" : "#ffffff",
//         color: isDark ? "#ffffff" : "#000000",
//         transition: "all 0.3s ease", // برای نرم عوض شدن رنگ‌ها
//       }}>
//      <h1> عدد فعلی {count}</h1>
//      <button onClick={increase}>افزایش سس</button>
//      <button onClick={deacrese}>کاهش عدد</button>
//       <h1>{theme}</h1>
//       <button onClick={toggletheme}>روشن یا خاموش {isDark ? "dark" : "light"}</button>

//     </div>
//   )
// }


// export default function App() {
//   const [name,setName] = useState("");
//   const handleChange = (e) =>{
//     setName(e.target.value);
//   };
//   const handleClear = () =>{
//     setName("");
//   }
//   return(
//     <div>
//     <input type="text" value={name} onChange={handleChange}/>
//     <h1>{name}</h1>
//     <button onClick={handleClear}>clear</button>
//     </div>
//   );
// }

// export default function App() {
//   const [dollar,setDollar] = useState(0);
//   const handleDollarChange = (e) =>{
//     setDollar(Number(e.target.value));
//   };

//   return(
//     <div>
//       <label htmlFor="">قیمت را وارد کن</label>
//       <input type="number"  placeholder='قیمت رو بده' onChange={handleDollarChange}/>
//       <h1>قیمت به دلار {dollar * 100000}</h1>
//     </div>
//   );
// }
import User from "./Navbar";
import Product from "./Product";
import Form from "./Form";
import Test from './UseEffect';
import CreatePost from './component/CreatePost';
import PostManager from './component/PostManager';
import {Routes,Route} from 'react-router-dom';
export default function App() {
  const users = [
    { id: 1, name: "Amir", age: 20 },
    { id: 2, name: "Ali", age: 25 },
    { id: 3, name: "Reza", age: 30 }
  ];

  const products = [
    { id: 1, name: "Laptop", number: 5 },
    { id: 2, name: "Mouse", number: 0 },
    { id: 3, name: "Keyboard", number: 8 }
  ];

  return (
    <Routes>
  <Route
    path="/"
    element={
      <>
        <CreatePost />
        <Test />
        <User name="amir" age={12} />

        <Product
          name="Peste"
          number={1}
          aviable={true}
        />

        {products
          .filter(product => product.number > 0)
          .map(product => (
            <Product
              key={product.id}
              name={product.name}
              number={product.number}
            />
          ))}

        <Form />
      </>
    }
  />

  <Route path="/Post" element={<PostManager />} />
</Routes>
  );
}