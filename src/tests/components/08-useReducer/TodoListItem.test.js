import { shallow } from 'enzyme';
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from '../../fixtures/demoTodos';

describe('Test in <TodoListItem />', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(<TodoListItem
        todo={demoTodos[0]}
        index={0}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
    />);

    test('Should be displayed correctly', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Should call handleDelete function', () => {

        wrapper.find('button').simulate('click');

        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);

    });

    test('Should call handleToggle function', () => {

        wrapper.find('p').simulate('click');

        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);

    });

    test('Should display text correctly', () => {

        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(`1 : ${ demoTodos[0].desc }`);

    });

    test('Should have complete class if todo.done = true', () => {

        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(<TodoListItem
            todo={todo}
        />);

        expect(wrapper.find('p').hasClass('complete')).toBe(true);

    });

})
