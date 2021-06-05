import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    Button,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({ children, title }) => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}>
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}>
                {children}
            </Text>
        </View>
    );
};

const Login = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        height: 100,
    };

    const [cred, setCred] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');

    const getAuth = () => { };

    const handleChange = event => {
        setCred({
            ...cred,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = () => {
        console.log("Welcome")
    };

    return (
        <SafeAreaView>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <ScrollView contentInsetAdjustmentBehavior="automatic" style>
                <View
                    style={{
                        display: 'flex',
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <TextInput
                        placeholder={'Email'}
                        name={'email'}
                        type={'email'}
                        style={{
                            backgroundColor: 'wheat',
                            color: 'black',
                            padding: 10,
                            width: 350,
                            borderRadius: 5,
                            marginTop: 10,
                        }}
                        onChangeText={text => setEmail(text)}
                    />
                    <Text style={{ color: 'black' }}>
                        {email} {password} {login}
                    </Text>

                    <TextInput
                        placeholder={'Name'}
                        name={'password'}
                        style={{
                            backgroundColor: 'wheat',
                            color: 'black',
                            padding: 10,
                            width: 350,
                            borderRadius: 5,
                            marginTop: 10,
                        }}
                        onChangeText={text => setPassword(text)}
                    />
                    <View style={{ padding: 10 }}>
                        <Button
                            title={'SUBMIT'}
                            marginTop={5}
                            padding={10}
                            color={'orange'}
                            onPress={() => {
                                navigation.navigate('Recipe');
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default Login;
