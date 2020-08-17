import React, {Component} from "react";
import {storeProducts, detailProduct} from "./data.js";

const ProductContext=React.createContext();
//provider
//context

export default class ProductProvider extends Component{
    state={
        products:[],
        detailProduct:detailProduct,
        cart:[],
        modalOpen:false,
        modalProduct:detailProduct,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0
    }
    componentDidMount=()=>{
        this.setProduct();
    }
    setProduct=()=>{
        let tempProducts=[];
        storeProducts.map(item=>{
            const singleItem={...item};
            tempProducts=[...tempProducts,singleItem];
            this.setState(()=>({
                products:tempProducts
            }))
        });
    }

    getItem=(id)=>{
        const product=this.state.products.find((item)=>item.id===id);
        return product;
    }

    handleDetail=(id)=>{
        const product=this.getItem(id);
        this.setState(()=>({
            detailProduct:product
        }));
   }
   addToCart=(id)=>{
    let tempProduct=[...this.state.products]
    let index=tempProduct.indexOf(this.getItem(id));
    const product=tempProduct[index];
    product.inCart=true;
    product.count=1;
    const price=product.price;
    product.total=price;
    this.setState(()=>{
        return {products:tempProduct, cart:[...this.state.cart, product]};
    },()=>{this.addTotals();
    }); 
}
openModel=(id)=>{
    const product=this.getItem(id);
    this.setState(()=>({
        modalProduct:product, modalOpen:true,
    }));
}
closeModel=(id)=>{
    this.setState(()=>({
        modalOpen:false,
    }));
}
increment=(id)=>{
    let tempCart=[...this.state.cart];
    const selectedProduct=tempCart.find(item=>item.id===id);
    const index=tempCart.indexOf(selectedProduct);
    const Product=tempCart[index];
    Product.count=Product.count+1;
    Product.total=Product.count*Product.price;

    this.setState(()=>({cart:[...tempCart]}),()=>{
         this.addTotals();
    })
}
decrement=(id)=>{
    let tempCart=[...this.state.cart];
    const selectedProduct=tempCart.find(item=>item.id===id);
    const index=tempCart.indexOf(selectedProduct);
    const Product=tempCart[index];
    Product.count=Product.count-1;
    if(Product.count===0){
        this.removeItem(id);
    }else{
        Product.total=Product.count*Product.price;
        this.setState(()=>({cart:[...tempCart]}),()=>{
            this.addTotals();
       })
    }
   
}
removeItem=(id)=>{
    const tempProduCT=[...this.state.products];
    let tempCart=[...this.state.cart];
    tempCart=tempCart.filter((item)=>item.id!==id);
    const index=tempProduCT.indexOf(this.getItem(id));
    let removeProduct=tempProduCT[index];
    removeProduct.inCart=false;
    removeProduct.count=0;
    removeProduct.total=0;
    this.setState(()=>({
        cart:[...tempCart],
        products:[...tempProduCT],

    }),()=>{
        this.addTotals();
    })
}
clearCart=(id)=>{
    this.setState(()=>{
        return{
            cart:[]
        }
    },()=>{
        this.setProduct();
        this.addTotals();
    })
}
addTotals=()=>{
    let subTotal=0;
    this.state.cart.map(item=>{subTotal +=item.total});
    const tempTax=subTotal*0.1;
    const tax=parseFloat(tempTax.toFixed(2));
    const total=subTotal+tax;
    this.setState(()=>{
        return{
            cartSubTotal:subTotal,
            cartTax:tax,
            cartTotal:total
        }
    })
}
render(){
    return(
        <ProductContext.Provider value={{
          ...this.state,
          handleDetail:this.handleDetail,
          addToCart:this.addToCart,
          openModel:this.openModel,
          closeModel:this.closeModel,
          increment:this.increment,
          decrement:this.decrement,
          removeItem:this.removeItem,
          clearCart:this.clearCart
        }}>
            {this.props.children}
        </ProductContext.Provider>
    )
}
}
const ProductConsumer=ProductContext.Consumer;

export {ProductProvider, ProductConsumer};