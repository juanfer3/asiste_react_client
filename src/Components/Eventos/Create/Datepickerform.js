import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { TimePicker } from 'material-ui-pickers';
import { DatePicker } from 'material-ui-pickers';
import { DateTimePicker } from 'material-ui-pickers';

import esLocale from 'date-fns/locale/es';

class Contenido extends Component {
    render() {
        return (
            <div>
                <MuiPickersUtilsProvider locale={esLocale}  utils={DateFnsUtils}>
                        <DatePicker />
                        <TimePicker  />
                        <DateTimePicker  />
                    </MuiPickersUtilsProvider>
            </div>
        );
    }
}

Contenido.propTypes = {

};

export default Contenido;