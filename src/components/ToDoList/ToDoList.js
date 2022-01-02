
import {useState} from 'react';
import {Box, Typography, TextField, Grid, List, ListItem, ListItemText , IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './ToDoList.css'


const ToDoList = () => {

    const [tareas, setTareas] = useState([]);
    
    const agregarTarea = (e) => {
        e.preventDefault()
        let input = e.target.querySelector("input")
        let nameTarea = input.value
        if(nameTarea !== ""){
            let tarea = {
                id: new Date().getTime(),
                name: nameTarea
            }
            setTareas([...tareas, tarea])
        }else{
            alert("La tarea no puede estar vacia")
        }
        input.value = ""
    }

   
    const eliminarTarea = (id) => {
        setTareas(tareas.filter(tarea => tarea.id !== id))
    }

    
    return (
        <div className="card shadow w-50 contenedorToDoList">

        <Box sx={{ width: 400, height: 300, margin: "50px auto" }} component="form" onSubmit={(e) => agregarTarea(e)}>
            <Typography variant="h1" fontSize={60} paddingBottom={4} >To Do List</Typography>
            <TextField id="standard-basic" label="Ingrese una tarea" variant="standard" />
            <Grid item xs={12} sx={{ marginTop: "50px"}}>
                <List className='contenedorLista'>
                    {
                        tareas.length > 0 ?
                            tareas.map((tarea, key) => (
                                <div key={key}>
                                    <ListItem
                                        secondaryAction={
                                            <IconButton edge="end" aria-label="delete" onClick={()=> eliminarTarea(tarea.id)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        }
                                        >
                                        <ListItemText primary={tarea.name}/>
                                    </ListItem>
                                </div> 
                            ))
                        : <Typography variant="h3" fontSize={30} padding={3}>No hay tareas. Agregue una tarea por favor.</Typography>
                    }
                </List>
            </Grid>
            
        </Box>
    </div>
        
    );
}

export default ToDoList;



