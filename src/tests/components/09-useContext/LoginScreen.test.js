import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Tests in <LoginScreen />', () => {

    // Expected data
    const user = {
        id: 123,
        name: "Goku",
    };

    // Creating jest function
    const setUser = jest.fn();

    // Wrapping with mount to have acces to child
    const wrapper = mount(
        <UserContext.Provider value={{
            setUser: setUser
        }}>
            <LoginScreen />
        </UserContext.Provider>
    );

    test('Should be displayed correctly', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('Shoud execute setUser with same argument', () => {

        wrapper.find('button').prop('onClick')();

        expect(setUser).toHaveBeenCalledWith(user);

    });

});
