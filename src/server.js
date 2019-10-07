import express from 'express';
import React from 'react';
import {StaticRouter} from 'react-router';
import reactDomServer from 'react-dom/server';

import App from '../dist/ssr/app';

const app = express();

app.use(express.static('dist'));
app.use('/images',express.static('images'));

app.get('*', (req, res) => {
	console.log(req.url);
	const html = reactDomServer.renderToString(
	<StaticRouter
		location={req.url}
		context={{
			logged: true
		}}>
		<App />
	</StaticRouter>);
	res.write(`
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>Platzi Video</title>
			<!-- Compiled and minified CSS -->
		  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
			<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
			<link rel="stylesheet" href="/css/app.css"/>
		</head>
		<body>
			<div id="home-container">${html}</div>
			<div id="modal-container"></div>
			<script src="/js/app.js"></script>
		</body>
		</html>`);
	res.end();
});

app.listen(4000);
console.log("Server running on port 4000");