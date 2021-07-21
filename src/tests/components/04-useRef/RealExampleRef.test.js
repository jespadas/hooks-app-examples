import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';


describe('Test in <RealExampleRef />', () => {

    const wrapper = shallow(<RealExampleRef />);

    test('Should be displayed correctly', () => {

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);

    });

    test('Should show component <MultipleCustomHooks />', () => {

        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);

    })


})
