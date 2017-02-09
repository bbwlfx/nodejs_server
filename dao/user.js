'use strict';

let user = module.exports = {};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const list = [
{
	account: 'scarlett',
	password: '123',
},
{
	account: 'masaka',
	password: '123',
}
]
user.findUserByAccount = function (account) {
	return delay(500)
		.then(() => {
			for(let i = 0; i < list.length; i++) {
				if(account == list[i].account) {
					return list[i];
				}
			}
			return null;
		})
}