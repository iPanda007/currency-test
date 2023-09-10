import { useEffect, useRef, useState, useMemo } from "react";
import { useCurrencryStore } from "../../store/CurrencrySlice";
import CurrencryList from "../CurrencryListUi/CurrencryList";
import LoadingSpinner from "../../components/loading";


const CurrencryUi = () => {
  const [recordPage, setRecordPage] = useState<number>(12);
  const [infiniteLoading, setInifiniteLoading] = useState(false);
  const [value,setValue] = useState<string>('')
  const [filterArray,setFilterArray] = useState<any[]>([])

  const {
    currencryApi,
    loading: loadingApi,
    currencryData,
    selected,
    selectStore,
  
  } = useCurrencryStore();


   useMemo(()=>{
        const filterValue = currencryData.filter((item:any)=> item.name.toLowerCase().includes(value.toLowerCase()))
        setFilterArray(filterValue)

  },[currencryData,value])

  //Apicall
  useEffect(() => {
    currencryApi();
  }, [loadingApi]);

  //loadMore

  function loadMore() {
    setInifiniteLoading(true);

    if (recordPage > currencryData.length) {
      setInifiniteLoading(false);
      return;
    }

    setTimeout(() => {
      setRecordPage((prev) => prev + 50);
      setInifiniteLoading(false);
    }, 2000);
  }

  //infinite scroll
  const Observer: any = useRef(null);

  const lastPostRef = (node: any) => {
    if (Observer.current) Observer.current?.disconnect();

    Observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMore();
      }
    });

    if (node) Observer.current.observe(node);
  };

  return (
    <div>
      {loadingApi ? (
        <div className="h-screen flex aligin">
          <LoadingSpinner />
        </div>
      ) : (
        <CurrencryList
         setValue={setValue}
          selected={selected}
          selectStore={selectStore}
          recordPage={recordPage}
          data={filterArray}
        />
      )}

      {infiniteLoading ? (
        <>
          <LoadingSpinner />
        </>
      ) : (
        <div className="text-center" ref={lastPostRef}></div>
      )}
    </div>
  );
};

export default CurrencryUi;
