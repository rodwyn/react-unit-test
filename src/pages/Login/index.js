import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';


import { styles } from './styles';

class Login extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={ classes.container }>
        Iniciar Sesión
      </div>
    )
  }
}

export default withStyles(styles)(Login);
