import React, { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callApi, setApi } from "../../src/redux/actions/action";

interface AppContextInterface {
  account: boolean;
  setAccount: Function;
  apidata: any;
  setApidata: Function;
}

type Context = {
  children: React.ReactNode;
};

export const Logincontext = createContext<AppContextInterface | null>(null);

const Context = ({ children }: Context) => {
  const [account, setAccount] = useState<boolean>(false);
  const [apidata, setApidata] = useState<any>([]);
  const [flag, setFlag] = useState(0)

  const dispatch = useDispatch()
  const Apidata = useSelector((state: any): any => state.API_Data.Apidata);
  
  const fetchApiData = async ()=>{
    const data =await Apidata
    setApidata(data)
  }


  fetchApiData()


  if(flag == 0){
    dispatch(callApi);
    setFlag(1)
    fetchApiData()
  }
  return (
    <>
      <Logincontext.Provider
        value={{ account, setAccount, apidata, setApidata }}
      >
        {children}
      </Logincontext.Provider>
    </>
  );
};

export default Context;
