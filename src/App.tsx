import { Provider } from "react-redux";

import "./App.css";
import { rootStore } from "./store";
import ItemsView from "./views/Items.view";

function App() {
  return (
    <Provider store={rootStore}>
      <div className="App">
        <ItemsView />
      </div>
    </Provider>
  );
}

export default App;
