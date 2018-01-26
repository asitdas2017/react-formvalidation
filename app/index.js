import React from 'react';
import ReactDOM from 'react-dom';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Registration from "./components/registration/Registration";


class HelloWorld extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Registration />
            </MuiThemeProvider>
        )
    }
};

ReactDOM.render( < HelloWorld / > , document.getElementById('root'));