import React, { Fragment, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, } from 'react-native';

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { LIGHTPURPLE } from '../../Styles/colors';

const styles = StyleSheet.create({
    root: { flex: 1, margin: 20, width: 250, alignSelf: "center" },
    title: { textAlign: 'center', fontSize: 30 },
    codeInputView: {
        borderBottomColor: "#C7C7C7", borderBottomWidth: 1,
        alignItems: "center", justifyContent: "center"
    },
    cell: {
        width: 20,
        height: 40,
        lineHeight: 38,
        fontSize: 28,
        color: '#484848',

        borderRadius: 7,
        textAlign: 'center',
    },
    separator: {
        height: 2,
        width: 10,
        backgroundColor: '#000',
        position: "absolute",
        left: 28
    },
    focusCell: {
        borderRadius: 7,
    },
});

const CELL_COUNT = 6;

const CodeInput = ({ navigation }) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const checkSet = (txt) => {
        // alert(txt);
        setValue(txt);
        // alert(value.length);
        if (value.length === 5) {
            setTimeout(() => {
                navigation.navigate('Profile')
            }, 500);
        }
    }

    return (
        <SafeAreaView style={styles.root}>
            <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={checkSet}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                    <View key={index}
                        style={[styles.codeInputView, isFocused && { borderBottomColor: LIGHTPURPLE }]}>
                        <Text
                            key={`value-${index}`}
                            style={[styles.cell, isFocused && styles.focusCell]}
                            onLayout={getCellOnLayoutHandler(index)}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                        {index === 2 ? (
                            <View key={`separator-${index}`} style={styles.separator} />
                        ) : null}
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

export default CodeInput;