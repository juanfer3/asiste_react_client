import React, { Component } from 'react';

/**Material UI Components */
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import FechaCompromiso from './Partials/FechaCompromiso';




class FormEventos extends Component {

    
    constructor(props) {
        super(props);

        this.emptyTask = {
            title: '',
            contenido: '',
            id: null,
            _destroy: false
          };

        this.emptyFechaEvento = {
            fecha: '',
            fecha_inicio: '',
            fecha_final: '',
            id: null,
            _destroy: false
        }
        
        this.state = {
            evento: {
                nombre: '',
                cupo: '',
                aforo: '',
                duracion: '',
                fechas_eventos_attributes: [Object.assign({}, this.emptyFechaEvento)],
                tasks_attributes: [Object.assign({}, this.emptyTask)]
            }
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
     
    }



    /**
     * Tomar los valres de los inputs eventos
     * @param {*} e //tomar la informaciòn del input
     */
    handleEventoNameChange(e) {
        let value = e.target.value;
        this.setState({
            evento: {
                  ...this.state.evento,
                  [e.target.name]: value
            }
        })
    }

    /**
     * Funcion para agregar Task los eventos
     */
    handleAddTask() {
        this
        .state
        .evento
        .tasks_attributes
        .push(Object.assign({}, this.emptyTask));
        this.setState({ evento: this.state.evento });
      }

    /**
     * Funcion para agregar fecha de los eventos
     */
    AddFechaEvento() {
        this
        .state
        .evento
        .fechas_eventos_attributes
        .push(Object.assign({}, this.emptyFechaEvento));
        this.setState({ evento: this.state.evento });
    }
       

    /**
     * Funcion para capturar evento de los task
     * @param {*} event //Capturar nombre del evento
     * @param {*} task // Capturar el task 
     */  
    onTaskTitleChange(event, task) {
        const value = event.target.value;
        task[event.target.name] = value;
        console.log(task);
    }


    /**
     * Funcion para capturar evento de los fechaEvento
     * @param {*} event //Capturar nombre del evento
     * @param {*} task // Capturar el Fecha
     */  
    onFechaEventoChange(event, fechaEvento) {
        const value = event.target.value;
        fechaEvento[event.target.name] = value;
        console.log(fechaEvento);
    }

      
    /**
     * Funciòn para enviar el formulario
     */
    handleFormSubmit() {
        console.log(this.state);
    }
    
    renderFechaEventoForm() {
        let counter = 0;
        return this.state.evento.fechas_eventos_attributes.map((fecha_evento, index) => {
          if (fecha_evento._destroy === false) {
            let fechaEventoDOM = (
                <div>
                    <FechaCompromiso/>
                     <br/>
                </div>
              
            );
            counter++;
      
            return fechaEventoDOM;
          } else {
            return null;
          }
        });
      }


    render() {
        
        return (
            <div>
                <h1>Registar Evento</h1>
                <form> 
                    <Grid container spacing={24} direction="row" justify="center" alignItems="center">
                        <Grid item xs={9}>
                            <Card >
                                <CardHeader
                                avatar={
                                    <Typography>Información del Evento</Typography>
                                }

                                action={
                                    <IconButton>
                                    <MoreVertIcon />
                                    </IconButton>
                                }/>
                                <CardContent>                                        
                                    <Grid container spacing={24}>
                                        <Grid item xs={12}>
                                            <TextField
                                            id="standard-uncontrolled"
                                            label="Nombre de evento"
                                            name="nombre"
                                            onChange={e => this.handleEventoNameChange(e)}
                                            margin="normal"
                                            fullWidth
                                            />
                                        </Grid>
                                    
                                        <Grid item xs={4}>
                                            <TextField
                                            id="standard-uncontrolled"
                                            label="Aforo"
                                            name="aforo"
                                            onChange={e => this.handleEventoNameChange(e)}
                                            margin="normal"
                                            type="number"
                                            fullWidth
                                            />
                                        </Grid>

                                        <Grid item xs={4}>
                                            <TextField
                                            id="standard-uncontrolled"
                                            label="Cupo"
                                            name="cupo"
                                            onChange={e => this.handleEventoNameChange(e)}
                                            type="number"
                                            margin="normal"
                                            fullWidth
                                            />
                                        </Grid>

                                        <Grid item xs={4}>
                                            <TextField
                                            id="standard-uncontrolled"
                                            label="Duración"
                                            name="duracion"
                                            onChange={e => this.handleEventoNameChange(e)}
                                            margin="normal"
                                            fullWidth
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField
                                            id="outlined-multiline-static"
                                            label="Descripción"
                                            name="description"
                                            onChange={e => this.handleEventoNameChange(e)}
                                            multiline
                                            rows="4"
                                            fullWidth
                                            margin="normal"
                                            variant="outlined"
                                            />
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                    
                            </Card>
                        </Grid>
                    </Grid>
                </form>

                <div>
                    <FechaCompromiso/>
    
                    
                </div>

                <Button variant="contained" color="primary" onClick={() => this.AddFechaEvento()} >
                    Add
                </Button>

                <Button variant="contained" color="primary" onClick={() => this.handleFormSubmit()} >
                    Crear
                </Button>
            </div>
        );
    }
}

export default FormEventos;