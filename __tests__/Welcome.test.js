/**
 * Created by Adrien on 02/07/2017.
 */
import { shallow } from 'enzyme'
import React from 'react'

import Welcome from '../components/Welcome';

describe('<Welcome />', () => {

    it('shows "Bienvenue !" as title', () => {
        const wrapper = shallow(<Welcome title="Welcome !" msg="My Message"/>);
        expect(wrapper.find('h1').text()).toEqual('Welcome !')
    })

    it('shows "My Message" as msg', () => {
        const wrapper = shallow(<Welcome title="Welcome !" msg="My Message"/>);
        expect(wrapper.find('p').text()).toEqual('My Message')
    })

    it('contains one tag "<h1>"', () => {
        const wrapper = shallow(<Welcome title="Welcome !" msg="My Message"/>);
        expect(wrapper.find('h1').length).toBe(1);
    })

    it('contains one tag "<p>"', () => {
        const wrapper = shallow(<Welcome title="Welcome !" msg="My Message"/>);
        expect(wrapper.find('p').length).toBe(1);
    })
})