import React, { useCallback, useState } from 'react'
import Count from './Count'
import Btn from './Btn'

const Main = () => {
    let [age, setAge] = useState(13)
    let [salary, setSalary] = useState(2500)

    let incAge = useCallback(() => {
        setAge(age + 1);
    }, [age])
    let incSalary = useCallback(() => {
        setSalary(salary + 1);
    }, [salary])

    return (
        <div>
            <Count data={age}>Age</Count>
            <Btn func={incAge}></Btn>
            <Count data={salary}>Salary</Count>
            <Btn func={incSalary}></Btn>
        </div>
    )
}

export default Main