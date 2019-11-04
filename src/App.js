import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import customTheme from './config/muiTheme';
import routes from './routes';

import './styles/index.css';

const App = ({ store }) => (
	<Provider store={store}>
		<MuiThemeProvider theme={ customTheme }>
			{ routes }
		</MuiThemeProvider>
	</Provider>
);

App.propTypes = {
	store: PropTypes.object.isRequired
};

export default App;
