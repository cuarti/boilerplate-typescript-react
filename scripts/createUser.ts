
import {createHash} from 'crypto';


const user: User = {
	username: 'foo',
	email: 'foo@gmail.com',
	password: 'bar'
};

create(user)
	.then(u => console.log('Created user\n', u))
	.catch(err => console.error(err))
	.then(() => process.exit(0));


interface User {
	username: string;
	email: string;
	password: string;
}

function create(user: User): Promise<User> {

	let sha1 = createHash('sha1');
	sha1.update(user.password);

	return Promise.resolve({
		username: user.username,
		email: user.email,
		password: sha1.digest('hex')
	});
}
