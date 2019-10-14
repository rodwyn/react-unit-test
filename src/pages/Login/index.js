import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import GithubLogin from 'react-github-login';

import { styles } from './styles';

class Login extends Component {
  onSuccess = response => {
    console.log(response);
  }

  onFailure = response => {
    console.log(response);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={ classes.container }>
        <Card className={ classes.card }>
          <Typography className={ classes.title } variant="h1">Iniciar Sesión</Typography>
          <GithubLogin
            buttonText="Github Account"
            className={ classes.button }
            clientId={ process.env.REACT_APP_GITHUB_CLIENT_ID }
            onSuccess={ this.onSuccess }
            onFailure={ this.onFailure }
            redirectUri={ process.env.REACT_APP_GITHUB_CALLBACK_URL }
            />
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(Login);
