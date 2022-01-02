
import {useState} from 'react';
import {Box, Typography, TextField} from '@mui/material';
import './ToDoList.css'
import ListaDeTareas from './ListaDeTareas/ListaDeTareas';


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
                <ListaDeTareas eliminarTarea={eliminarTarea} tareas={tareas}  />
            </Box>
        </div>
        
    );
}

export default ToDoList;



