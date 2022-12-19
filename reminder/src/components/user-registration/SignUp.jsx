import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card  from '@mui/material/Card';
import TextField from "@mui/material/TextField";

export default function SignUp() {
    return (
        <>
            <Container maxWidth="sm" sx={{ bgcolor: 'grey', height: '100vh',  }}>
                    <Card sx={{ height: "100%", padding: "1em"}}>
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}>
                            <TextField id="outlined-basic" label="first name" variant="outlined" style={{margin: "1em"}} />
                            <TextField id="outlined-basic" label="last name" variant="outlined" style={{margin: "1em"}} />
                        </div>
                        <TextField id="outlined-basic" label="phone" variant="outlined" style={{margin: "1em"}} />
                        <TextField id="outlined-basic" label="email" variant="outlined" style={{margin: "1em"}} />
                        <TextField id="outlined-basic" label="password" variant="outlined" style={{margin: "1em"}} />
                        <TextField id="outlined-basic" label="confirm-password" variant="outlined" style={{margin: "1em"}} />

                    </Card>
            </Container>
        </>
    );
} 