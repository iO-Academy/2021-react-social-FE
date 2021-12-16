import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import {Stack} from "@mui/material";
import RegisterButton from "./RegisterButton";
import {useAuth} from "../Hooks/useAuth";

const SignUpForm = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [bio, setBio] = useState('')

    const auth = useAuth()

    const handleUsernameChange = (e) => {
        if (e.target.value.length > 12){
            let errorMessage = "Username too long."
            document.getElementById("usernameError").innerHTML = '<p>' + errorMessage + '</p>'
        } else {
            setUsername(e.target.value)
        }
    //have this function handle all validation?
    }
    const handleEmailChange = (e) => {
        //any validation checks here
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        console.log('A email was submitted: ' + username + password + bio);
        e.preventDefault();
        auth.signup(username,bio,email,password)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Stack spacing={4} alignItems='center' justifyContent='center' sx={{mb: 2}} >
                <TextField type="text" value={email} onChange={handleEmailChange} id="filled-basic" label="Email"
                           variant="filled" sx={{bgcolor: 'whitey.main', borderRadius: '4px', width: '50vw'}} />
                <TextField type="text" value={username} onChange={handleUsernameChange} id="filled-basic" label="Username (max 12 chars)"
                           variant="filled" sx={{bgcolor: 'whitey.main', borderRadius: '4px', width: '50vw'}} />
                    <div id="usernameError"></div>
                <TextField type="text" value={password} onChange={(e)=> setPassword(e.target.value)} id="filled-basic" label="Password (min 8 chars)"
                           variant="filled" sx={{bgcolor: 'whitey.main', borderRadius: '4px', width: '50vw'}} />

                <TextField type="text" value={bio} onChange={(e)=> setBio(e.target.value)} id="filled-textarea"
                           label="Tell us about yourself (max 500 chars)" placeholder="Bio" multiline rows={4} variant="filled"
                           sx={{bgcolor: 'whitey.main', borderRadius: '4px', width: '50vw'}} />
                </Stack>
                <Stack direction="row" spacing={4} justifyContent='center' sx={{mb: 10}}>
                    <RegisterButton/>
                </Stack>
            </form>
        </>
    );
}

export default SignUpForm;