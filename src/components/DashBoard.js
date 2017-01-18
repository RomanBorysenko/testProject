import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class DashBoard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Text>Dash Board</Text>
            </View>
        );
    }
}

export default DashBoard;

