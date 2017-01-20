import React, {Component} from 'react';
import {View, Text, Image, ListView} from 'react-native';
import { getCards } from '../actions/card.action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Cards extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([])
        };
    }

    componentWillMount() {
        this.props.getCards();
    }

    componentDidMount() {
        const { cards } = this.props;
        if (cards.size) {
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            let dataSource = ds.cloneWithRows(cards.map((item) => {
                return item.get('card');
            }));
            this.setState({dataSource});
        }
    }

    render() {
        const { dataSource } = this.state;
        return (
            <ListView
                dataSource={dataSource}
                renderRow={(rowData) => <Text>{rowData}</Text>}
            />
        );
    }
}

function mapStateToProps(store) {
    return {
        cards: store.cards
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getCards: bindActionCreators(getCards, dispatch)
    }
}

Cards = connect(mapStateToProps, mapDispatchToProps)(Cards);

export default Cards;


