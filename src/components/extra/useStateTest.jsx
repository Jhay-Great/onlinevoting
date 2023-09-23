import { useState } from "react";

const Test = function() {

    // // useState() use
    // const [state, setState] = useState([1, 2, 3]);

    // const addItem = () => {
    //     setState([...state, 5]);
    //     console.log(state)
    // }
    // // addItem();
    // console.log(state)

    // const [age, setAge] = useState(12);
    // const [name, setName] = useState('Manuel');
    // const [work, setWork] = useState('Developer');

    // const updateState = function(name) {
    //     setName('Kofi');
    //     console.log(name);
    // }
    // updateState();

    // const [count, setCount] = useState(0);
    // const handleClick = function() {
    //     setCount(count + 1);
    // }

    // let i;
    // for(i = 0; i < 5; i++) {
    //     console.log(setCount(count + i));
    // }

    //storing texting in a state variable
    // const [text, setText] = useState('hi');

    // const handleChange = function(e) {
    //     setText(e.target.value)
    // }

    // const [liked, setLiked] = useState();
    // const handleClick = function(e) {
    //     setLiked (e.target.checked);
    // }

    const [name, setName] = useState('May');
    const [age, setAge] = useState(12);
    
    
    return (<div>

        <input type="text" onChange={e => setName(e.target.value)} />
        <button onClick={() => setAge(age + 1)}>Increment age</button>

        <p>Hello, {name}. You are {age} </p>

        
        {/* <h1 onClick={handleClick}> {count} </h1> */}

        {/* <input value={text} type="text" onChange={handleChange} />
        <p>You typed: {text} </p>
        <button onClick={() => setText('hi')} >Rest</button> */}

        {/* <input onClick={handleClick} type="checkbox" name="" id="" />
        { liked ? <p>liked</p> : <p>dislike</p> }


        <label>
            <input type="checkbox" checked={liked} onChange={handleClick} />
            I liked this
        </label>
        <p>You {liked ? 'liked' : 'disliked' } this </p> */}
        
    </div>)
}
export default Test;