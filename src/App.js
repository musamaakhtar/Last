import React,{useState} from 'react'
export default function App(){
const [counter,setcounter]=useState(0)
const handleClick=()=>{
setcounter(counter+1)
}
const handleClickk=()=>{
setcounter(counter-1)
}
const handleClickkk=()=>{
setcounter(0)
}
return(
<div id='aa' className='text-3xl rounded-2xl text-blue-700 h-[55vh] w-[50vw] mx-auto text-center mt-[20vh]'>
<h1  className='font-semibold pt-[3vh] font-mono text-4xl'>My counter</h1>
<h1  className='ml-[20vw] mt-5 border-black border-4 rounded-2xl  text-5xl  h-[10vh] w-[10vw]'>{counter}</h1>
<button onClick={handleClick}>+</button>
<button onClick={handleClickk}>-</button>
<button onClick={handleClickkk}>Reset</button>
 </div>
)
}


// import React,{useState} from 'react'
// export default function App() {
//     const [counter,setcounter]=useState(0)
//     const handleclick=()=>{
//         counter++
//         console.log(counter);
//     }
// return (
//     <div id='aa' className='text-3xl rounded-2xl text-white h-[40vh] w-[50vw] mx-auto text-center mt-[20vh]'>
//     <h1 className='font-semibold pt-[3vh] font-mono text-4xl'>My counter</h1>
//     <h1 className='ml-[20vw] mt-5 border border-orange-400 rounded-2xl  text-5xl  h-[10vh] w-[10vw]'>{this.state.counter}</h1>
//     <button onClick={handleclick}>+</button>
//     <button onClick={handleclick}>-</button>
//     <button onClick={handleclick}>Reset</button>
//     </div>
//   )
//   }
