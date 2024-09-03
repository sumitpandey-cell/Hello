
import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, List, ListItem, ListItemText, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import ChatedPerson from './ChatedPerson';

// Mock function to simulate fetching users from a database
const fetchUsers = async () => {
  const users = await axios.get('http://localhost:8000/api/allUsers')
  console.log(users);

  return users.data;
};

const SearchPage = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [open, setOpen] = useState(true);


  useEffect(() => {
    const loadUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };

    loadUsers();
    }, []);

    useEffect(() => {
      const filtered = users.filter((user) =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
      );
  
      setFilteredUsers(filtered);
      
    }, [searchTerm, users]);

    const handleOpen = () => {
      setOpen((prev) => !prev);
    };
    
    return (
      <>
        {open && (
          <Dialog open={open} onClose={handleOpen} maxWidth="sm" fullWidth>
            <DialogTitle>
              User List
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleOpen}
                aria-label="close"
                style={{ position: 'absolute', right: 8, top: 8 }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                label="Search Users"
                type="text"
                fullWidth
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <List>
                {filteredUsers.map((user, index) => (
                  <ListItem key={index}>
                    {/* <ListItemText primary={user} /> */}
                    <ChatedPerson name={user.username} message={"Hello"} src={user.profileUrl} />
                  </ListItem>
                ))}
              </List>
            </DialogContent>
          </Dialog>
        )}
      </>
    )
  }

export default SearchPage
