import React from "react";
import CartCard from "./CartCard.jsx";
import { useState, useEffect } from "react";

const Cart = () => {
  const [itemlist, setitemlist] = useState([]);
  const [quantlist, setquantlist] = useState([]);

  useEffect(() => {
    console.log("Useeffect is triggered")
    console.log(itemlist, quantlist)
    
  }, [itemlist, quantlist])
  

  const additem = () => {
    let argpassed = "123213id12312";
    if (itemlist.includes(argpassed)) {
      let temp = quantlist[itemlist.indexOf(argpassed)] + 1;
      let newquantlist = [...quantlist];
      newquantlist[itemlist.indexOf(argpassed)] = temp;
      setquantlist(newquantlist);
    } else {
      let newitemlist = [...itemlist];

      if(itemlist.length == 0){
        newitemlist = []
        
      }
      newitemlist.push(argpassed);
      console.log("here ", newitemlist)
      setitemlist(newitemlist);
      let newquantlist = quantlist;
      newquantlist.push(1);
      setquantlist(newquantlist);
    }

    console.log("setted it the new lists are : ", itemlist, quantlist);
  };

  const childAdd = (argpassed) => {
    console.log("triggered childadd");
    // let argpassed = "123213id";
    if (itemlist.includes(argpassed)) {
      let temp = quantlist[itemlist.indexOf(argpassed)] + 1;
      let newquantlist = [...quantlist];
      newquantlist[itemlist.indexOf(argpassed)] = temp;
      setquantlist(newquantlist);
    } else {
      let newitemlist = [...itemlist];
      newitemlist.push(argpassed);
      setitemlist(newitemlist);
      let newquantlist = quantlist;
      newquantlist.push(0);
      setquantlist(newquantlist);
    }

    console.log("setted it the new lists are : ", itemlist, quantlist);
  };

  const childRemove = (argpassed) => {
    console.log("triggered childremove");
    // let argpassed = "123213id";
    let temp = quantlist[itemlist.indexOf(argpassed)] - 1;
    if (temp == 0) {
      if(quantlist.length == 1){
        setquantlist([]);
        setitemlist([]);
        return;
      }
      let tempindex = itemlist.indexOf(argpassed)
      let newitemlist = [...itemlist]
      newitemlist.splice(tempindex, 1)
      let newquantlist = [...quantlist]
      quantlist.splice(tempindex, 1)
      setquantlist(newquantlist);
      setitemlist(newitemlist);
    } 
    else {
      let newquantlist = [...quantlist];
      newquantlist[itemlist.indexOf(argpassed)] = temp;
      setquantlist(newquantlist);
    }
  };

  return (
    <div>
      <div className="pt-4">
      {itemlist.map(item => (
        <CartCard id={item} quantity={quantlist[itemlist.indexOf(item)]} childAdd={childAdd}
        childRemove={childRemove}/>
      ))}
        {/* <CartCard
          id={itemlist[0]}
          quantity={quantlist[0]}
          childAdd={childAdd}
          childRemove={childRemove}
        />
      </div>
      <div className="pt-4">
        <CartCard
          id={itemlist[1]}
          childAdd={childAdd}
          childRemove={childRemove}
        />
      </div>
      <div className="pt-4">
        <CartCard
          id={itemlist[2]}
          childAdd={childAdd}
          childRemove={childRemove}
        />
      </div>
      <div className="pt-4">
        <CartCard
          id={itemlist[3]}
          childAdd={childAdd}
          childRemove={childRemove}
        /> */}
      </div>

      <div className="mycentre h3">Total : 276</div>
      <div className="mycentre">
        <button className="btn btn-primary ">Pay</button>
        <button className="btn btn-primary mymargin" onClick={additem}>
          Add Item
        </button>
      </div>
    </div>
  );
};

export default Cart;
