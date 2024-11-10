import React, { useRef } from 'react'

const PrintData = () => {
    let data = useRef()
    let data1 = useRef()
    let data3 = useRef()

    let click = (e)=>{
        e.preventDefault();
        console.log(data.current.value);
        console.log(data1.current.value);
        console.log(data3.current.value);
        
    }
  return (
    <div>
        <form action="">
            <label>
                Name:
            </label>
            <input type="text" placeholder='Enter name' ref={data}/>

            <label>
                company:
            </label>
            <input type="text" placeholder='Enter Company' ref={data1}/>

            <label>
                Salary:
            </label>
            <input type="text" placeholder='Enter Salary' ref={data3}/>

            <button onClick={click}>click</button>
        </form>
    </div>
  )
}

export default PrintData