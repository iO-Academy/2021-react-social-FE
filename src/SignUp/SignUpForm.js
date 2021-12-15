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

    const handleSubmit = (e) => {
        console.log('A email was submitted: ' + username + password + bio);
        e.preventDefault();
        auth.signup(username,bio,email,password)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Stack spacing={4} alignItems='center' justifyContent='center' sx={{mb: 2}} >
                <TextField type="text" value={email} onChange={(e)=> setEmail(e.target.value)} id="filled-basic" label="Email"
                           variant="filled" sx={{bgcolor: 'whitey.main', borderRadius: '4px', width: '50vw'}} />
                <TextField type="text" value={username} onChange={(e)=> setUsername(e.target.value)} id="filled-basic" label="Username (max 12 chars)"
                           variant="filled" sx={{bgcolor: 'whitey.main', borderRadius: '4px', width: '50vw'}} />
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