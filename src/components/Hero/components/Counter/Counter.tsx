
import React, { useCallback, useEffect, useState } from 'react'
import './Counter.css';

type Props = {
    initial: number;
    final: number;
}

const Counter = ({ initial, final }: Props) => {

    const [counter, setCounter] = useState(initial);

    const inc = useCallback(() => {
        if (counter < final) {
            setCounter(prev => prev + 1);
        }
    }, [counter, final]);

    useEffect(() => {
        const interval = setInterval(inc, 40);
        return () => clearInterval(interval);
        
    }, [counter, inc]);

    return (
        <span>+ {counter}</span>
    )
}

export default Counter