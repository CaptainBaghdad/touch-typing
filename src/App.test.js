import React from 'react';
import ReactDOM from 'react-dom';
import { create } from "react-test-renderer";
import HomeComponent from "./components/HomeComponent";

import App from './App';

describe("App", () => {
  test("it should render without any errors", () => {
    const appcomponent = create(<App />);


  });


});


describe("Home Component", () => {
  test('it matches the snapshot', () => {
    const component = create(<HomeComponent text="Press the area below this is where the keyboard is"/>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
