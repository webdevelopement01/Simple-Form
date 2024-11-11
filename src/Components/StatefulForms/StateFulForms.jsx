import { useState } from "react";

const StateFulForms = () => {
    const [name, setName] = useState('Rojoni klantoo');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(password.length < 6){
            setError('Password must be 6 characters or longer')
        }
        else{
            setError ('');

        }
        console.log(name, email, password)
    }
    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        // console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handlePassword = e =>{
        setPassword(e.target.value);
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange}
                type="text" name="name" />
                <br />
                <input
                    onChange={handleEmailChange}
                 type="email" name="email" />
                <br />
                <input
                    onChange={handlePassword}
                 type="password" name="password" required />
                <br />
                <input type="submit" value="Submit" />
            </form>
            {
                error && <p>{error}</p>
            }

        </div>
    );
};

export default StateFulForms;