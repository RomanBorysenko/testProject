import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    Button,
    StyleSheet,
    Platform
} from 'react-native';

class DashBoard extends Component {
    constructor(props) {
        super(props);
    }

    _navigate = (router) => {
        this.props.navigator.push({
            name: router // Matches route.name
        })
    };

    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'transparent'
            },
            button: {
                margin: 20
            }
        });

        return (
                <View sstyle={styles.container}>
                    <Button
                        style={styles.button}
                        onPress={()=>this._navigate('addCard')}
                        title="Add Card"
                    />
                    <Button
                        onPress={()=>this._navigate('myCards')}
                        title="My Cards"
                    />
                    <Button
                        onPress={()=>this._navigate('sendMoney')}
                        title="Send Money"
                    />
                </View>

        );
    }
}

export default DashBoard;
