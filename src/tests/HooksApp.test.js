import React from 'react';
import { HooksApp } from '../HooksApp';
import { shallow } from 'enzyme';

describe('Test on <HookApp />', () => {

    let wrapper = shallow(<HooksApp />);

    test('Must show <HookApp /> properly', () => {

        expect(wrapper).toMatchSnapshot();

    });

})