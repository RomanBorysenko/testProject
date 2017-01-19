import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    Image,
    TextInput,
    DatePickerAndroid,
    StyleSheet,
    Switch
} from 'react-native';
import CheckBox from 'react-native-checkbox';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveUser } from '../actions/auth.action';

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            presetDate: new Date(2020, 4, 5),
            allDate: new Date(2020, 4, 5),
            date: '',
            isChecked: false,
            firstName: '',
            lastName: '',
            email: '',
            emailError: false
        };
    }

    componentWillReceiveProps(nextProps) {
        const { router } = nextProps;
        if (router !== this.props.router) {
            this._navigate(router);
        }
    }

    _navigate = (router) => {
        this.props.navigator.push({
            name: router.get('router') // Matches route.name
        })
    };

    showPicker = async (stateKey, options) => {
        try {
            const {action, year, month, day} = await DatePickerAndroid.open(options);
            if (action !== DatePickerAndroid.dismissedAction) {
                const date = new Date(year, month, day);
                this.setState({date: date.toLocaleDateString()});
            }
        } catch ({code, message}) {
            console.log(`Error in example '${stateKey}': `, message);
        }
    };

    handlePressCheckedBox = () => {
        this.setState({isChecked: !this.state.isChecked})
    };

    saveUser = () => {
        const { date, isChecked, firstName, lastName, email } = this.state;
        if (email.indexOf('@') != -1) {
            this.setState({emailError: false});
            isChecked && isChecked && firstName ?
                this.props.saveUser({
                    date,
                    firstName,
                    lastName,
                    email
                }) : ''
        } else {
            this.setState({emailError: true});
        }
    };

    render() {
        const { isChecked, emailError, firstName, lastName } = this.state;
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'transparent',
            },
            input: {
                height: 40,
                width: 200,
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 10,
                marginBottom: 15,
                textAlign: 'center'
            },
            dateInput: {
                height: 40,
                width: 100,
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 10,
                marginBottom: 15,
                textAlign: 'center'
            },
            topText: {
                fontSize: 18,
                color: 'gray'
            },
            errorText: {
                color: 'red'
            }
        });


        return (
            <View style={styles.container}>
                <Text style={styles.topText}>{'Date'}</Text>
                <TextInput
                    style={styles.dateInput}
                    placeholder="enter date"
                    onFocus={this.showPicker}
                    value={this.state.date}
                />
                <Text style={styles.topText}>{'First name'}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(firstName) => this.setState({firstName: firstName})}
                    placeholder="enter name"
                    value={firstName}
                />
                <Text style={styles.topText}>{'Last name'}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(lastName) => this.setState({lastName: lastName})}
                    placeholder="enter last name"
                    value={lastName}
                />
                {emailError ? <Text style={styles.errorText}>{'Please enter a valid email…'}</Text> : null}
                <TextInput
                    keyboardType="email-address"
                    style={styles.input}
                    onChangeText={(email) => this.setState({email: email})}
                    placeholder="enter email-address"
                    value={this.state.email}
                />
                <CheckBox
                    label="I agree"
                    size={30}
                    checked={isChecked}
                    onChange={this.handlePressCheckedBox}
                />
                <Button
                    onPress={this.saveUser}
                    title="Save"
                    style={styles.button}
                />
            </View>
        );
    }
}


function mapStateToProps(store) {
    return {
        router: store.router
    };
}

function mapDispatchToProps(dispatch) {
    return {
        saveUser: bindActionCreators(saveUser, dispatch)
    }
}

Auth = connect(mapStateToProps, mapDispatchToProps)(Auth);

export default Auth;
