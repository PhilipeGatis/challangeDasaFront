import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

it('should render', () => {
  const app = shallow(<App />);
  expect(toJson(app)).toMatchSnapshot();
});
