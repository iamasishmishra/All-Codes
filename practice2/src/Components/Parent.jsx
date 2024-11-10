import React from 'react'
import { createContext } from 'react'
import ChildA from './ChildA';


let data = createContext();

const Parent = () => {
    let name = "Akmishra"
    
    return (
        <div>
            <data.Provider value={name}>
                <ChildA />
            </data.Provider>
        </div>
    )
}

export default Parent
export {data};