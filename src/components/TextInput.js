import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const TextInputComponent = ({ placeholder, label, value, setValue, errorText}) => {
    const [isFocus, setIsFocus] = useState(false);
  
    return (
      <View style={styles.container}>
        {isFocus && (
          <Text style={[styles.label, { color: 'blue' }]}>{label}</Text>
        )}
        <TextInput
          style={[styles.textInput, isFocus && { borderColor: 'blue' }]}
          placeholder={!isFocus ? placeholder : ''}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          placeholderTextColor={'black'}
          value={value}
          onChangeText={setValue}
        />
        <Text style={styles.errorText}>{errorText}</Text>
      </View>
    );
  };

export default TextInputComponent;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingLeft: 16,
        paddingRight: 16,
    },
    textInput: {
        width: '100%',
        height: 50,
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        left: 22,
        top: -10,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    errorText: {
      color: 'red'
    }
});
