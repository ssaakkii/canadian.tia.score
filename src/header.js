import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const Header = () => {
	return (
		<AppBar position="static">
		  <Toolbar>
		    <Typography variant="h6">
		      "Canadian TIA Score" Check Tool
		    </Typography>
		  </Toolbar>
		</AppBar>
	);
};

export default Header;
