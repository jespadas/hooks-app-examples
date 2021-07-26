import React from 'react';
import { mount } from 'enzyme';

import { UserContext } from '../../../components/09-useContext/UserContext';
import { AboutScreen } from '../../../components/09-useContext/AboutScreen';


describe('Tests in <LoginScreen />', () => {

    // Creating jest function
    const handleClick = jest.fn();

    // Wrapping with mount to have acces to child
    const wrapper = mount(
        <UserContext.Provider value={{
            handleClick: handleClick
        }}>
            <AboutScreen />
        </UserContext.Provider>
    );

    test('Should be displayed correctly', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('Shoud execute handleClick', () => {

        wrapper.find('button').prop('onClick')();

        expect(handleClick).toHaveBeenCalled();

    });

});
