import React from 'react';
import { Box, Grid, Paper, Typography, useTheme, Button } from '@mui/material';
import {
  ShoppingCart as OrderIcon,
  Payment as PaymentIcon,
  LocalShipping as ShippingIcon,
  History as HistoryIcon,
  Dashboard as DashboardIcon,
  Logout as LogoutIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Person as ProfileIcon } from '@mui/icons-material';

const DashboardCard = ({ title, icon, value, onClick }) => {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        p: 4,
        cursor: 'pointer',
        height: '100%',
        transition: 'all 0.3s ease',
        background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.grey[50]} 100%)`,
        '&:hover': { 
          transform: 'translateY(-8px)',
          boxShadow: theme.shadows[10],
          background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.background.paper} 100%)`,
          '& .icon': {
            color: theme.palette.primary.main,
            transform: 'scale(1.2)'
          }
        },
        borderRadius: 3
      }}
      onClick={onClick}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
            {value}
          </Typography>
        </Box>
        <Box className="icon" sx={{ 
          color: 'text.secondary',
          transition: 'all 0.3s ease'
        }}>
          {React.cloneElement(icon, { sx: { fontSize: 48 } })}
        </Box>
      </Box>
    </Paper>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        bgcolor: theme.palette.grey[100],
        p: 4
      }}
    >
      <Box 
        sx={{ 
          mb: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <DashboardIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
          <Box>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
              Dashboard
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Welcome back, {user?.name || 'User'}!
            </Typography>
          </Box>
        </Box>

        <Button
          variant="contained"
          startIcon={<LogoutIcon />}
          onClick={handleLogout}
          sx={{
            py: 1.5,
            px: 3,
            borderRadius: 2,
            textTransform: 'none',
            fontSize: '1rem',
            fontWeight: 'bold',
            bgcolor: theme.palette.primary.main,
            '&:hover': {
              bgcolor: theme.palette.primary.dark,
              transform: 'translateY(-2px)',
              boxShadow: theme.shadows[8]
            }
          }}
        >
          Logout
        </Button>
      </Box>
      
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} lg={3}>
          <DashboardCard
            title="New Order"
            icon={<OrderIcon />}
            value="Create"
            onClick={() => navigate('/order/new')}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <DashboardCard
            title="Payments"
            icon={<PaymentIcon />}
            value="Manage"
            onClick={() => navigate('/payments')}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <DashboardCard
            title="Delivering"
            icon={<ShippingIcon />}
            value="Track"
            onClick={() => navigate('/shipping')}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <DashboardCard
            title="History"
            icon={<HistoryIcon />}
            value="View"
            onClick={() => navigate('/orders')}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
  <DashboardCard
    title="My Profile"
    icon={<ProfileIcon />}
    value="View"
    onClick={() => navigate('/profile')}
  />
</Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard; 