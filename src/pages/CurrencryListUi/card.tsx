import React,{useState,useRef} from "react";
import { cardListui, inputBox } from "./style";

const CardList = React.memo(
  ({ name, img, exchangeRate, selected, selectStore, item }: any) => {

    const ref = useRef<HTMLInputElement | null>(null)
     let isSelected = selected.find((value: any) => value.id === item.id);

    return (
      <div onClick={() =>{

        
         if(ref.current?.defaultValue){
          return
         }
        
        selectStore(item)
       
      }} className={cardListui()}>
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
          <div className="">
            {isSelected ? (
              <input autoFocus ref={ref} type="number" onChange={(e)=>{
                setValue(+e.target.value)
                if(!e.target.value){
                    selectStore(item)
                }
              }} className="border w-[76px] px-2 py-2 rounded " defaultValue={1}/>
            ) : (
              <button className="bg-[#eaeaea] text-[#000] rounded px-4 py-2">
                select
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
);

export default CardList;
