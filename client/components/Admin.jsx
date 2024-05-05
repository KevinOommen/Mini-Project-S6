import React from "react";
import AdminLogin from "./AdminComponents/AdminLogin";
import AdminDashboard from "./AdminComponents/AdminDashboard";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});


const Admin = () => {
    const [loggedIn, setLoggedIn] = React.useState(true);
  return (
    <div>
    <ThemeProvider theme={theme}>
    {  loggedIn ? 
       <AdminDashboard/> : <AdminLogin loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
    }
    </ThemeProvider>
    </div>
  );
};
export default Admin;