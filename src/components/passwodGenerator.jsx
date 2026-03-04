import { useState ,useCallback,useEffect,useRef} from "react"




export default function passwordGenerator(){
    const [length,setLength] = useState (10);
    const [numberAllowed,setNumberAllowed] = useState (false);
    const [charAllowed,setCharAllowed] = useState (false);
    const [password,setPassword] = useState ("");


    const passRef = useRef(null);
    const generatePassword = useCallback(()=>{
    let pass = "";
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) {
        chars += "0123456789";
    }
    if (charAllowed) {
        chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }
    for (let i=0; i<length; i++) {
        const char = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(char);
    } 
    setPassword(pass);
},[length,numberAllowed,charAllowed]);
    useEffect (()=>{
        generatePassword();
    },[length,numberAllowed,charAllowed,generatePassword]);
    const copyPasswordToClipboard = () => {
        window.navigator.clipboard.writeText(password);
        passRef.current?.select();
    }
    return(
        <div className="w-full h-screen flex flex-col justify-center items-center bg-slate-900 text-white ">
            <h1 className="text-3xl font-bold">Password Generator</h1>

            <div className="max-w-170 h-48 flex flex-row gap-4 justify-center items-centerbg-slate-800 rounded-lg shadow-lg p-6 mt-8">
              <input type="text" 
               value={password}
                readOnly
                className="w-full h-18 p-2 mb-4 bg-slate-700 rounded text-center text-lg font-mono outline-none"
                placeholder="Password"
                ref={passRef}
              />  
            <button onClick={copyPasswordToClipboard} className="w-16 h-18 p-2 bg-slate-700 rounded hover:bg-slate-600">copy</button>
            </div>
            <div className="max-w-170 bg-slate-800 rounded-lg shadow-lg p-6 mt-8 flex flex-col gap-4">
                <div className="flex flex-row justify-between items-center">
                <input
                 type="range" 
                    min="8"
                    max="100"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    className="cursor-pointer w-64"
                    name=""
                    id=""
                 />
                 <label htmlFor="length">length: {length}</label>
                </div>
                <div className="flex flex-row justify-between items-center">
                 <input 
                 type="checkbox"
                  onChange={() => { setNumberAllowed(prev => !prev);}}
                  defaultChecked={numberAllowed}
                  name="" 
                  id=""
                   />    
                     <label htmlFor="numberAllowed">Number</label>
                 <input 
                 type="checkbox"
                  onChange={() => { setCharAllowed(prev => !prev);}}
                  defaultChecked={charAllowed}
                  name="" 
                  id=""
                   />   
                   <label htmlFor="charAllowed">Character</label>
            </div>
            </div>
        </div>
    )
}