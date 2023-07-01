import React,{useState} from 'react'
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TodoList from './TodoList';
import InputModal from './InputModal';
import {useSelector} from 'react-redux';

function Body() {
  const[open,setOpen]=useState(false);
  const[filter,setFilter]=useState("All");
  const list = useSelector((state)=> state.list);
  
  return (
    <div class=" w-1/2 mx-auto mt-2 h-[700px]" >

        <div class=" mt-1 py-4 flex justify-between" > 
          <div class="mx-3 mt-4"> 
          <Button variant="contained" size="large" onClick={()=>{setOpen(!open)}} >ADD TASK</Button>
          </div>
          <InputModal open={open} setOpen={setOpen}/>

          <div class="mx-2"> 
          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={filter}
          onChange={(e)=>{setFilter(e.target.value);}}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
          <MenuItem value="Incomplete">Incomplete</MenuItem>
        </Select>
      </FormControl>
          </div>

        </div>


        <div class=" mt-2 h-[620px]" > 
        
          {filter==="All" && (
            list.map((ele) => (
              <TodoList id={ele.id} data={ele.data} checked={ele.checked} />
            ))
          )}
          
          {filter === "Completed" && (
            list.filter((ele) => ele.checked === true)
              .map((ele) => (
                <TodoList id={ele.id} data={ele.data} checked={ele.checked} />
              ))
          )}
        
          {filter === "Incomplete" && (
            list.filter((ele) => ele.checked === false)
              .map((ele) => (
                <TodoList id={ele.id} data={ele.data} checked={ele.checked} />
              ))
          )}
        
        </div>
    </div>
  )
}

export default Body;