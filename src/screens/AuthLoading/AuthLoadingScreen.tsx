import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { ThunkDispatch } from 'redux-thunk';
import { AuthListAction, Profile } from 'src/store/types/auth';
import { IAppState } from 'src/store';
import { profile } from '../../store/actions/auth';
import { routes } from '../../routing';
import styles from './AuthLoadingScreen.styles';

type IState = {
    isAuthentificated: boolean    
}

type AuthLoadingProps = {
    isAuthentificated: boolean
}

const getInitialIsAuth = (props: AuthLoadingProps) => props.isAuthentificated;

class AuthLoadingPage extends Component<AuthLoadingProps, IState> {
    state = { isAuthentificated: getInitialIsAuth(this.props) };

    constructor(props: AuthLoadingProps) {
        super(props);        
    }

    componentDidMount() {
        let self = this;        
        setTimeout(function () {
            Actions.replace(self.state.isAuthentificated ? routes.home : routes.login);
        }, 0);        
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Loading...</Text>                
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
        getProfile: () => dispatch(profile())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingPage);

