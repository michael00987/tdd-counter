import React from 'react';
// import {render} from '@testing-library/react';
import App from './App';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Counter Testing', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('render the title of counter', () => {
    expect(wrapper.find('h1').text()).toContain('This is counter app');

    // const {getByText} = render(<App />);
    // const linkElement = getByText('This is counter app');
    // expect(linkElement).toBeInTheDocument();
  });

  test('render a button with text of `increment`', () => {
    expect(wrapper.find('#increment-btn').text()).toBe('increment');
  });

  test('render the initial value of state in a div`', () => {
    expect(+wrapper.find('#counter-value').text()).toBe(0);
  });
});
