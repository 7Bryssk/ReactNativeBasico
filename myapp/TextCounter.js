import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

class TextCounter extends Component {

    static defaultProps = {
        limit: 20
    }

    state = {
        text: ''
    }

    handleChange = (text) => {
        if (text.length <= this.props.limit)
            this.setState({ text });
    }

    render() {
        const { state, props } = this;

        return (
            <View>
                <TextInput
                    style={styles.textInput}
                    multiline={true}
                    numberOfLines={5}
                    value={state.text}
                    onChangeText={this.handleChange}
                />
                <Text>
                    Total: {state.text.length}/{props.limit}
                </Text>
            </View>
        );
    }
}


export default TextCounter;

const styles = StyleSheet.create({
    textInput: {
        borderColor: 'gray',
        borderWidth: 1
    },
});