import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Alert,
  Stack,
  useTheme,
  InputAdornment,
  IconButton,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container
} from '@mui/material';
import {
  Email as EmailIcon,
  Lock as LockIcon,
  Person as PersonIcon,
  Visibility,
  VisibilityOff,
  HowToReg as RegisterIcon,
  Badge as RoleIcon,
  Phone,
  Home,
  DriveEta,
  Work
} from '@mui/icons-material';
import api from '../../services/api';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'customer', 
    phone: '',
    address: '',
    
    driverDetails: {
      licenseNumber: '',
      vehicleType: '',
      availability: 'available'
    },
   
    staffDetails: {
      employeeId: '',
      department: '',
      availability: 'available'
    }
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const theme = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const userData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        userType: formData.userType,
        phone: formData.phone,
        address: formData.address
      };

      if (formData.userType === 'driver') {
        userData.driverDetails = formData.driverDetails;
      }

      if (formData.userType === 'staff') {
        userData.staffDetails = formData.staffDetails;
      }

      await api.post('/auth/register', userData);
      navigate('/login');
    } catch (error) {
      setError(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        position: 'fixed',
        top: 0,
        left: 0,
        background: `linear-gradient(135deg, 
          ${theme.palette.primary.dark} 0%, 
          ${theme.palette.primary.main} 40%,
          ${theme.palette.primary.light} 100%)`
      }}
    >
      <Grid container sx={{ minHeight: '100vh' }}>
        <Grid item xs={12} md={6} 
          sx={{ 
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: 8,
            color: 'white'
          }}
        >
          <RegisterIcon sx={{ fontSize: 80, mb: 4 }} />
          <Typography variant="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
            Join Us Today!
          </Typography>
          <Typography variant="h6" align="center" sx={{ maxWidth: 400 }}>
            Create an account to start managing your deliveries and services
          </Typography>
        </Grid>

        <Grid item xs={12} md={6} 
          sx={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 4
          }}
        >
          <Card 
            sx={{ 
              maxWidth: 500,
              width: '100%',
              borderRadius: 3,
              boxShadow: theme.shadows[20],
              backdropFilter: 'blur(20px)',
              bgcolor: 'rgba(255, 255, 255, 0.95)',
              overflowY: 'auto',
              maxHeight: '90vh'
            }}
          >
            <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
              <Typography 
                variant="h4" 
                align="center" 
                gutterBottom
                sx={{ 
                  fontWeight: 'bold',
                  color: theme => theme.palette.primary.main,
                  mb: 3
                }}
              >
                Create Account
              </Typography>
              
              {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}
              
              <form onSubmit={handleSubmit}>
                <Stack spacing={2.5}>
                  <FormControl fullWidth>
                    <InputLabel>User Type</InputLabel>
                    <Select
                      value={formData.userType}
                      onChange={(e) => setFormData({...formData, userType: e.target.value})}
                      required
                      startAdornment={
                        <InputAdornment position="start">
                          <RoleIcon color="primary" />
                        </InputAdornment>
                      }
                    >
                      <MenuItem value="customer">Customer</MenuItem>
                      <MenuItem value="staff">Staff</MenuItem>
                      <MenuItem value="driver">Driver</MenuItem>
                      <MenuItem value="admin">Admin</MenuItem>
                    </Select>
                  </FormControl>

                  <TextField
                    fullWidth
                    label="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Phone color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Address"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Home color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />

                  {formData.userType === 'driver' && (
                    <>
                      <TextField
                        fullWidth
                        label="License Number"
                        value={formData.driverDetails.licenseNumber}
                        onChange={(e) => setFormData({
                          ...formData,
                          driverDetails: {
                            ...formData.driverDetails,
                            licenseNumber: e.target.value
                          }
                        })}
                        required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <DriveEta color="primary" />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </>
                  )}

                  {formData.userType === 'staff' && (
                    <>
                      <TextField
                        fullWidth
                        label="Employee ID"
                        value={formData.staffDetails.employeeId}
                        onChange={(e) => setFormData({
                          ...formData,
                          staffDetails: {
                            ...formData.staffDetails,
                            employeeId: e.target.value
                          }
                        })}
                        required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Work color="primary" />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <TextField
                        fullWidth
                        label="Department"
                        value={formData.staffDetails.department}
                        onChange={(e) => setFormData({
                          ...formData,
                          staffDetails: {
                            ...formData.staffDetails,
                            department: e.target.value
                          }
                        })}
                        required
                      />
                    </>
                  )}

                  <TextField
                    fullWidth
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon color="primary" />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Confirm Password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon color="primary" />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    startIcon={<RegisterIcon />}
                    sx={{ 
                      mt: 2,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      borderRadius: 2
                    }}
                  >
                    Register
                  </Button>

                  <Typography variant="body2" align="center">
                    Already have an account?{' '}
                    <Link 
                      to="/login" 
                      style={{ 
                        color: theme => theme.palette.primary.main,
                        textDecoration: 'none',
                        fontWeight: 'bold'
                      }}
                    >
                      Login here
                    </Link>
                  </Typography>
                </Stack>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Register; 