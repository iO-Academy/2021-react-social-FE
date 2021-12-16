import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import {Stack} from "@mui/material";
import GoToProfile from "./GoToProfile";
import {useAuth} from "../Hooks/useAuth";

const LoginForm = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const auth = useAuth()

    const handleEmailChange = (e) => {
        //any validation checks here
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        //any validation checks here
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        console.log('A email was submitted: '  + password + email);
        e.preventDefault();
        auth.signin(email, password)

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Stack spacing={4} alignItems='center' justifyContent='center' sx={{mb: 2}} >
                <TextField type="text" value={email} onChange={handleEmailChange} id="filled-basic" label="Email"
                           variant="filled" sx={{bgcolor: 'whitey.main', borderRadius: '4px', width: '50vw'}} />
                <TextField type="text" value={password} onChange={handlePasswordChange} id="filled-basic" label="Password"
                           variant="filled" sx={{bgcolor: 'whitey.main', borderRadius: '4px', width: '50vw'}} />

                </Stack>
                <Stack direction="row" spacing={4} justifyContent='center' sx={{m: 10}}>
                    <GoToProfile/>
                </Stack>
            </form>
        </>
    );
}

export default LoginForm;