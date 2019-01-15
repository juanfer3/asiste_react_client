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
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { TimePicker } from 'material-ui-pickers';
import { DatePicker } from 'material-ui-pickers';
import { DateTimePicker } from 'material-ui-pickers';

import esLocale from 'date-fns/locale/es';


class FechaCompromiso extends Component {
    render() {
        return (
            <div>
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
                            } />
                                
                                <CardContent>                                    
                                    <Grid container spacing={24}>

                                            <Grid item xs={12}>
                                            <MuiPickersUtilsProvider locale={esLocale}  utils={DateFnsUtils}>
                                                <DatePicker 
                                                name="fecha"
                                                label="Fecha"
                                                fullWidth
                                                margin="normal"
                                                />
                                            </MuiPickersUtilsProvider>
                                            </Grid>
                                    
                                            <Grid item xs={6}>
                                                <MuiPickersUtilsProvider locale={esLocale}  utils={DateFnsUtils}>
                                                    <TimePicker
                                                    name="hora_inicio"
                                                    label="Hora de inicio"
                                                    margin="normal"
                                                    />
                                                </MuiPickersUtilsProvider>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <MuiPickersUtilsProvider locale={esLocale}  utils={DateFnsUtils}>
                                                    <TimePicker
                                                    name="hora_final"
                                                    label="Hora Final"
                                                    margin="normal"
                                                    />
                                                </MuiPickersUtilsProvider>
                                            </Grid>
                                    </Grid>
                                </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default FechaCompromiso;