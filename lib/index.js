'use strict';

var _irc = require('irc');

var _irc2 = _interopRequireDefault(_irc);

var _config = require('../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('starting up', _config.server, _config.nick, _config.channels);

var client = new _irc2.default.Client(_config.server, _config.nick, { channels: _config.channels });

client.addListener('registered', function () {
	return console.log('now registered');
});

client.addListener('error', function (error) {
	return console.error(error);
});

client.addListener('join', function (chan, nick) {
	return client.say(chan, 'welcome ' + nick + '!');
});

client.addListener('invite', function (chan, nick) {
	return client.join(chan);
});