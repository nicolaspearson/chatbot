import { Card } from 'antd';
import * as React from 'react';

import DashboardPage from 'components/structural/DashboardPage';

import './style.less';

export interface ProfileProps {
	// Empty
}

interface State {
	loading: boolean;
}

class Profile extends React.Component<ProfileProps, State> {
	public state: State = {
		loading: true
	};

	constructor(props: ProfileProps, context?: any) {
		super(props, context);
	}

	public componentDidMount() {
		setTimeout(() => {
			this.setState({
				loading: false
			});
		}, 500);
	}

	public render() {
		return (
			<DashboardPage
				useLoader={true}
				spinning={this.state.loading}
				antSpinner={true}
				className={'Profile__Body'}
			>
				<Card style={{ height: 'calc(100vh - 110px)' }} />
			</DashboardPage>
		);
	}
}

export default Profile;
