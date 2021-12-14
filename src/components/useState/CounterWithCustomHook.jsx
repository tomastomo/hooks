import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'

export const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter(100);

    return (
        <>
            <h1>Counter with Hook: {state}</h1>
            <button onClick={increment} className="btn">+1</button>
            <button onClick={reset} className="btn">Reset</button>
            <button onClick={decrement} className="btn">-1</button>
        </>
    )
}
