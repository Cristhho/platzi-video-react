import React from 'react';
import {render} from 'react-dom';

import Playlist from './src/playlist/components/playlist';
import data from './src/api.json';

//const saludo = <h1>Hola desde React!</h1>;

render(<Playlist data={data} />, document.getElementById("app"));