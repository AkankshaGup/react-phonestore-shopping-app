import React, {Component} from "react";

export default function CartColumn(){
   
    return(
        <div className="containe-fluid text-center d-done d-lg-block">
            <div className="row">
            <div className="col-10 max-auto col-lg-2">
              <p className="text-uppercase">product</p>
          </div>
          <div className="col-10 max-auto col-lg-2">
              <p className="text-uppercase">Name of product</p>
          </div>
          <div className="col-10 max-auto col-lg-2">
              <p className="text-uppercase">price</p>
          </div>
          <div className="col-10 max-auto col-lg-2">
              <p className="text-uppercase">quantity</p>
          </div>
          <div className="col-10 max-auto col-lg-2">
              <p className="text-uppercase">remove</p>
          </div>
          <div className="col-10 max-auto col-lg-2">
              <p className="text-uppercase">total</p>
          </div>
            </div>
         
        </div>
    )

}