export const todoReducer = (state = [], action) => {

    /*
        The useReducer hook is used for complex state manipulations and state transitions.
        This hook function returns an array with 2 values. The first one is the state value, 
        and the second value is the dispatch function which is further used to trigger an 
        action with the help of array destructuring.
    */

    switch (action.type) {
        case 'add':
            return [...state, action.payload];

        case 'delete':
            return state.filter(todo => todo.id !== action.payload);

        case 'toggle':
            return state.map(todo =>
                (todo.id === action.payload)
                    ? { ...todo, done: !todo.done }
                    : todo
            );

        default:
            return state;
    }

}
