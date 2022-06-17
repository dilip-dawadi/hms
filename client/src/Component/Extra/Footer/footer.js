import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

export default function StickyFooter() {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
            }}
            style={{
                backgroundColor: 'rgb(32 51 85) ',
            }}
        >
            <CssBaseline />
            <Container>
                <Typography variant="body1" style={{
                    color: 'white',
                    lineHeight: '1.5',
                    fontSize: '1rem',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    letterSpacing: '4px',
                    textTransform: 'uppercase',
                }}>
                    {'Made with '} <span role="img" aria-label="heart">❤️</span> {'by '}
                    <Link href="https://www.linkedin.com/in/dilip-dawadi-0ab68722b/" style={{
                        textDecoration: 'none',
                    }}>
                        Prabandak
                    </Link>{" "}{new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Container>
        </Box>
    );
}