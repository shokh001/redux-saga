import { Provider } from 'react-redux';
import './app.css';
import Counter from './components/counter';
import Table from './components/table';
import User from './components/user';
import store from './redux/store'


function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
        <User />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
