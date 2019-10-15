import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';
import {styles} from './style';

class Home extends Component {

	render() {
		const { classes } = this.props;

		return (
			<Grid container className={ classes.homeContainer }>
				<Grid xs={3} className={classes.leftContainer}>
					<LeftContainer />
				</Grid>
				<Grid xs={9} className={classes.rightContainer}>
					<RightContainer />
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(Home);
