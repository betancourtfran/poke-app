import React from 'react';
import { shallow } from 'enzyme';
import { SearchBar, SearchResults, Footer } from './components';
import App from './App';

describe('App Rendering Tests', () => {
  it('should contain expected components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(SearchBar)).toHaveLength(1);
    expect(wrapper.find(SearchResults)).toHaveLength(1);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});
