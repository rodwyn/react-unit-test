import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import get from 'lodash/get';

import { getProfileData, getProfileRepos } from '../../redux/actions/profile';
import { getData } from '../../utils/storage';
import { GITHUB_TOKEN } from '../../consts';
import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';
import {styles} from './style';

class Home extends Component {
	constructor() {
		super();
		this.state = { githubToken: null };
	}

	async componentDidMount() {
		const githubToken = getData(GITHUB_TOKEN);

		await this.setState({ githubToken });
		this.props.getProfileData({ githubToken });
	}

	render() {
		const { classes, githubData } = this.props;
		console.log(this.props);

		return (
			<Grid container className={ classes.homeContainer }>
				<Grid item xs={3} className={classes.leftContainer}>
					<LeftContainer { ...githubData } />
				</Grid>
				<Grid item xs={9} className={classes.rightContainer}>
					<RightContainer />
				</Grid>
			</Grid>
		);
	}
}

const actions = {
	getProfileData,
	getProfileRepos
};

const mapStateToProps = state => ({
	githubData: get(state, 'profile.githubData', null)
});

export default compose(
	connect(mapStateToProps, actions),
	withStyles(styles)
)(Home);
