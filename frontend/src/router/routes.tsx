import { action } from 'mobx';
import * as React from 'react';
import { Params, Route, State } from 'router5/create-router';

import App from 'containers/App';
import Dashboard from 'containers/DashboardLayout';
import { RouteNames } from 'enums/RouteNames';
import { RouterStore } from 'store/RouterStore';

import Login from 'pages/Login';
import SignUp from 'pages/SignUp';

export interface LinkData {
	name: string;
	params?: object;
}

export interface AdvRoute extends Route {
	link: (...args: any[]) => LinkData;
	component: (next?: Params) => any;
	activate?: (store: RouterStore, current?: Params, prev?: State) => void;
	deactivate?: (store: RouterStore, current?: Params, next?: State) => void;
}

export interface Routes {
	[name: string]: AdvRoute;
}

export const routes: Routes = {};

export const AppRoute: AdvRoute = {
	name: RouteNames.HOME,
	path: '/',

	link: () => ({
		name: AppRoute.name
	}),

	component: () => <App />,

	activate: action((store: RouterStore) => {
		store.activatedRouteName(AppRoute.name);
	}),

	deactivate: (store: RouterStore) => {
		store.deActivatedRouteName(AppRoute.name);
	}
};
routes[AppRoute.name] = AppRoute;

export const LoginRoute: AdvRoute = {
	name: RouteNames.LOGIN,
	path: '/login',

	link: () => ({
		name: LoginRoute.name
	}),

	component: () => <Login />,

	activate: action((store: RouterStore) => {
		store.activatedRouteName(LoginRoute.name);
	}),

	deactivate: (store: RouterStore) => {
		store.deActivatedRouteName(LoginRoute.name);
	}
};
routes[LoginRoute.name] = LoginRoute;

export const SignUpRoute: AdvRoute = {
	name: RouteNames.SIGN_UP,
	path: '/sign-up',

	link: () => ({
		name: SignUpRoute.name
	}),

	component: () => <SignUp />,

	activate: action((store: RouterStore) => {
		store.activatedRouteName(SignUpRoute.name);
	}),

	deactivate: (store: RouterStore) => {
		store.deActivatedRouteName(SignUpRoute.name);
	}
};
routes[SignUpRoute.name] = SignUpRoute;

export const DashboardRoute: AdvRoute = {
	name: RouteNames.DASHBOARD,
	path: '/dashboard',

	link: () => ({
		name: DashboardRoute.name
	}),

	component: () => <Dashboard />,

	activate: action((store: RouterStore) => {
		store.activatedRouteName(DashboardRoute.name);
	}),

	deactivate: (store: RouterStore) => {
		store.deActivatedRouteName(DashboardRoute.name);
	}
};
routes[DashboardRoute.name] = DashboardRoute;

export const DashboardChatRoute: AdvRoute = {
	name: RouteNames.DASHBOARD_CHAT,
	path: '/dashboard/chat',

	link: () => ({
		name: DashboardChatRoute.name
	}),

	component: () => <Dashboard />,

	activate: action((store: RouterStore) => {
		store.activatedRouteName(DashboardChatRoute.name);
	}),

	deactivate: (store: RouterStore) => {
		store.deActivatedRouteName(DashboardChatRoute.name);
	}
};
routes[DashboardChatRoute.name] = DashboardChatRoute;

export const DashboardProfileRoute: AdvRoute = {
	name: RouteNames.DASHBOARD_PROFILE,
	path: '/dashboard/profile',

	link: () => ({
		name: DashboardProfileRoute.name
	}),

	component: () => <Dashboard />,

	activate: action((store: RouterStore) => {
		store.activatedRouteName(DashboardProfileRoute.name);
	}),

	deactivate: (store: RouterStore) => {
		store.deActivatedRouteName(DashboardProfileRoute.name);
	}
};
routes[DashboardProfileRoute.name] = DashboardProfileRoute;
