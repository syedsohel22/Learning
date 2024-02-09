import React,{useEffect} from "react";
import {useState,useContext} from "react"
import ProductsTable from "../Components/ProductsTable";
import {AuthContext} from "../Context/AuthContext"
import Loader from "../Components/Loader";


const getData = () =>{
  return fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products")
  .then((res)=>res.json())
}

function Dashboard() {
  const {authState,logoutUser} = useContext(AuthContext);
  const [loading,setLoading] =  useState(false)
  const [product,setProduct] = useState([])

  useEffect(()=>{
    setLoading(true)
    getData().then(res=>{
      setProduct(res.data)
      setLoading(false)
    })
    .catch(err=>{
      console.log(err)
    })
  })
  console.log(product)

  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={logoutUser}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {loading ? <Loader/> : <ProductsTable data={product}/>}
      </div>
    </div>
  );
}

export default Dashboard;
