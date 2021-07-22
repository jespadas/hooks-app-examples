import { shallow, mount } from 'enzyme';
import { act } from '@testing-library/react';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Test on <TodoApp />', () => {

    const wrapper = shallow(<TodoApp />);

    // Mocking localStorage
    Storage.prototype.setItem = jest.fn(() => { });

    test('Should be displayed correctly', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Should add a new todo', () => {

        const wrapper = mount(<TodoApp />);

        act(() => {
            wrapper.find('AddForm').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('AddForm').prop('handleAddTodo')(demoTodos[1]);
        });

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp ( 2 )');

        expect(localStorage.setItem).toHaveBeenCalledTimes(2);

    });

    test('Should delete a todo', () => {

        wrapper.find('AddForm').prop('handleAddTodo')(demoTodos[0]);
        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp ( 0 )');

    });

});