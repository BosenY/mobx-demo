import express from 'express';
import httpProxy from 'http-proxy';
import bundle from './bundle';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './../app/store/configureStore';
import routes from './../app/routes';