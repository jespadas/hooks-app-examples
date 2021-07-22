import { shallow } from 'enzyme';

import { AddForm } from "../../../components/08-useReducer/AddForm"

describe('Test on <AddForm />', () => {

    const handleAddTodo = jest.fn();

    const wrapper = shallow(
        <AddForm
            handleAddTodo={handleAddTodo}
        />);

    test('Should be displayed correctly', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Should not call handleAddTodo', () => {

        // Select to onSubmit function in form
        const formSubmit = wrapper.find('form').prop('onSubmit');
        // We pass prevenDefault arg
        formSubmit({ preventDefault() { } });
        // Test to see how many times have been called
        expect(handleAddTodo).toHaveBeenCalledTimes(0);

    });

    test('Should call handleAddTodo', () => {

        // The value we want to change
        const value = 'Learn React';
        // We simulate the change on input
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });

        // Select to onSubmit function in form
        const formSubmit = wrapper.find('form').prop('onSubmit');
        // We pass prevenDefault arg
        formSubmit({ preventDefault() { } });
        // Test to see how many times have been called
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        });
        // Test for reset function
        expect(wrapper.find('input').prop('value')).toBe('');

    });

});
