import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../slices/counterSlice'


const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-200 my-2">
        { count }
      </h1>
      <button onClick={() => dispatch(increment())} className="items-center m-2 text-center px-7 py-1 shadow-lg text-base font-medium text-white transition ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 dark:hover:bg-indigo-700 focus:outline-none">count +</button>
      <button onClick={() => dispatch(decrement())} className="items-center m-2 text-center px-7 py-1 shadow-lg text-base font-medium text-white transition ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 dark:hover:bg-indigo-700 focus:outline-none">count -</button>
    </>
  )
}

export default Counter