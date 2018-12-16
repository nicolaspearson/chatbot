import * as grpc from 'grpc';
import GrpcBoom from 'grpc-boom';
import { BaseService, ISearchQueryBuilderOptions, SearchTerm } from 'grpc-typeorm-infrastructure';
import { JsonWebTokenError } from 'jsonwebtoken';
import moment from 'moment';
import { FindManyOptions, FindOneOptions } from 'typeorm';

import { TokenUser } from '@models/interfaces/TokenUser';
import Token from '@models/internal/token.internal';
import { User } from '@models/user.model';
import UserRepository from '@repositories/user.repository';

export default class UserService extends BaseService<User> {
	constructor(private userRepository: UserRepository) {
		super(userRepository);
	}

	public async authorize(token: Token): Promise<User> {
		try {
			const userResult: User = await this.findOneByTokenAndVerify(token);
			return userResult.sanitize();
		} catch (error) {
			if (error && error.isBoom) {
				throw error;
			}
			throw GrpcBoom.unauthenticated('Invalid token');
		}
	}

	public async login(
		password: string,
		username?: string,
		emailAddress?: string
	): Promise<TokenUser> {
		try {
			// Fetch the user from the database
			let userResult: User;
			try {
				if (emailAddress) {
					// Use the email address if provided
					userResult = await this.userRepository.findOneByFilter({
						where: {
							email_address: emailAddress,
							enabled: true
						}
					});
				} else if (username) {
					// Fallback to the username
					userResult = await this.userRepository.findOneByFilter({
						where: {
							username,
							enabled: true
						}
					});
				} else {
					// Pass through to catch
					throw new Error('Invalid credentials supplied');
				}
			} catch (error) {
				throw GrpcBoom.unauthenticated('Invalid credentials supplied');
			}

			// Validate the input parameters
			const userValidate: User = User.cloneUser(userResult);
			userValidate.password = password || '';
			await userValidate.isValid();

			// Validate the provided password
			const valid = await userResult.validatePassword(password);
			if (!valid) {
				throw GrpcBoom.unauthenticated('Invalid username / password supplied');
			}

			// Create a token
			const newToken: Token = new Token();
			newToken.generateToken(userResult.id);

			// Update the logged in timestamp
			userResult.lastLoggedInAt = moment().toDate();
			this.update(userResult);

			// Return the created token
			return { token: newToken.token, user: userResult.sanitize() };
		} catch (error) {
			if (error && error.isBoom) {
				throw error;
			}
			throw GrpcBoom.internal(error);
		}
	}

	public async findAll(): Promise<User[]> {
		try {
			const users: User[] = await this.userRepository.getAll();
			const sanitizedUsers = users.map((user: User) => {
				user.sanitize();
				return user;
			});
			return sanitizedUsers;
		} catch (error) {
			if (error && error.isBoom) {
				throw error;
			}
			throw GrpcBoom.internal(error);
		}
	}

	public async findAllByFilter(filter: FindManyOptions<User>): Promise<User[]> {
		try {
			const users: User[] = await this.userRepository.findManyByFilter(filter);
			const sanitizedUsers = users.map((user: User) => {
				user.sanitize();
				return user;
			});
			return sanitizedUsers;
		} catch (error) {
			if (error && error.isBoom) {
				throw error;
			}
			throw GrpcBoom.internal(error);
		}
	}

	public async findOneById(id: number): Promise<User> {
		try {
			if (!User.validId(id) || isNaN(id)) {
				throw GrpcBoom.invalidArgument('Incorrect / invalid parameters supplied');
			}
			const userResult: User = await this.userRepository.findOneById(id);
			return userResult.sanitize();
		} catch (error) {
			if (error && error.isBoom) {
				throw error;
			}
			throw GrpcBoom.internal(error);
		}
	}

	public async findOneByTokenAndVerify(token: Token): Promise<User> {
		try {
			// Decode the token
			const decodedToken: any = token.verifyToken();
			const userId = decodedToken.id;
			if (!User.validId(userId)) {
				throw GrpcBoom.unauthenticated('Invalid token');
			}
			// Fetch the user from the database
			const userResult: User = await this.userRepository.findOneByFilter({
				where: {
					id: userId
				}
			});
			if (!userResult) {
				throw GrpcBoom.unauthenticated('Invalid token');
			}
			return userResult.sanitize();
		} catch (error) {
			if (error instanceof JsonWebTokenError) {
				throw GrpcBoom.unauthenticated('Invalid token');
			}
			if (error && error.isBoom) {
				if (error.code === grpc.status.NOT_FOUND) {
					throw GrpcBoom.unauthenticated('Invalid token');
				}
				throw error;
			}
			throw GrpcBoom.internal(error);
		}
	}

	public async findOneByFilter(filter: FindOneOptions<User>): Promise<User> {
		try {
			const userResult: User = await this.userRepository.findOneByFilter(filter);
			return userResult.sanitize();
		} catch (error) {
			if (error && error.isBoom) {
				throw error;
			}
			throw GrpcBoom.internal(error);
		}
	}

	public async findOneWithQueryBuilder(options: ISearchQueryBuilderOptions): Promise<User> {
		try {
			const userResult = await this.userRepository.findOneWithQueryBuilder(options);
			if (userResult) {
				return userResult.sanitize();
			} else {
				throw GrpcBoom.notFound('The requested object could not be found');
			}
		} catch (error) {
			if (error && error.isBoom) {
				throw error;
			}
			throw GrpcBoom.internal(error);
		}
	}

