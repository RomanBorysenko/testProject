import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    Image,
    TextInput,
    DatePickerAndroid,
    StyleSheet,
    Switch,
    TouchableWithoutFeedback
} from 'react-native';

class SideBar extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }



    _navigate = (router) => {
        this.props.navigator.push({
            name: router.get('router') // Matches route.name
        })
    };

    render() {
        return (
                <Text >'Sidebar'</Text>
        );
    }
}

export default SideBar;
