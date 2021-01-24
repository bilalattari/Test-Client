import React, { Fragment, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, } from 'react-native';

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const styles = StyleSheet.create({
    root: { flex: 1, margin: 20 },
    title: { textAlign: 'center', fontSize: 30 },
    codeFieldRoot: { marginTop: 20 },
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 28,
        color: '#484848',
        borderWidth: 1,
        borderRadius : 7,
        borderColor: '#AF9CFF',
        textAlign: 'center',
    },
    separator: {
        height: 2,
        width: 10,
        backgroundColor: '#000',
        alignSelf: 'center',
    },
    focusCell: {
        borderWidth: 1,
        borderRadius : 7,
        borderColor: '#AF9CFF',
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
                    <Fragment key={index}>
                        <Text
                            key={`value-${index}`}
                            style={[styles.cell, isFocused && styles.focusCell]}
                            onLayout={getCellOnLayoutHandler(index)}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                        {index === 2 ? (
                            <View key={`separator-${index}`} style={styles.separator} />
                        ) : null}
                    </Fragment>
                )}
            />
        </SafeAreaView>
    );
};

export default CodeInput;