import Container from '@mui/material/Container';

export const AuthLayout = ({ children }) => {
    return (
        <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
            {children}
        </Container>
    )
}