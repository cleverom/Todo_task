import Todo from './index'
import { Provider } from 'react-redux'
import store from './store'

function MyApp() {
  return(

  <Provider store={store}>
     <Todo />
  </Provider>
  )
  
}

export default MyApp
