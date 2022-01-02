import {Typography, Grid, List, ListItem, ListItemText , IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './ListaDeTareas.css'  

const ListaDeTareas = ({tareas, eliminarTarea}) => {
    return (
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
    );
}
 
export default ListaDeTareas;