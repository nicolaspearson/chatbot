import { AuthStore } from 'store/AuthStore';
import { FlagStore } from 'store/FlagStore';
import { RouterStore } from 'store/RouterStore';

import AuthService from 'api/AuthService';
import { AuthManagerClient } from 'proto/AuthServiceClientPb';
import ApiUtils from 'utils/ApiUtils';

// tslint:disable no-null-keyword
export class RootStore {
	public authStore: AuthStore;
	public flagStore: FlagStore;
	public routerStore: RouterStore;

	private authManagerClient: AuthManagerClient;
	public authService: AuthService;

	constructor() {
		this.authStore = new AuthStore(this);
		this.flagStore = new FlagStore(this);
		this.routerStore = new RouterStore(this);
		this.initAuthService();
	}

	private initAuthService() {
		this.authManagerClient = new AuthManagerClient(ApiUtils.getApiEndpoint(), null, null);
		this.authService = new AuthService(this.authManagerClient);
	}
}
