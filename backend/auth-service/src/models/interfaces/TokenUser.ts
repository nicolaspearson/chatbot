import { User } from '@models/user.model';

export interface TokenUser {
	token: string;
	user: User;
}
