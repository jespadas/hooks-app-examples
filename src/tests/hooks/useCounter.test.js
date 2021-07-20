import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Test on useCounter', () => {

    test('should return default values', () => {

        const { result } = renderHook(() => useCounter());

        expect(result.current.counter).toBe(0);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');

    });


    test('should have counter set on 0', () => {

        const { result } = renderHook(() => useCounter(0));

        expect(result.current.counter).toBe(0);

    });

    test('should increment counter by 1', () => {

        const { result } = renderHook(() => useCounter(0));
        const { increment } = result.current;

        // act works to use functions as actions, we must involve functions in act(func)
        act(() => {
            increment();
        });

        const { counter } = result.current;

        expect(counter).toBe(1);

    });

    test('should decrement counter by 1', () => {

        const { result } = renderHook(() => useCounter(0));
        const { decrement } = result.current;

        // act works to use functions as actions, we must involve functions in act(func)
        act(() => {
            decrement();
        });

        const { counter } = result.current;

        expect(counter).toBe(-1);

    });

    test('should reset counter', () => {

        const { result } = renderHook(() => useCounter(0));
        const { decrement, reset } = result.current;

        // act works to use functions as actions, we must involve functions in act(func)
        act(() => {
            decrement();
            reset();
        });

        const { counter } = result.current;

        expect(counter).toBe(0);

    });


});
