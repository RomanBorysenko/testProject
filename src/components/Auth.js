import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class Auth extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Image
                    style={{width: 50, height: 50}}
                    source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                />
            </View>
        );
    }
}

export default Auth;
