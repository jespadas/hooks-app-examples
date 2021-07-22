import { shallow } from 'enzyme';

import { TodoList } from "../../../components/08-useReducer/TodoList"
import { demoTodos } from "../../fixtures/demoTodos"

describe('Test on <TodoList />', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoList
            todos={demoTodos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />
    );

    test('Should be displayed correctly', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Should have two <TodoListItem />', () => {

        // Display number of TodoLisItems
        console.log(wrapper.find('TodoListItem').length);
        // Test
        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);

        // Display props in handleDelete (item from TodoListItem)
        console.log(wrapper.find('TodoListItem').at(0).prop('handleDelete'));
        // Test to match if we get any function
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
        expect(wrapper.find('TodoListItem').at(0).prop('handleToggle')).toEqual(expect.any(Function));

    });


})
