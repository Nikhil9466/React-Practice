import { useState } from "react";
import useCurrencyInfo from "../hooks/useCurrencyInfo.js";
import InputBox from "./inputBox.jsx";

export const   CurrencyConverter = () => {
    const [amount,setAmount]=useState(1);
    const [fromCurrency,setFromCurrency]=useState("usd");
    const [toCurrency,setToCurrency]=useState("inr");
    const [convertedAmount,setConvertedAmount]=useState(1);
     const currencyInfo = useCurrencyInfo(fromCurrency);

    const options = Object.keys(currencyInfo)

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[toCurrency]);
    };
    const swap = ()=>{
       setFromCurrency(toCurrency);
       setToCurrency(fromCurrency);
       setConvertedAmount(amount);
       setAmount(convertedAmount);
 
    }


    return (
        <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{backgroundImage:`url(https://images.pexels.com/photos/3635539/pexels-photo-3635539.jpeg)`}}
        >
            <h1 className="text-3xl text-gray-4 font-bold rounded-2xl bg-blue-300/20">Currency Converter</h1>
            <div className="w-full">
                <div className="max-w-md w-full mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 shadow-lg">
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    convert()
                 }}>
                <div className="mb-1 w-full">
                 <InputBox
                 label="from"
                 amount={amount}
                 currencyOptions={options}
                 onCurrencyChange={(currency)=> setFromCurrency(currency)}
                 onAmountChange={(amount)=>setAmount(amount)}
                selectCurrency={fromCurrency}
                 ></InputBox>
                </div>
                <div className="relative w-full h-0.5">
                 <button type="button" onClick={swap}
                 className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                 >Swap</button>
                </div>
                <div className="mt-6 w-full">
                 <InputBox
                 label="to"
                 amount={convertedAmount}
                 amountDisabled={true}
                 currencyOptions={options}
                 onCurrencyChange={(currency)=> setToCurrency(currency)}
                 onAmountChange={(amount)=>setConvertedAmount(amount)}
                selectCurrency={toCurrency}
                 ></InputBox>
                </div>
                <button type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                >Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}</button>

                </form>   

            </div>
            </div>
        </div>
    )
}
export default CurrencyConverter;