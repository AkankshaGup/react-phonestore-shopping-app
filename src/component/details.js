import React, {Component} from "react";
import {ProductConsumer} from "../context.js";
import {Link} from "react-router-dom";
import {ButtonContainer} from "./button.js";

export default class Details extends Component{
render(){
    return(
        <ProductConsumer>
           {value=>{
              const {id,company,img,info,price,title,inCart}=value.detailProduct;
              return(
                  <div className="container py-5">
                      {/* product title */}
                      <div className="row">
                          <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                              <h1>{title}</h1>
                          </div>
                      </div>
                       {/* End product title */}
                        {/* product Info */}
                        <div className="row">
                        <div className="col-10 mx-auto my-3 col-md-6">
                                <img src={img} className="img-fluid" alt="product" />
                                </div>
                                <div className="col-10 mx-auto text-capitalize my-3 col-md-6">
                                <h2>model : {title}</h2>
                                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                    made by : <span className="text-uppercase">{company}</span>
                                </h4>
                                <h4 className="text-blue">
                                     <strong>price : <span>$</span>{price}</strong>
                                </h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-2">
                                  some info about the product
                                </p>
                                <p className="text-muted lead">
                                  {info}
                                </p>
                                {/* buttons */}
                                <div>
                                    <Link to="/">
                                        <ButtonContainer>
                                             back to product
                                        </ButtonContainer>
                                    </Link>
                                    <ButtonContainer
                                    cart
                                    disabled={inCart?true:false}
                                    onClick={()=>{
                                        value.addToCart(id);
                                        value.openModel(id);
                                    }}
                                    >
                                        {inCart?"inCart":"add to cart"}
                                    </ButtonContainer>
                                </div>
                            </div>
                        </div>
                         {/* End product info */}

                  </div>
              )
           }}
        </ProductConsumer>
    )
}
}