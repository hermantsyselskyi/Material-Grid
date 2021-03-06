import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import './jambots';



const styles = {
	root: {
		flexGrow: 1
	},
	paper: {
		padding: '10%',
		textAlign: 'center',
		color: 'black'
	}
};

class App extends Component {
	state = {
		value: 0
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};
	render() {
		const { classes } = this.props;
		return (
			<div className="App">
				<div className="header">
					{/* <header className="App-header">
						<AppBar position="static">
							<Paper className="Menubar" className={classes.root}>
								<Tabs
									value={this.state.value}
									onChange={this.handleChange}
									indicatorColor="primary"
									textColor="primary"
									centered
								>
									<Tab label="Item One" />
									<Tab label="Item Two" />
									<Tab label="Item Three" />
								</Tabs>
							</Paper>
						</AppBar>
					</header> */}
				</div>
				<div className="empty">
				</div>
				<div className="leftbar">
				</div>
				<div className="rightbar">
				</div>
				<div className="middle">
				</div>
				<div className="footer">

				</div>
			</div>
		);
	}
}

export default withStyles(styles)(App);
