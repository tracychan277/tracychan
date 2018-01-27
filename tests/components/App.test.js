import React from 'react';
import {mount} from 'enzyme';
import App from '../../src/components/App';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';

describe('App', () => {
	let mountedApp;

	const app = () => {
		if (!mountedApp) {
			mountedApp = mount(<App/>);
		}
		return mountedApp;
	};

	beforeEach(() => {
		mountedApp = undefined;
	});

	it('should contain a Router component', () => {
		expect(app().find(Router).length).toBe(1);
	});

	describe('rendered Router', () => {
		const router = app().find(Router);

		it('should have a container <div>', () => {
			expect(router.find('.container').length).toBe(1);
		});

		describe('rendered container', () => {
			const container = router.find('.container');

			it('should contain a Header component', () => {
				expect(container.find(Header).length).toBe(1);
			});

			it('should contain a Switch component', () => {
				expect(container.find(Switch).length).toBe(1);
			});

			it('should contain a Footer component', () => {
				expect(container.find(Footer).length).toBe(1);
			});

			describe('rendered Switch', () => {
				const routeSwitch = container.find(Switch);

				it('should contain one route', () => {
					expect(routeSwitch.find(Route).length).toBe(1);
				});
			});
		});
	});
});
