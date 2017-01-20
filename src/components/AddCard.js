import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    Button,
    StyleSheet,
    TextInput,
    Picker,
    DatePickerAndroid,
    IExplorerBlock,
    TouchableWithoutFeedback
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  { addCard } from '../actions/card.action';

class AddCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNumber: '0',
            cardType: 'type1',
            expMonth: 1,
            expYear: '2017',
            cvv: '',
            cardHolder: ''
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

    add = () => {
        const {
            cardNumber,
            cardType,
            expMonth,
            expYear,
            cvv,
            cardHolder
        } = this.state;

        this.props.addCard({
            cardNumber,
            cardType,
            expMonth,
            expYear,
            cvv,
            cardHolder
        });
    };

    showPicker = async (stateKey, options) => {
        try {
            const {action, year} = await DatePickerAndroid.open(options);
            if (action !== DatePickerAndroid.dismissedAction) {
                this.setState({expYear: year.toString()});
            }
        } catch ({code, message}) {
            console.log(`Error in example '${stateKey}': `, message);
        }
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
            },
            topText: {
                fontSize: 28,
                color: 'black',
                marginBottom: 20
            },
            picker: {
                width: 80,
                height: 30,
                alignItems: 'center'
            }
        });

        const month = ['1','2','3','4','5','6','7','8','9','10','11','12'];

        return (
            <View style={styles.container}>
                <Text style={styles.topText}>Add Card</Text>
                <Text>Card type</Text>
                <View style={{borderColor: 'gray', borderWidth: 1, borderRadius:10, marginBottom: 10}}><Picker
                    selectedValue={this.state.cardType}
                    onValueChange={(cardType) => this.setState({cardType: cardType})}
                    style={[styles.picker, {backgroundColor: 'transparent'}]}
                    mode="dropdown">
                    <Picker.Item label="Type 1" value="type1" />
                    <Picker.Item label="Type 2" value="type2" />
                    <Picker.Item label="Type 3" value="type3" />
                </Picker></View>

                <Text>Expiration Data:</Text>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <View style={{borderColor: 'gray', borderWidth: 1, borderRadius:10, marginRight:5}}>
                        <Picker
                            selectedValue={this.state.expMonth}
                            onValueChange={(expMonth) => this.setState({cardType: expMonth})}
                            style={[styles.picker, {backgroundColor: 'transparent'}]}
                            mode="dropdown">
                            {month.map((item, i)=>{
                                return <Picker.Item
                                    label={item}
                                    value={i}
                                    key={i}
                                />
                            })}
                        </Picker>
                    </View>
                    <View style={{borderColor: 'gray', borderWidth: 1, borderRadius:10, marginRight:5}}>
                        <TouchableWithoutFeedback
                            onPress={this.showPicker}>
                            <View>
                                <Text style={{marginTop:5}}>{this.state.expYear}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
                <Text>Card number</Text>
                <TextInput
                    style={styles.input}
                    maxLength={16}
                    keyboardType="numeric"
                    onChangeText={(cardNumber) => this.setState({cardNumber: cardNumber})}
                    placeholder="Card number"
                    value={this.state.cardNumber}
                />
                <TextInput
                    style={styles.input}
                    maxLength={3}
                    keyboardType="numeric"
                    onChangeText={(cvv) => this.setState({cardNumber: cvv})}
                    placeholder="CVV"
                    value={this.state.cvv}
                />
                <TextInput
                    style={styles.input}
                    maxLength={10}
                    keyboardType="numeric"
                    onChangeText={(cardHolder) => this.setState({cardHolder: cardHolder})}
                    placeholder="Card holder"
                    value={this.state.cardHolder}
                />
                <Button
                    onPress={this.add}
                    title="Add"
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
        addCard: bindActionCreators(addCard, dispatch)
    }
}

AddCard = connect(mapStateToProps, mapDispatchToProps)(AddCard);

export default AddCard;





