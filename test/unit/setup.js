import jsdom from 'jsdom';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = { document: global.document, location: { search: '?circleToken=8888' } };
global.navigator = { userAgent: 'node.js' };
