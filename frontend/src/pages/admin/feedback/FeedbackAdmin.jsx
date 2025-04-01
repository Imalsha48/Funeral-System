// src/pages/admin/feedback/FeedbackAdmin.jsx
import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TextField,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
  useTheme,
  Chip,
  Alert,
  CircularProgress
} from '@mui/material';
import {
  Search as SearchIcon,
  FilterList as FilterIcon,
  Refresh as RefreshIcon,
  CheckCircle as ResolvedIcon,
  Cancel as UnresolvedIcon
} from '@mui/icons-material';
import api from '../../../services/api';

const FeedbackAdmin = () => {
  const theme = useTheme();
  const [feedbackList, setFeedbackList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [serviceTypeFilter, setServiceTypeFilter] = useState('all');

  const serviceTypes = [
    'Funeral Arrangement',
    'Transportation',
    'Floral Services',
    'Catering',
    'General Feedback'
  ];

  const fetchFeedback = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await api.get('/admin/feedback');
      setFeedbackList(response.data);
    } catch (error) {
      console.error('Error fetching feedback:', error);
      setError('Failed to load feedback data');
    } finally {
      setLoading(false);
    }
  };

  const handleChangeStatus = async (id, newStatus) => {
    try {
      await api.put(`/admin/feedback/${id}/status`, { status: newStatus });
      fetchFeedback();
    } catch (error) {
      console.error('Error updating feedback status:', error);
      setError('Failed to update feedback status');
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredFeedback = feedbackList.filter(feedback => {
    const matchesSearch = feedback.user?.name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         feedback.message?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || feedback.status === statusFilter;
    const matchesServiceType = serviceTypeFilter === 'all' || feedback.serviceType === serviceTypeFilter;
    
    return matchesSearch && matchesStatus && matchesServiceType;
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  if (loading && feedbackList.length === 0) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ 
      minHeight: '100vh',
      width: '100vw',
      position: 'fixed',
      top: 0,
      left: 0,
      bgcolor: theme.palette.grey[100],
      p: 4,
      overflow: 'auto'
    }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', color: theme.palette.primary.main }}>
        Customer Feedback Management
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {/* Filters and Search */}
      <Paper sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Box display="flex" alignItems="center" flexWrap="wrap" gap={2}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search feedback..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ flexGrow: 1, maxWidth: 400 }}
          />

          <FormControl size="small" sx={{ minWidth: 180 }}>
            <InputLabel>Status</InputLabel>
            <Select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              label="Status"
            >
              <MenuItem value="all">All Statuses</MenuItem>
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="resolved">Resolved</MenuItem>
              <MenuItem value="archived">Archived</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ minWidth: 180 }}>
            <InputLabel>Service Type</InputLabel>
            <Select
              value={serviceTypeFilter}
              onChange={(e) => setServiceTypeFilter(e.target.value)}
              label="Service Type"
            >
              <MenuItem value="all">All Service Types</MenuItem>
              {serviceTypes.map(type => (
                <MenuItem key={type} value={type}>{type}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            variant="outlined"
            startIcon={<RefreshIcon />}
            onClick={fetchFeedback}
            sx={{ ml: 'auto' }}
          >
            Refresh
          </Button>
        </Box>
      </Paper>

      {/* Feedback Table */}
      <Paper sx={{ borderRadius: 2, overflow: 'hidden' }}>
        <TableContainer>
          <Table>
            <TableHead sx={{ bgcolor: theme.palette.grey[100] }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Customer</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Service Type</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Feedback</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Rating</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredFeedback
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((feedback) => (
                  <TableRow key={feedback._id} hover>
                    <TableCell>
                      <Typography fontWeight="medium">
                        {feedback.user?.name || 'Anonymous'}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {feedback.user?.email || ''}
                      </Typography>
                    </TableCell>
                    <TableCell>{feedback.serviceType}</TableCell>
                    <TableCell>
                      <Typography>{feedback.message}</Typography>
                    </TableCell>
                    <TableCell>
                      {feedback.rating ? (
                        <Box display="flex" alignItems="center">
                          <Typography color="text.secondary" mr={1}>
                            {feedback.rating}/5
                          </Typography>
                          <Box color={theme.palette.warning.main}>
                            {'★'.repeat(feedback.rating)}{'☆'.repeat(5 - feedback.rating)}
                          </Box>
                        </Box>
                      ) : (
                        <Typography color="text.secondary">No rating</Typography>
                      )}
                    </TableCell>
                    <TableCell>
                      {new Date(feedback.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={feedback.status}
                        color={
                          feedback.status === 'resolved' ? 'success' : 
                          feedback.status === 'archived' ? 'default' : 'warning'
                        }
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      {feedback.status !== 'resolved' && (
                        <Button
                          size="small"
                          variant="outlined"
                          color="success"
                          startIcon={<ResolvedIcon />}
                          onClick={() => handleChangeStatus(feedback._id, 'resolved')}
                          sx={{ mr: 1 }}
                        >
                          Resolve
                        </Button>
                      )}
                      {feedback.status !== 'archived' && (
                        <Button
                          size="small"
                          variant="outlined"
                          color="default"
                          onClick={() => handleChangeStatus(feedback._id, 'archived')}
                        >
                          Archive
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredFeedback.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      {filteredFeedback.length === 0 && !loading && (
        <Box display="flex" justifyContent="center" alignItems="center" height={200}>
          <Typography variant="h6" color="text.secondary">
            No feedback found matching your criteria
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default FeedbackAdmin;