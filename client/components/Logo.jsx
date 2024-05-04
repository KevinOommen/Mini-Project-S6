import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "@fontsource/caveat/700.css"; // Specify weight
import { green } from '@mui/material/colors';

const theme = createTheme({
  typography: {
    fontFamily: 'Caveat, sans-serif',
  },
});

export default function Types() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%', maxWidth: 500 , display: 'flex' , alignItems:'center', justifyContent:'center', backgroundColor: green[100], padding:'5px'}}>
        <Typography variant="h3" gutterBottom>
          Smart Menu
        </Typography>
      </Box>
    </ThemeProvider>
  );
}