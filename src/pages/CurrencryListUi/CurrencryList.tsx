import { inputBox, cardListBox } from "./style";
import CardList from "./card";
import Header from "../../components/header";
import { Dispatch, SetStateAction } from "react";

const CurrencryList = ({
  data,
  recordPage,
  selected,
  selectStore,
 
  setValue
}: {
  data: any;
  recordPage: number;
  selected: any;
  selectStore: any;
  setValue: Dispatch<SetStateAction<string>>
}) => {
  return (
    <div>
      <Header />
      <div className={inputBox()}>
        <input
          onChange={(e) => {
            setValue(e.target.value)
          
          }}
          placeholder="search currency"
          type="text"
          className="outline-none"
        />
      </div>
      <div className={cardListBox()}>
        {data?.slice(0, recordPage).map((item: any) => (
          <CardList
             key={item.id}
            selected={selected}
            selectStore={selectStore}
           
            item={item}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default CurrencryList;
