require('babel-core/register')({
  presets: ['es2015', 'stage-0', 'react'],
  plugins: ['transform-decorators-legacy', 'add-module-exports']
});

import jsdom from 'jsdom';

global.window = { document: global.document, location: { search: '?circleToken=8888' } };
global.navigator = { userAgent: 'node.js' };
