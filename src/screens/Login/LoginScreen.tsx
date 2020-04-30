import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, StyleSheet, TouchableHighlight, TextInput, Image, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { routes } from '../../routing';
import styles from './LoginScreen.styles';
import { login, profile } from '../../store/actions/auth';
import { AuthListAction, Profile } from 'src/store/types/auth';
import { ThunkDispatch } from 'redux-thunk';
import { IAppState } from 'src/store';
import { Icon } from 'react-native-elements';

type IState = {
    userName: string,
    password: string,
    token: string,
    isAuthentificated: boolean
}

type LoginProps = {
    userName: string,
    password: string,
    login: any,
    isAuthentificated: boolean
}

class LoginPage extends Component<LoginProps, IState> {

    constructor(props: LoginProps) {
        super(props)
    }

    clickLogin = () => {
        this.props.login("admin", "123456");
        Actions.push(routes.home);
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <ImageBackground source={require('./../../res/images/bg.jpg')} style={styles.imageStyle}>
                    <View style={styles.container}>
                        <View style={styles.inputContainer}>
                            <Icon name="user" type="font-awesome" iconStyle={styles.inputIcon} />
                            <TextInput style={styles.inputs}
                                placeholder="Username"
                                keyboardType="default"
                                underlineColorAndroid='transparent'
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Icon name="lock" type="font-awesome" iconStyle={styles.inputIcon} />
                            <TextInput style={styles.inputs}
                                placeholder="Password"
                                secureTextEntry={true}
                                underlineColorAndroid='transparent'
                                onChangeText={(password) => this.setState({ password })} />
                        </View>

                        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.clickLogin()}>
                            <Text style={styles.loginText}>Login</Text>
                        </TouchableHighlight>

                        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.clickLogin()}>
                            <Text>Forgot your password?</Text>
                        </TouchableHighlight>

                        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.clickLogin()}>
                            <Text>Register</Text>
                        </TouchableHighlight>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const mapStateToProps = (state: IAppState) => {
    return {
        userName: state.auth.login,
        isAuthentificated: state.auth.isAuthentificated
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<AuthListAction, Profile, any>) => {
    return {
        getProfile: () => dispatch(profile()),
        login: (userName: string, password: string) => dispatch(login(userName, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

