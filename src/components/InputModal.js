import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import {addTodo} from '../redux/Action';

function InputModal({open,setOpen}) {
    const dispatch= useDispatch();
    const[input,setInput]= useState('');
  return (
    <div>
         <Dialog open={open} >
        <DialogTitle>ENTER YOUR TODO</DialogTitle>
        <DialogContent>
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="todo"
            type="text"
            fullWidth
            variant="standard"
            value={input}
            onChange={(e)=>{ setInput(e.target.value) }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{setOpen(!open)}}>Cancel</Button>
          <Button onClick={()=>
            dispatch(addTodo(input),
            setInput(''))}
            // setOpen(!open)
            >Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default InputModal