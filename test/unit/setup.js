import jsdom from 'jsdom';

global.window = { document: global.document, location: { search: '?circleToken=8888' } };
global.navigator = { userAgent: 'node.js' };
