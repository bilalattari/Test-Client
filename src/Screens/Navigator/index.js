import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators, TransitionSpecs } from '@react-navigation/stack';
import React from 'react';
import { SignInWithEmail, SignInWithNumber, Profile, SignInWithNumberEnterCode } from '..';

const Stack = createStackNavigator();

const MyTransition = {
    gestureDirection: 'vertical',
    transitionSpec: {
        open: TransitionSpecs.TransitionIOSSpec,
        close: TransitionSpecs.TransitionIOSSpec,
    },
    headerStyleInterpolator: HeaderStyleInterpolators.forFade,
    cardStyleInterpolator: ({ current, next, layouts }) => {
        return {
            cardStyle: {
                transform: [
                    {
                        translateX: current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.width, 0],
                        }),
                    },
                ],
            },
            overlayStyle: {
                opacity: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0.5],
                }),
            },
        };
    },
};

const App = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignInWithNumber" headerMode={'none'}>
                <Stack.Screen name="SignInWithEmail" component={SignInWithEmail} options={MyTransition} />
                <Stack.Screen name="SignInWithNumber" component={SignInWithNumber} options={MyTransition} />
                <Stack.Screen name="SignInWithNumberEnterCode" component={SignInWithNumberEnterCode} options={MyTransition} />
                <Stack.Screen name="Profile" component={Profile} options={MyTransition} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
