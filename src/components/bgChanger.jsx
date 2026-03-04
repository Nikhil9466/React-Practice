import { useState } from "react"

function App( ) {
  const [bkg,setBg] = useState ("bg-slate-500")
  return (
    <div className={` w-full h-screen duration-200 overflow-hidden ${bkg}`}>

      <h1 className="text-3xl font-bold">Change Background Color</h1>
      <div className="fixed flex justify-center items-center flex-row bottom-12 inset-x-0 rounded-4xl bg-amber-50 px-2">
        <button onClick={ () => setBg ("bg-red-200")} className="bg-red-400 m-3 p-5 rounded-full hover:scale-110 duration-200 shadow-lg border-4 border-red-600">red</button>
        <button onClick={ () => setBg ("bg-green-200")} className="bg-green-400 m-3 p-5 rounded-full hover:scale-110 duration-200 shadow-lg border-4 border-green-600">green</button>
        <button onClick={ () => setBg ("bg-blue-200")} className="bg-blue-400 m-3 p-5 rounded-full hover:scale-110 duration-200 shadow-lg border-4 border-blue-600">blue</button>

    </div>
    </div>
  )
}

export default App
