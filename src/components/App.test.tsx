import React from 'react'
import Enzyme, { shallow } from 'enzyme'

import App from './App'

describe('App', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App />);

        expect(wrapper).toBeTruthy();
    })
})