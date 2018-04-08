import React, { Component } from 'react';
import { render } from 'react-dom';
import router from './router';
import './styles/common.less';

render(router, document.getElementById("app"))