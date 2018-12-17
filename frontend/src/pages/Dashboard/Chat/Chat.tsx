import { Card } from 'antd';
import * as React from 'react';

import DashboardPage from 'components/structural/DashboardPage';

import './style.less';

export interface ChatProps {
	// Empty
}

interface State {
	loading: boolean;
}

class Chat extends React.Component<ChatProps, State> {
	public state: State = {
		loading: true
	};

	constructor(props: ChatProps, context?: any) {
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
				className={'Chat__Body'}
			>
				<Card style={{ height: 'calc(100vh - 110px)' }} />
			</DashboardPage>
		);
	}
}

export default Chat;
