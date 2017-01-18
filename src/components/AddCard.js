import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class AddCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Text>Add Card</Text>
            </View>
        );
    }
}

export default AddCard;

