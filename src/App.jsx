import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {add, remove} from "./redux/reducers/dataReducer/dataReducer";

function App() {
  const dispatch = useDispatch()
  const dataList = useSelector((state) => state.data.dataList)

  return (
    <div className="App">
      <p>redux state : {`${dataList}`} </p>
      <button onClick={()=> dispatch(add())}>add</button>
      <button onClick={()=> dispatch(remove())}>remove</button>
    </div>
  )
}

export default App
