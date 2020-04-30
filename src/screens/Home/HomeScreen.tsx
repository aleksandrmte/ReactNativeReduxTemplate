import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Button, ScrollView, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { ListItem, Avatar, Icon } from 'react-native-elements';
import SideMenu from '../../components/SideMenu';
import Modal from "react-native-modal";
import styles from './HomeScreen.styles';

type IState = {
    open: boolean
}

type HomeProps = {
    open: boolean
}

const list = [
    {
        title: 'Menu 1',
        icon: 'user'
    },
    {
        title: 'Menu 2',
        icon: 'calendar'
    },
    {
        title: 'Menu 3',
        icon: 'group'
    },
    {
        title: 'Menu 4',
        icon: 'bar-chart'
    },
    {
        title: 'Menu 5',
        icon: 'apple'
    },
    {
        title: 'Menu 6',
        icon: 'book'
    },
    {
        title: 'Menu 7',
        icon: 'envelope'
    },
    {
        title: 'Menu 8',
        icon: 'star'
    }
]

export default class Home extends Component<HomeProps, IState> {
    state = { open: false };

    constructor(props: HomeProps) {
        super(props)
    }

    static onEnter = () => {
        Actions.refresh({
            title: 'Home'
        });
    };

    toggleSideMenu = () => this.setState({ open: !this.state.open });

    callParentScreenFunction = () => {
        // If needed, can be  called
        // when pressed in the SideMenu
        this.toggleSideMenu();
    };

    render() {
        return (
            <View>
                <View style={styles.hamburgerStyle}>
                    <Icon onPress={this.toggleSideMenu} name={'menu'} size={40} color="#F46F22" />
                </View>
                <ScrollView>
                    <ImageBackground source={require('./../../res/images/bg.jpg')} style={styles.imageStyle}>
                        <View>

                            <View style={styles.avatarWrapper}>
                                <Avatar
                                    size="large"
                                    containerStyle={styles.avatarStyle}
                                    rounded
                                    showEditButton
                                    source={require('./../../res/images/unnamed.png')}
                                />
                                <Text style={styles.nameStyle}>Jhon</Text>
                                <Text style={styles.nameStyle}>Doe</Text>
                            </View>
                        </View>
                    </ImageBackground>
                    {
                        list.map((item, i) => (
                            <ListItem
                                key={i}
                                title={item.title}
                                titleStyle={styles.listItemTitle}
                                leftIcon={{ name: item.icon, type: 'font-awesome', size: 18 }}
                                bottomDivider
                                chevron={{ 'size': 22 }}
                            />
                        ))
                    }
                </ScrollView>
                <Modal
                    isVisible={this.state.open}
                    onBackdropPress={this.toggleSideMenu} // Android back press
                    onSwipeComplete={this.toggleSideMenu} // Swipe to discard
                    animationIn="slideInLeft" // Has others, we want slide in from the left
                    animationOut="slideOutLeft" // When discarding the drawer
                    swipeDirection="left" // Discard the drawer with swipe to left
                    useNativeDriver // Faster animation
                    hideModalContentWhileAnimating // Better performance, try with/without
                    propagateSwipe // Allows swipe events to propagate to children components (eg a ScrollView inside a modal)
                    style={styles.sideMenuStyle} // Needs to contain the width, 75% of screen width in our case
                >
                    <SideMenu callParentScreenFunction={this.callParentScreenFunction} />
                </Modal>
            </View>
        )
    }
}

