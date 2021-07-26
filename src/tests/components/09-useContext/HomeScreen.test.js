import React from 'react';
import { mount } from 'enzyme';

import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Test on <HomeScreen />', () => {

    const user = {
        name: "Julio",
        email: "contact@julioespadas.com"
    };

    /*  Mount is a method that re - mounts the component, 
        if it is not currently mounted.This can be
        used to simulate a component going through
        an unmount / mount lifecycle. 
    */

    const wrapper = mount(
        <UserContext.Provider value={{
            user: user
        }}>
            <HomeScreen />
        </UserContext.Provider>
    );

    test('Should be displayed correctly', () => {

        expect(wrapper).toMatchSnapshot();

    })


})
