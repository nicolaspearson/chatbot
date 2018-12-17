import { User } from 'models/User';
import { User as UserProto } from 'proto/auth_pb';

export function userTransformToProto(user: User): UserProto {
	const userProto: UserProto = new UserProto();
	if (user.id) {
		userProto.setId(user.id);
	}
	if (user.firstName) {
		userProto.setFirstName(user.firstName);
	}
	if (user.lastName) {
		userProto.setLastName(user.lastName);
	}
	if (user.username) {
		userProto.setUsername(user.username);
	}
	if (user.password) {
		userProto.setPassword(user.password);
	}
	if (user.emailAddress) {
		userProto.setEmailAddress(user.emailAddress);
	}
	if (user.enabled) {
		userProto.setEnabled(user.enabled);
	}
	if (user.lastLoggedInAt) {
		userProto.setLastLoggedInAt(user.lastLoggedInAt);
	}
	return userProto;
}

export function userTransformFromProto(userProto: UserProto): User {
	const user: User = {
		id: userProto.getId(),
		firstName: userProto.getFirstName(),
		lastName: userProto.getLastName(),
		username: userProto.getUsername(),
		password: userProto.getPassword(),
		emailAddress: userProto.getEmailAddress(),
		enabled: userProto.getEnabled(),
		lastLoggedInAt: userProto.getLastLoggedInAt()
	};
	return user;
}
