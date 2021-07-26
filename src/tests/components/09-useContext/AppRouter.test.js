import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Test in <AppRouter />', () => {

    const user = {
        id: 1,
        name: "Julio"
    }

    const wrapper = mount(
        <UserContext.Provider value={{
            user: user
        }}>
            <AppRouter />;
        </UserContext.Provider>
    );

    test('Should be displayed correctly', () => {

        expect(wrapper).toMatchSnapshot();

    })


})
