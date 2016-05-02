require('babel-core/register')({
  ignore: /node_modules/,
  presets: ['es2015', 'stage-0']
});

import jsdom from 'jsdom';

global.window = { document: global.document, location: { search: '?circleToken=8888' } };
global.navigator = { userAgent: 'node.js' };
