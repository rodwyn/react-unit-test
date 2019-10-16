import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './style';

const LeftContainer = ({ classes, avatar_url, bio, blog, email, name}) => (
  <React.Fragment>
    <Avatar alt={ email } src={ avatar_url } className={ classes.avatar } />
    <Typography>{ name}</Typography>
    <Typography>{ email }</Typography>
    <Typography>{ bio }</Typography>
  </React.Fragment>
);

export default withStyles(styles)(LeftContainer);
