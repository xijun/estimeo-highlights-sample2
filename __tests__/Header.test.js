/**
 * Created by Adrien on 02/07/2017.
 */
import { shallow } from 'enzyme'
import React from 'react'

import Header from '../components/Header';

describe('<Header />', () => {
    it('has "Estimeo Highlights" as title', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('title').text()).toBe('Estimeo Highlights')
    })

    it('has "Estimeo Highlights" as title', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('title').text()).toBe('Estimeo Highlights')
    })

    it('has font roboto registered', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.contains(<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />)).toBe(true)
    })

    it('has custom css registered', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.contains(<link rel="stylesheet" href="/static/css/estimeo-style.css"/>)).toBe(true)
    })

    it('has style tag', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('style').length).toBe(1)
    })
})