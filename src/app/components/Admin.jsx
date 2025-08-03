"use client"
import React, { useState, useEffect } from 'react';
import { 
  Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Chip, Select, MenuItem, CircularProgress, 
  TextField, Tabs, Tab, Button, Dialog, DialogTitle, DialogContent, 
  DialogContentText, DialogActions
} from '@mui/material';
import { styled } from '@mui/system';
import { format } from 'date-fns';
import { FaPhoneAlt, FaCalendarAlt } from 'react-icons/fa';

const StatusChip = styled(Chip)(({ theme, status }) => ({
  backgroundColor: 
    status === 'new' || status === 'pending' ? theme.palette.info.light :
    status === 'contacted' || status === 'confirmed' ? theme.palette.warning.light :
    status === 'completed' ? theme.palette.success.light :
    theme.palette.error.light,
  color: 'white',
  fontWeight: 'bold',
}));

const Admin = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [contactSubmissions, setContactSubmissions] = useState([]);
  const [bookingRequests, setBookingRequests] = useState([]);
  const [loading, setLoading] = useState({ contacts: true, bookings: true });
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/contact');
        if (!response.ok) throw new Error('Failed to fetch contact data');
        const data = await response.json();
        // Ensure unique keys by adding index if needed
        setContactSubmissions(data.map((item, index) => ({ ...item, uniqueKey: `${item._id}-${index}` })));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(prev => ({ ...prev, contacts: false }));
      }
    };

    const fetchBookings = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/bookings');
        if (!response.ok) throw new Error('Failed to fetch booking data');
        const data = await response.json();
        // Ensure unique keys by adding index if needed
        setBookingRequests(data.map((item, index) => ({ ...item, uniqueKey: `${item._id}-${index}` })));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(prev => ({ ...prev, bookings: false }));
      }
    };

    fetchContacts();
    fetchBookings();
  }, []);

  const handleStatusChange = async (id, newStatus, type) => {
    try {
      if (type === 'contact') {
        setContactSubmissions(prev => prev.map(item => 
          item._id === id ? { ...item, status: newStatus } : item
        ));
      } else {
        setBookingRequests(prev => prev.map(item => 
          item._id === id ? { ...item, status: newStatus } : item
        ));
      }
      // In a real app, you would make an API call to update the status
    } catch (err) {
      console.error('Failed to update status:', err);
    }
  };

  const handleViewDetails = (item) => {
    setSelectedItem(item);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedItem(null);
  };

  const filteredContacts = contactSubmissions.filter(sub => {
    const matchesSearch = 
      sub.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.service?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || sub.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const filteredBookings = bookingRequests.filter(booking => {
    const matchesSearch = 
      booking.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.emailAddress?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.phoneNumber?.includes(searchTerm);
    
    const matchesStatus = statusFilter === 'all' || booking.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const isLoading = activeTab === 0 ? loading.contacts : loading.bookings;
  const currentData = activeTab === 0 ? filteredContacts : filteredBookings;

  if (error) {
    return (
      <Box p={4}>
        <Typography color="error">Error: {error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Admin Dashboard
      </Typography>
      
      <Tabs value={activeTab} onChange={(e, newValue) => setActiveTab(newValue)} sx={{ mb: 3 }}>
        <Tab label="Contact Submissions" icon={<FaPhoneAlt />} iconPosition="start" />
        <Tab label="Booking Requests" icon={<FaCalendarAlt />} iconPosition="start" />
      </Tabs>
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <TextField
          label={`Search ${activeTab === 0 ? 'contacts' : 'bookings'}`}
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ width: 300 }}
        />
        
        <Select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          size="small"
          sx={{ minWidth: 150 }}
        >
          <MenuItem value="all">All Statuses</MenuItem>
          {activeTab === 0 ? (
            <>
              <MenuItem value="new">New</MenuItem>
              <MenuItem value="contacted">Contacted</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
            </>
          ) : (
            <>
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="confirmed">Confirmed</MenuItem>
              <MenuItem value="cancelled">Cancelled</MenuItem>
            </>
          )}
        </Select>
      </Box>
      
      <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
        {isLoading ? (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
            <CircularProgress />
          </Box>
        ) : (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: 'primary.main' }}>
                  {activeTab === 0 ? (
                    <>
                      <TableCell sx={{ color: 'white' }}>Name</TableCell>
                      <TableCell sx={{ color: 'white' }}>Email</TableCell>
                      <TableCell sx={{ color: 'white' }}>Service</TableCell>
                      <TableCell sx={{ color: 'white' }}>Budget</TableCell>
                      <TableCell sx={{ color: 'white' }}>Status</TableCell>
                      <TableCell sx={{ color: 'white' }}>Submitted</TableCell>
                      <TableCell sx={{ color: 'white' }}>Actions</TableCell>
                    </>
                  ) : (
                    <>
                      <TableCell sx={{ color: 'white' }}>Name</TableCell>
                      <TableCell sx={{ color: 'white' }}>Contact</TableCell>
                      <TableCell sx={{ color: 'white' }}>Booking Date</TableCell>
                      <TableCell sx={{ color: 'white' }}>Passengers</TableCell>
                      <TableCell sx={{ color: 'white' }}>Status</TableCell>
                      <TableCell sx={{ color: 'white' }}>Submitted</TableCell>
                      <TableCell sx={{ color: 'white' }}>Actions</TableCell>
                    </>
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {currentData.length > 0 ? (
                  currentData.map((item) => (
                    <TableRow key={item.uniqueKey} hover>
                      {activeTab === 0 ? (
                        <>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.email}</TableCell>
                          <TableCell>{item.service}</TableCell>
                          <TableCell>{item.budget}</TableCell>
                          <TableCell>
                            <Select
                              value={item.status}
                              onChange={(e) => handleStatusChange(item._id, e.target.value, 'contact')}
                              size="small"
                              sx={{ height: 32 }}
                              renderValue={(selected) => (
                                <StatusChip status={selected} label={selected} size="small" />
                              )}
                            >
                              <MenuItem value="new">
                                <StatusChip status="new" label="New" size="small" />
                              </MenuItem>
                              <MenuItem value="contacted">
                                <StatusChip status="contacted" label="Contacted" size="small" />
                              </MenuItem>
                              <MenuItem value="completed">
                                <StatusChip status="completed" label="Completed" size="small" />
                              </MenuItem>
                            </Select>
                          </TableCell>
                          <TableCell>
                            {format(new Date(item.createdAt), 'MMM dd, yyyy')}
                          </TableCell>
                          <TableCell>
                            <Button 
                              variant="outlined" 
                              size="small"
                              onClick={() => handleViewDetails(item)}
                            >
                              View
                            </Button>
                          </TableCell>
                        </>
                      ) : (
                        <>
                          <TableCell>{item.fullName}</TableCell>
                          <TableCell>
                            <Box>
                              <div>{item.emailAddress}</div>
                              <div>{item.phoneNumber}</div>
                            </Box>
                          </TableCell>
                          <TableCell>
                            {format(new Date(item.bookingDate.date), 'MMM dd, yyyy')}
                            <br />
                            {item.bookingDate.time}
                          </TableCell>
                          <TableCell>
                            Adults: {item.passengers.adults}
                            <br />
                            Children: {item.passengers.children}
                          </TableCell>
                          <TableCell>
                            <Select
                              value={item.status}
                              onChange={(e) => handleStatusChange(item._id, e.target.value, 'booking')}
                              size="small"
                              sx={{ height: 32 }}
                              renderValue={(selected) => (
                                <StatusChip status={selected} label={selected} size="small" />
                              )}
                            >
                              <MenuItem value="pending">
                                <StatusChip status="pending" label="Pending" size="small" />
                              </MenuItem>
                              <MenuItem value="confirmed">
                                <StatusChip status="confirmed" label="Confirmed" size="small" />
                              </MenuItem>
                              <MenuItem value="cancelled">
                                <StatusChip status="cancelled" label="Cancelled" size="small" />
                              </MenuItem>
                            </Select>
                          </TableCell>
                          <TableCell>
                            {format(new Date(item.createdAt), 'MMM dd, yyyy')}
                          </TableCell>
                          <TableCell>
                            <Button 
                              variant="outlined" 
                              size="small"
                              onClick={() => handleViewDetails(item)}
                            >
                              View
                            </Button>
                          </TableCell>
                        </>
                      )}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} align="center">
                      No {activeTab === 0 ? 'contact submissions' : 'booking requests'} found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Paper>

      {/* Detail Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>
          {selectedItem && (activeTab === 0 ? 'Contact Details' : 'Booking Details')}
        </DialogTitle>
        <DialogContent>
          {selectedItem && (
            activeTab === 0 ? (
              <>
                <DialogContentText>
                  <strong>Name:</strong> {selectedItem.name}
                </DialogContentText>
                <DialogContentText>
                  <strong>Email:</strong> {selectedItem.email}
                </DialogContentText>
                <DialogContentText>
                  <strong>Service:</strong> {selectedItem.service}
                </DialogContentText>
                <DialogContentText>
                  <strong>Budget:</strong> {selectedItem.budget}
                </DialogContentText>
                <DialogContentText>
                  <strong>Message:</strong> {selectedItem.message}
                </DialogContentText>
                <DialogContentText>
                  <strong>Submitted:</strong> {format(new Date(selectedItem.createdAt), 'MMM dd, yyyy HH:mm')}
                </DialogContentText>
              </>
            ) : (
              <>
                <DialogContentText>
                  <strong>Full Name:</strong> {selectedItem.fullName}
                </DialogContentText>
                <DialogContentText>
                  <strong>Email:</strong> {selectedItem.emailAddress}
                </DialogContentText>
                <DialogContentText>
                  <strong>Phone:</strong> {selectedItem.phoneNumber}
                </DialogContentText>
                <DialogContentText>
                  <strong>Booking Date:</strong> {format(new Date(selectedItem.bookingDate.date), 'MMM dd, yyyy')} at {selectedItem.bookingDate.time}
                </DialogContentText>
                <DialogContentText>
                  <strong>Passengers:</strong> {selectedItem.passengers.adults} adults, {selectedItem.passengers.children} children
                </DialogContentText>
                <DialogContentText>
                  <strong>Message:</strong> {selectedItem.message || 'None'}
                </DialogContentText>
                <DialogContentText>
                  <strong>Submitted:</strong> {format(new Date(selectedItem.createdAt), 'MMM dd, yyyy HH:mm')}
                </DialogContentText>
              </>
            )
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Admin;