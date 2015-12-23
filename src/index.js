import irc from 'irc';

import { server, nick, channels } from '../config';

console.log('starting up', server, nick, channels);

const client = new irc.Client(server, nick, { channels });

client
	.addListener('registered', () => console.log('now registered'));

client
	.addListener('error', error => console.error(error));

client
	.addListener('join', (chan, nick) => client.say(chan, `welcome ${nick}!`));

client
	.addListener('invite', (chan, nick) => client.join(chan));