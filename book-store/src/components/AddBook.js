import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { Box, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material'
import Button from '@mui/material/Button';
import axios from 'axios';

const AddBook = () => {

  const history = useNavigate();

  const [inputs,setInputs] = useState({
    name: '',
    description: '',
    price: '',
    author: '',
    image: ''
  });

  const [checked,setChecked] = useState(false);

  const handleChange = (e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }

  const sendRequest = async()=>{
    await axios.post("http://localhost:5000/books/add",{
      name:String(inputs.name),
      author: String(inputs.author),
      description: String(inputs.description),
      price: Number(inputs.price),
      image: String(inputs.image),
      available: Boolean(inputs.available)
    }).then(res=>res.data);
  }


  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(inputs,checked);
    sendRequest().then(()=>history('/books/add')); 
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box 
      display="flex" 
      flexDirection="column" 
      justifyConten='center' 
      maxWidth={700} 
      alignContent='center' 
      alignSelf='center'
      marginLeft='auto'
      marginRight='auto'
      marginTop={10}
      >
        <FormLabel>Name</FormLabel>
        <TextField 
        value={inputs.name} 
        onChange={handleChange} 
        margin="normal" 
        fullWidth 
        variant="outlined" 
        name="name" 
        />

        <FormLabel>Author</FormLabel>
        <TextField 
        value={inputs.author} 
        onChange={handleChange} 
        margin="normal" 
        fullWidth 
        variant="outlined" 
        name="author" 
        />

        <FormLabel>Description</FormLabel>
        <TextField
        value={inputs.description} 
        onChange={handleChange}  
        margin="normal" 
        fullWidth 
        variant="outlined" 
        name="description" />

        <FormLabel>Price</FormLabel>
        <TextField
        value={inputs.price} 
        onChange={handleChange} 
        type='number' 
        margin="normal" 
        fullWidth 
        variant="outlined" 
        name="price" />

        <FormLabel>Image</FormLabel>
        <TextField
        value={inputs.image}
        onChange={handleChange}  
        margin="normal" 
        fullWidth 
        variant="outlined" 
        name="image" 
        />

        <FormControlLabel control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)} />} label="Available" />


        <Button variant='contained' type='submit'>Add Book</Button>

      </Box>
    </form>
  )
}

export default AddBook