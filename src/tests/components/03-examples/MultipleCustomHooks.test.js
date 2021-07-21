import React from 'react';
import { shallow } from 'enzyme';

import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
//import { useCounter } from '../../../hooks/useCounter';
jest.mock('../../../hooks/useFetch');
//jest.mock('../../../hooks/useCounter');

describe('Tests in <MultipleCustomHooks />', () => {

    // Must find why is no passing test on desestructuring this hook
    /*     useCounter.mockReturnValue([{
            counter: 1,
            increment: () => { }
        }]); */

    test('Should be displayed correctly', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper).toMatchSnapshot();

    });

    test('Should display correct info', () => {

        useFetch.mockReturnValue({
            data: [{
                author: "Julio",
                quote: "I'm always happy"
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe("I'm always happy");
        expect(wrapper.find('footer').text().trim()).toBe("Julio");

    })


})
