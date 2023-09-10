import React from "react";
import { cardListui } from "./style";

const CardList = React.memo(({name,id,img,exchangeRate,selected,selectStore}:any) => {
  console.log(selected)
  return (
    <div onClick={()=> selectStore(id)} className={cardListui()}>
      <div>
        <img src={img} alt="" />
        <p>{name}</p>
      </div>
      <div className="mt-4 ">
        <div className="">
          <p className="text-[13px] text-[#6d6d6d]">$-Currency</p>
          <p>{exchangeRate}</p>
        </div>
        <p>-</p>
        <div  className="">
          <button className="bg-[#eaeaea] text-[#000] rounded px-4 py-2">select</button>
        </div>
      </div>
    </div>
  );
});

export default CardList;
