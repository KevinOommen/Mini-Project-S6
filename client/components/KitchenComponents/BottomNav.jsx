import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PendingIcon from '@mui/icons-material/Pending';
import HistoryIcon from '@mui/icons-material/History';
import ReportIcon from '@mui/icons-material/Report';
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';

export default function BottomNav() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate("/kitchen/pending");
        break;
      case 1:
        navigate("/kitchen/history");
        break;
      case 2:
        navigate("/kitchen/report");
        break;
      default:
        break;
    }
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction label="Pending" icon={<PendingIcon />} />
          <BottomNavigationAction label="History" icon={<HistoryIcon />} />
          <BottomNavigationAction label="Report" icon={<ReportIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}