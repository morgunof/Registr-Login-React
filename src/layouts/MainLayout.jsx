import Container from '@mui/material/Container';

export const MainLayout = ({ children }) => {
    return (
        <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: 'cyan'}}>
            {children}
        </Container>
    )
}