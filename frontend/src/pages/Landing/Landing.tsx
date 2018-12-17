import { Button } from 'antd';
import { observer } from 'mobx-react';
import * as React from 'react';

import Chatbot from 'components/icon/Chatbot';
import Head from 'components/structural/Head';
import Header from 'components/structural/Header';
import Page from 'components/structural/Page';

import './style.less';

export interface LandingProps {
	// Empty
}

interface State {
	// Empty
}

@observer
class Landing extends React.Component<LandingProps, State> {
	public render() {
		return (
			<Page>
				<Head>
					<title>Home</title>
					<meta name="Description" content="Home" />
				</Head>
				<Header />
				<section className="Landing__Main">
					<section className="Top__Layout">
						<section className="Text__Wrapper">
							<h1>Chatbot</h1>
							<p>
								<span>A chatbot web app, built using React, Ant Design, FuseBox, and MobX</span>
							</p>
							<section className="Text__Wrapper__Buttons">
								<Button className="Button" type="primary">
									Ant Design
								</Button>
								<Button className="Button" type="primary">
									React
								</Button>
							</section>
						</section>
						<section className="Image__Wrapper HiddenAtMd">
							<span className="Landing__Chatbot">
								<Chatbot />
							</span>
						</section>
					</section>
				</section>
			</Page>
		);
	}
}

export default Landing;
