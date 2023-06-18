import React, {useState} from 'react';

const Counter = () => {
    const [number, setNumber] = useState(0);
    const [want, setWant] = useState("");
    const [show, setShow] = useState();

    const onChange = (event) => {
        setWant(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setShow(prev => want)
        setWant("");
        setNumber(prev => 0)
    }
    const onIncrease = () =>{
        setNumber((prev) => prev + Number(show))
    }
    const onDecrease = () => {
        setNumber((prev) => prev - Number(show))
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={want} type="number" placeholder='Write want number'/>
                <button>submit want number</button>
            </form>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+{show}</button>
            <button onClick={onDecrease}>-{show}</button>
        </div>
    );
}

export default Counter;