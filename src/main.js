import React, {Component, PureComponent, Fragment} from 'react'
import {render} from 'react-dom'
import "../styles/main.sass"
import store from './store/Store'
import Root from "./components/Root";

render(
    <Root />,
    document.getElementById('container')
);
