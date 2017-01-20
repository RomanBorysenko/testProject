import React, {Component} from 'react';
import { ToolbarAndroid, StyleSheet } from 'react-native';
import nativeImageSource from 'nativeImageSource';

const toolbarActions = [
    {title: 'Create', icon: nativeImageSource({
        android: 'ic_create_black_48dp',
        width: 96,
        height: 96
    }), show: 'always'},
    {title: 'Filter'},
    {title: 'Settings', icon: nativeImageSource({
        android: 'ic_settings_black_48dp',
        width: 96,
        height: 96
    }), show: 'always'},
];

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#e9eaed',
        height: 56,
    },
});

class ToolBar extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <ToolbarAndroid
                actions={toolbarActions}
                style={styles.toolbar}
                subtitle="There be no icon here" />);
    }
}

export default ToolBar;

