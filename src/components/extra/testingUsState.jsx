import { useState } from "react"

export const MotherContainer = function() {
    // const [add, setAdd] = useState(0)
    
    // const handleClick = function() {
    //     setAdd(add + 1);
    // }

    // useState with sign-in button
    const [signIn, setSignIn] = useState(false);

    const handleSignIn = () => setSignIn(true);

    const handleSignOut = () => setSignIn(false);
    

    // const handleClick = function() {
    //     setSignIn()
    // }
    
    return (
        <div>
            {signIn ? (<div>
                <button onClick={handleSignOut}>Sign out</button>
                <p>Welcome back, good to see you</p>
            </div>) : (<div>
                <button onClick={handleSignIn}>Sign in</button>
                <p>Please sign in</p>
            </div>) }

            {/* <div>
                <button>Sign out</button>
                <p>Welcome back, good to see you</p>
            </div>
            <div>
                <button>Sign in</button>
                <p>Please sign in</p>
            </div> */}



            {/* <input type="number" value={add} />
            <button onClick={handleClick}> add </button> */}
        </div>
    )
}
export default MotherContainer;


export const TheForm = () => {

    const [name, setName] = useState('')
    const [ email, setEmail ] = useState('');

    const handleChange = (e) => e.target.value;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email);
    }
    
    return (
        <div>
            <form action="" onSubmit={handleSubmit}  >

                <input value={name} onChange={(e) => {setName(e.target.value)}} type="text" placeholder="username" />
                
                {/* <input type="text" placeholder="name" 
                value={name} onChange={(e) => {setName(e.target.value)}} /> */}

                <input type="email" placeholder="email" 
                value={email} onChange={(e) => {setEmail(e.target.value)}} />


                <input type="submit" value="" />
            </form>

            <p> {name} </p>
            <p> {email} </p>
            
        </div>
    )
}

export const Data = () => {
    const [dogs, setDog] = useState(0);

    // const handleDog = (value) => {
    //     setDog(value);
    //     console.log('dogs: ', dogs)
    // }
    
    return (
        <div>
            <div> Dogs: {dogs} </div>
            <button onClick={() => setDog(prev => prev + 1)} >More</button>
            <button onClick={() => setDog(prev => prev - 1)} >Less</button>
        </div>
    )
}