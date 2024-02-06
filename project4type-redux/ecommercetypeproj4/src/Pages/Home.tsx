// import React, { useState, useEffect } from "react";
// import axios from "axios";
// //import { Item } from '../Redux/CartSlice'// this is type for data which is coming from api
// import "./Home.css";
// import { IUser } from "../models/Userapi";
// import { useDispatch } from "react-redux";
// import { addItem } from "../Redux/CartSlice";
// import Spinner from "../components/Spinner";
// const [loading, setLoading] = useState(true);

// interface IState {
//   items: IUser[];
// }
// const Home: React.FC = () => {
//   const [state, setState] = useState<IState>({
//     items: [],
//   });
//   let dispatch = useDispatch();

//   useEffect(() => {
//     let getApicall = async () => {
//       try {
//         let responce = await axios.get("https://fakestoreapi.com/products");
//         console.log(responce.data);
//         setState({ items: responce.data });
//       } catch (error) {
//         console.log("Error fetching data", error);
//       }
//     };
//     getApicall();
//   }, []);

//   let handleAdd = (_product: IUser) => {
//     console.log("adding item ", _product);
//     dispatch(addItem(_product));
//   };

//   return (
//     <div>
//       Home
//       <h1>{state.items.length}</h1>
//       <div>
//         Home
//         <div>
//       {loading ? (<Spinner/>
        
//       ) : (
//         <>
//           <h1>Data Loaded!</h1>
//           <div className="card">
//             {state.items.map((product) => (
//               <div key={product.id}>
//                 <img src={product.image} alt="img" />
//                 <h4>{product.price}</h4>
//                 <h4>{product.category}</h4>
//                 <h3>{product.title}</h3>
//                 <div className="centered-button">
//                   <button className="button-medium" onClick={() => handleAdd(product)}>
//                     AddItem
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </>
//       )}
//     </div>
        
//       </div>
//     </div>
//   );
// };

// export default Home;


//-----------------------------------


import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import { IUser } from "../models/Userapi";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/CartSlice";
import Spinner from "../components/Spinner";

interface IState {
  items: IUser[];
}

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true); // Move useState inside the component body
  const [state, setState] = useState<IState>({
    items: [],
  });
  const dispatch = useDispatch();

  useEffect(() => {
    let getApicall = async () => {
      try {
        let response = await axios.get("https://fakestoreapi.com/products");
        console.log(response.data);
        setState({ items: response.data });
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.log("Error fetching data", error);
        setLoading(false); // Set loading to false in case of an error
      }
    };
    getApicall();
  }, []);

  let handleAdd = (_product: IUser) => {
    console.log("adding item ", _product);
    dispatch(addItem(_product));
  };

  return (
    <div>
      Home
      <h1>{state.items.length}</h1>
      <div>
        Home
        <div>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <h1>Data Loaded!</h1>
              <div className="card">
                {state.items.map((product) => (
                  <div key={product.id}>
                    <img src={product.image} alt="img" />
                    <h4>{product.price}</h4>
                    <h4>{product.category}</h4>
                    <h3>{product.title}</h3>
                    <div className="centered-button">
                      <button
                        className="button-medium"
                        onClick={() => handleAdd(product)}
                      >
                        AddItem
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
