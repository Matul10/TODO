import React,{useState} from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/Action';
import { updateTodo } from '../redux/Action';

function TodoList({id,data,checked}) {
    //const[chk,setchk]=useState(false);
    const dispatch = useDispatch();
  return (
    <div>
        <List>
            <ListItem className="border-[10px] border-slate-400 bg-white rounded-md p-4">
            <ListItemButton role={undefined}  dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked}
                  tabIndex={-1}
                  disableRipple
                  onClick={()=>{ dispatch(updateTodo(id,!checked)) }}
                //   inputProps={{ 'aria-labelledby': labelId }}
                />

              </ListItemIcon>
              <ListItemText id={id} primary={data}  />

              <IconButton edge="end" aria-label="delete" onClick={()=>{dispatch(deleteTodo(id))}} >
                      <DeleteIcon />
                </IconButton>
            </ListItemButton>

            </ListItem>
        </List>
    </div>
  )
}

export default TodoList;