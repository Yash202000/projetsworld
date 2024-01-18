import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const UserModal = ({ open, onClose }:any) => {
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [phone, setPhone] = useState('');

  const handleEmailChange = (e:any) => {
    setEmail(e.target.value);
  };

  const handleIdChange = (e:any) => {
    setId(e.target.value);
  };
  
  const handlePhoneChange = (e:any) => {
    setPhone(e.target.value);
  };

  const handleAddUser = () => {
    // Add user logic here, using the email and password state values
    console.log('Adding user:', { id, email, phone });
    // post request to add user

    axios.post('http://localhost:3000/api/create-user', {
      id: id,  
      email: email,
      phone: phone
    })

    console.log('user added');

    // Close the modal
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 300,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >

        <TextField
          label="id"
          variant="outlined"
          fullWidth
          margin="normal"
          value={id}
          onChange={handleIdChange}
        />
        <TextField
          label="email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          label="phone"
          variant="outlined"
          fullWidth
          margin="normal"
          value={phone}
          onChange={handlePhoneChange}
        />
        <Button variant="contained" onClick={handleAddUser}>
          Add User
        </Button>
      </Box>
    </Modal>
  );
};

export default UserModal;
