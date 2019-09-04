import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('App Tests', () => {

  test('Should render the application container', () => {
    const wrapper = shallow(<App />);
    const component = wrapper.find('#main-container');

    expect(component.exists()).toBe(true);
  });

 });
