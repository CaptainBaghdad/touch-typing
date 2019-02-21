import React from 'react';
import ReactDOM from 'react-dom';
import { create } from "react-test-renderer";
import HomeComponent from "./components/Home.Component";

import App from './App';

describe("Home Component", () => {
  test('it matches the snapshot', () => {
    const component = create(<HomeComponent />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
