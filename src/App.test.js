import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

it('renders App with className app', () => {
  const shallowApp = shallow(<App />);

  // expect(shallowApp.find(App).hasClass('app'))
});

it('initial state starts with an empty array', () => {
});

it('having 2 thoughts in state should mean there are two thoughtCards', () => {
});

it('user can add a new thought which adds it to state and is also displayed on the screen', () => {
});
