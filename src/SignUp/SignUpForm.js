import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import {Stack} from "@mui/material";
import RegisterButton from "./RegisterButton";

const SignUpForm = () => {
    const [email, setEmail] = useState(null)
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [bio, setBio] = useState(null)

    const handleEmailChange = (e) => {
        //any validation checks here
        setEmail(e.target.value)
    }
    const handleUsernameChange = (e) => {
        //any validation checks here
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
        //any validation checks here
        setPassword(e.target.value)
    }
    const handleBioChange = (e) => {
        //any validation checks here
        setBio(e.target.value)
    }

    const handleSubmit = (e) => {
        console.log('A email was submitted: ' + username + password + bio);
        e.preventDefault();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Stack spacing={4} alignItems='center' justifyContent='center' sx={{mb: 2}} >
                <TextField type="text" value={email} onChange={handleEmailChange} id="filled-basic" label="Email"
                           variant="filled" sx={{bgcolor: 'whitey.main', borderRadius: '4px', width: '50vw'}} />
                <TextField type="text" value={username} onChange={handleUsernameChange} id="filled-basic" label="Username (max 12 chars)"
                           variant="filled" sx={{bgcolor: 'whitey.main', borderRadius: '4px', width: '50vw'}} />
                <TextField type="text" value={password} onChange={handlePasswordChange} id="filled-basic" label="Password (min 8 chars)"
                           variant="filled" sx={{bgcolor: 'whitey.main', borderRadius: '4px', width: '50vw'}} />

                <TextField type="text" value={bio} onChange={handleBioChange} id="filled-textarea"
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