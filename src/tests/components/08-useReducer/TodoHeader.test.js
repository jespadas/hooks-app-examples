import { shallow } from 'enzyme';

import { TodoHeader } from "../../../components/08-useReducer/TodoHeader";
import { demoTodos } from '../../fixtures/demoTodos';

describe('Test on <TodoHeader />', () => {

    const wrapper = shallow(<TodoHeader todos={demoTodos} />);

    test('Should be displayer correctly', () => {

        expect(wrapper).toMatchSnapshot();

    })


})
