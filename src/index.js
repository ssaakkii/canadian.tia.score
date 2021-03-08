
import React from 'react';
import ReactDOM from 'react-dom';
import SymptomsTable from './symptomsTable';
import Header from './header';
import './style.css';

ReactDOM.render(<Header />, document.querySelector('#header'));
ReactDOM.render(<SymptomsTable />, document.querySelector('#root'));
    