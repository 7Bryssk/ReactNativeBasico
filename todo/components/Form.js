import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';

class Form extends Component {

    static defaultProps = {
        onAdd: () => { }
    }

    state = {
        text: ''
    }

    handleChange = (text) => {
        this.setState({ text });
    }

    add = () => {
        const { state } = this;
        if (state.text) {
            this.props.onAdd(state.text)
            this.handleChange('');
        }
    }

    render() {

        const { state } = this;

        return (
            <View style={{ flexDirection: 'row', margin: 5 }}>
                <TextInput
                    style={{ flex: 1, borderColor: 'gray', borderWidth: 1, marginRight: 5 }}
                    value={state.text}
                    onChangeText={this.handleChange}
                />
                <Button
                    style={{ width: 100 }}
                    title="+"
                    color="#0062ac"
                    onPress={this.add}
                />
            </View>
        );
    }
}

export default Form;