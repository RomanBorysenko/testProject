import React, {Component} from 'react';
import { Provider } from 'react-redux';
import ReactNativeApp from '../components/reactNativeApp';
import configureStore from '../store/configureStore';
import { defaultInitState } from '../store/initState';

const store = configureStore(defaultInitState);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ReactNativeApp />
            </Provider>
        );
    }
}
