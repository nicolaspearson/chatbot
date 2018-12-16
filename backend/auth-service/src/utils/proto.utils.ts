import { User } from '@models/user.model';
import { User as UserProto } from '@proto/auth_pb';

export function userTransformToProto(user: User): UserProto {
	const userProto: UserProto = new UserProto();
	userProto.setId(user.getId());
	userProto.setFirstName(user.getFirstName());
	userProto.setLastName(user.getLastName());
	userProto.setUsername(user.getUsername());
	userProto.setPassword(user.getPassword());
	userProto.setEmailAddress(user.getEmailAddress());
	userProto.setEnabled(user.getEnabled());
	userProto.setLastLoggedInAt(user.getLastLoggedInAt());
	return userProto;
}

export function userTransformFromProto(userProto: UserProto): User {
	const user: User = new User();
	user.setId(userProto.getId());
	user.setFirstName(userProto.getFirstName());
	user.setLastName(userProto.getLastName());
	user.setUsername(userProto.getUsername());
	user.setPassword(userProto.getPassword());
	user.setEmailAddress(userProto.getEmailAddress());
	user.setEnabled(userProto.getEnabled());
	user.setLastLoggedInAt(userProto.getLastLoggedInAt());
	return user;
}
