import { Provider } from "react-redux";
import store from "./store";
import Dashboard from './index';

const Container=(props:any)=>{
    return <>
     <Provider store={store}>
         <Dashboard {...props}  />
     </Provider>
    </>
}
export default Container;