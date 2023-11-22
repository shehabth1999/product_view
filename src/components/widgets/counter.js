
import { useDispatch, useSelector } from 'react-redux';
import {increaseCounter,decreaseCounter,} from '../store/slices/counter'

export default function ProductQuantitySelector({inStock}) {
    
    const counter = useSelector(state=>state.counter.counter_val);
    const dispatch = useDispatch();


  return (
    <div className='my-2'>
        <button className='btn btn-danger' onClick={()=>dispatch(decreaseCounter(inStock))}>-1</button>
        <span className='mx-3'>{counter}</span>
        <button className='btn btn-success' onClick={()=>dispatch(increaseCounter(inStock))}>+1</button>
    </div>
  )
}
