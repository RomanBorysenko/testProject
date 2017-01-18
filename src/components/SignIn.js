import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    Button,
    StyleSheet,
    TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  { getAuth } from '../actions/auth.action';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        };
    }

    componentDidMount() {
        const { navigator, router } = this.props;
        console.log(router);
    }

    componentWillReceiveProps(nextProps) {
        const { navigator } = this.props;
        const { router } = nextProps;
        console.log(navigator);
        if (router !== this.props.router) {
            console.log(router);
            console.log(this.props.router);

            this._navigate();
        }
    }

    _navigate = (route) => {
        const { navigator } = this.props;
        console.log('yo yo');
        navigator.push({
            name: 'registration', // Matches route.name
        })
    }

    login = () => {
        const { login, password } = this.state;
        this.props.getAuth(login, password);
    };

    render() {
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
                marginBottom: 15
            }
        });

        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    onChangeText={(login) => this.setState({login: login})}
                    placeholder="Phone number"
                    value={this.state.login}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(pass) => this.setState({password: pass})}
                    placeholder="Password"
                    value={this.state.password}
                />
                <Button
                    onPress={this.login}
                    title="Sign in"
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
        getAuth: bindActionCreators(getAuth, dispatch)
    }
}

SignIn = connect(mapStateToProps, mapDispatchToProps)(SignIn);

export default SignIn;



