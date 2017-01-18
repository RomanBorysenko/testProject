import React, {Component} from 'react';
import {View, Navigator} from 'react-native';
import Auth from '../components/Auth';
import SignIn from '../components/SignIn';

class ReactNativeApp extends Component {
    constructor(props) {
        super(props);
    }

    renderScene = (route, navigator) => {
        if(route.name == 'signIn') {
            return <SignIn navigator={navigator} />
        }
        if(route.name == 'registration') {
            return <Auth navigator={navigator} />
        }
        if(route.name == 'dashBoard') {
            return <DashBoard navigator={navigator} />
        }
    };

    render() {
        return (
            <Navigator
                style={{ flex:1 }}
                initialRoute={{ name: 'signIn' }}
                renderScene={ this.renderScene } />
        )
    }
}

export default ReactNativeApp;