	public async findManyWithQueryBuilder(options: ISearchQueryBuilderOptions): Promise<User[]> {
		try {
			const results = await this.userRepository.findManyWithQueryBuilder(options);
			const sanitizedResults = results.map((user: User) => {
				user.sanitize();
				return user;
			});
			return sanitizedResults;
		} catch (error) {
			if (error && error.isBoom) {
				throw error;
			}
			throw GrpcBoom.internal(error);
		}
	}

	public async search(limit: number, searchTerms: SearchTerm[]) {
		try {
			const filter = this.getSearchFilter(limit, searchTerms);
			return await this.findManyWithQueryBuilder(filter);
		} catch (error) {
			if (error && error.isBoom) {
				throw error;
			}
			throw GrpcBoom.internal(error);
		}
	}

	public async save(user: User): Promise<User> {
		try {
			// Check if the user is valid
			const userIsValid = await user.isValid();
			if (!userIsValid) {
				throw GrpcBoom.invalidArgument('Incorrect / invalid parameters supplied');
			}
			// Encrypt the users password
			await user.encryptUserPassword();
			// Save the user to the database
			const userResult: User = await this.userRepository.save(user);
			return userResult.sanitize();
		} catch (error) {
			if (error && error.isBoom) {
				throw error;
			}
			throw GrpcBoom.internal(error);
		}
	}

	public async update(user: User): Promise<User> {
		try {
			// Check if the user is valid
			const userIsValid = await user.isValid();
			if (!userIsValid || !User.validId(user.id)) {
				throw GrpcBoom.invalidArgument('Incorrect / invalid parameters supplied');
			}
			// Do not allow the password to be updated with this method
			delete user.password;
			// Update the user on the database
			const userResult: User = await this.userRepository.updateOneById(user.id, user);
			return userResult.sanitize();
		} catch (error) {
			if (error && error.isBoom) {
				throw error;
			}
			throw GrpcBoom.internal(error);
		}
	}

	public async signUp(user: User): Promise<TokenUser> {
		try {
			// Check if the user is valid
			const userIsValid = await user.isValid();
			if (!userIsValid) {
				throw GrpcBoom.invalidArgument('Incorrect / invalid parameters supplied');
			}

			// Make sure the user does not exist
			try {
				const testUser: User = await this.findOneWithQueryBuilder({
					where: `email_address = '${user.emailAddress}' OR username = '${user.username}'`
				});
				if (testUser && User.validId(testUser.id)) {
					throw GrpcBoom.invalidArgument('The username or email address is already in use.');
				}
			} catch (error) {
				if (error && error.isBoom && error.code === grpc.status.INVALID_ARGUMENT) {
					throw error;
				}
				// User not found - Continue...
			}

			// Enable the user
			user.enabled = true;

			// Set the logged in timestamp
			user.lastLoggedInAt = moment().toDate();

			// Save the user to the database
			const userSaved: User = await this.save(user);

			// Create a token
			const newToken: Token = new Token();
			newToken.generateToken(userSaved.id);

			// Return the created token
			return { token: newToken.token, user: userSaved.sanitize() };
		} catch (error) {
			if (error && error.isBoom) {
				throw error;
			}
			throw GrpcBoom.internal(error);
		}
	}

	public async changePassword(user: User, newPassword: string): Promise<TokenUser> {
		try {
			// Check if the user is valid
			const userIsValid = await user.isValid();
			if (!userIsValid || !User.validId(user.id) || !user.password || !newPassword) {
				throw GrpcBoom.invalidArgument('Incorrect / invalid parameters supplied');
			}

			// Fetch the user from the database
			const userResult: User = await this.userRepository.findOneByFilter({
				where: {
					username: user.username
				}
			});

			// Validate the input parameters
			const userValidate: User = User.cloneUser(userResult);
			userValidate.password = user.password || '';
			await userValidate.isValid();

			// Validate the provided password
			const valid = await userResult.validatePassword(user.password);
			if (!valid) {
				throw GrpcBoom.unauthenticated('Invalid password');
			}

			// Encrypt the users new password
			userResult.password = newPassword;
			await userResult.encryptUserPassword();

			// Update the user on the database
			const userUpdateResult: User = await this.userRepository.updateOneById(
				userResult.id,
				userResult
			);
			return await this.login(
				userUpdateResult.username,
				newPassword,
				userUpdateResult.emailAddress
			);
		} catch (error) {
			if (error && error.isBoom) {
				throw error;
			}
			throw GrpcBoom.internal(error);
		}
	}

	public async delete(id: number): Promise<User> {
		try {
			if (!User.validId(id)) {
				throw GrpcBoom.invalidArgument('Incorrect / invalid parameters supplied');
			}
			// Do a soft delete
			const userResult: User = await this.userRepository.findOneById(id);
			userResult.deletedAt = moment().toDate();
			userResult.enabled = false;
			await this.userRepository.save(userResult);
			return userResult.sanitize();
		} catch (error) {
			if (error && error.isBoom) {
				throw error;
			}
			throw GrpcBoom.internal(error);
		}
	}
}
