"use client"
import { counterAction } from "@/redux/slice/counterSlice";
import { useDispatch } from "react-redux";
import { useSelector} from "react-redux";
import { RootState } from "@/redux/store/store";
const Counter = () => {
  const dispatch = useDispatch()
    const coutnerVal = useSelector((state:RootState)=>state.counterSlice.value)

    const Increment = () => {
     dispatch(counterAction.increment())
    }
    const Decrement = () => {
      dispatch(counterAction.decrement())
    }
  return (
    <section>
         <div className='flex gap-6 py-6'>
        <button className='py-2 px-3 rounded-md bg-green-600' onClick={Increment}>Increment</button>
        <div className=''>Counter {coutnerVal}</div>
        <button className='py-2 px-3 rounded-md bg-red-400'onClick={Decrement}>Decrement</button>
      </div>
    </section>
  )
}

export default Counter