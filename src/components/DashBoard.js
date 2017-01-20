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
                alignItems: 'center',
                backgroundColor: 'transparent'
            },
            bottom: {
                margin: 20
            }
        });

        return (
                <View style={styles.container}>
                    <View style={styles.bottom}>
                        <Button
                            onPress={()=>this._navigate('addCard')}
                            title="Add Card"
                        />
                    </View>
                    <View style={styles.bottom}>
                        <Button
                            onPress={()=>this._navigate('myCards')}
                            title="My Cards"
                        />
                    </View>
                    <View style={styles.bottom}>
                        <Button
                            onPress={()=>this._navigate('sendMoney')}
                            title="Send Money"
                        />
                    </View>
                </View>

        );
    }
}

export default DashBoard;
