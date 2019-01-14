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
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';



  

class FormEventos extends Component {

    
    constructor(props) {
        super(props);
        
        this.state = {
            evento: {
                nombre: '',
                cupo: '',
                aforo: '',
                duracion: '',
            }
        }
    }


    render() {
        
        return (
            <div>
                <h1>Create Form</h1>

                <Grid
                container spacing={24}
                direction="row"
                justify="center"
                alignItems="center"
                >
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
                }
                
                />
                <CardMedia
                
                image="/static/images/cards/paella.jpg"
                title="Paella dish"
                />
                <CardContent>
                    <form>


                        <DatePicker
                            margin="normal"
                            label="Date picker"
                        
                        />
                        <TimePicker
                            margin="normal"
                            label="Time picker"
                    
                          
                        />

                    <Grid container spacing={24}>

                             <Grid item xs={12}>
                                <TextField
                                id="standard-uncontrolled"
                                label="Nombre de evento"
                                margin="normal"
                                fullWidth
                                />
                            </Grid>
                    
                            <Grid item xs={4}>
                                <TextField
                                id="standard-uncontrolled"
                                label="Aforo"
                                margin="normal"
                                fullWidth
                                />
                            </Grid>

                            <Grid item xs={4}>
                                <TextField
                                id="standard-uncontrolled"
                                label="Cupo"
                                margin="normal"
                                fullWidth
                                />
                            </Grid>

                            <Grid item xs={4}>
                                <TextField
                                id="standard-uncontrolled"
                                label="Duración"
                                margin="normal"
                                fullWidth
                                />
                            </Grid>

                            <Grid item xs={12}>
                            <TextField
                            id="outlined-multiline-static"
                            label="Descripción"
                            multiline
                            rows="4"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            />
                            </Grid>

                        </Grid>

                    </form>
                </CardContent>
                <CardActions  disableActionSpacing>
                    <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                    
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                
                
            </Card>
                </Grid>

                </Grid>
                

                

            </div>
        );
    }
}

export default FormEventos;