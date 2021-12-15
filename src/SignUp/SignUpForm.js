import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import SignInButton from "./SignInButton";
import {Stack} from "@mui/material";

const SignUpForm = () => {
    // const [email, setEmail] = useState(null)
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    // const [bio, setBio] = useState(null)

    // const handleEmailChange = (e) => {
    //     //any validation checks here
    //     setEmail(e.target.value)
    // }
    const handleUsernameChange = (e) => {
        //any validation checks here
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
        //any validation checks here
        setPassword(e.target.value)
    }
    // const handleBioChange = (e) => {
    //     //any validation checks here
    //     setBio(e.target.value)
    // }

    const handleSubmit = (e) => {
        console.log('A email was submitted: ' + username + password);
        e.preventDefault();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {/*<TextField type="text" value={email} onChange={handleEmailChange} id="outlined-basic" label="Email"*/}
                {/*           variant="outlined" sx={{bgcolor: 'whitey.main', borderRadius: '4px'}} />*/}
                <TextField type="text" value={username} onChange={handleUsernameChange} id="outlined-basic" label="Username"
                           variant="outlined" sx={{bgcolor: 'whitey.main', borderRadius: '4px'}} />
                <TextField type="text" value={password} onChange={handlePasswordChange} id="outlined-basic" label="Password"
                           variant="outlined" sx={{bgcolor: 'whitey.main', borderRadius: '4px'}} />
                {/*<TextField type="text" value={password} onChange={handleBioChange} id="outlined-basic" label="Bio"*/}
                {/*           variant="outlined" sx={{bgcolor: 'whitey.main', borderRadius: '4px'}} />*/}
                <Stack direction="row" spacing={4} justifyContent='center'>
                    <SignInButton/>
                </Stack>
            </form>
        </>
    );
}

export default SignUpForm;