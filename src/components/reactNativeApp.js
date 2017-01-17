import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getData } from '../actions/data.action';

class ReactNativeApp extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        getData('test');
    }

    render() {
        return (
            <View>
                <Text>{'Test'}</Text>
            </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getData: bindActionCreators(getData, dispatch)
    }
}

export default connect(store => ({
}), mapDispatchToProps)(ReactNativeApp);
