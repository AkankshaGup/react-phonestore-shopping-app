import React, {Component} from "react";
import CartItem from "./cartitem";

export default function CartList({value}){
   const {cart}=value;
    return(
        <div className="containe-fluid" >
         {cart.map((item)=>{
             return(<CartItem key={item.id} item={item} value={value} />)
         })} 
        </div>
    )

}