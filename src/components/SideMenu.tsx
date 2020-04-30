import React from "react";
import { SafeAreaView, Text, View, Switch, StyleSheet } from "react-native";
import { IAppState } from 'src/store';
import { connect } from "react-redux";
import { logout } from '../store/actions/auth';
import { ThunkDispatch } from "redux-thunk";
import { LogoutListAction } from 'src/store/types/auth';
import { Actions } from "react-native-router-flux";
import { routes } from './../routing';
import { Button } from "react-native-elements";

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "#fff"
  },
  container: {
    margin: 12,
    flex: 1
  },
  title: {
    marginTop: 15,
    marginBottom: 10,
    color: "#444",
    fontSize: 14
  },
  swithBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  switchText: {
    fontSize: 14,
    color: "#222"
  },
  link: {
    padding: 5,
    color: "#892853"
  },
  description: {
    fontSize: 13,
    color: "#555",
    marginTop: 12,
    marginBottom: 6
  }
});

type IState = {

}

type SideMenuProps = {
  callParentScreenFunction: any,
  logout: any
}

class SideMenu extends React.Component<SideMenuProps, IState> {
  state = {
    toggle_option_one: false
  };

  constructor(props: SideMenuProps) {
    super(props)   
  }

  clickLogout = () => {    
    this.props.logout();
    this.callParentScreenFunction();
    Actions.push(routes.login);
  }


  callParentScreenFunction = () => this.props.callParentScreenFunction();

  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>          
          <View>
            <View style={styles.swithBlock}>
              <Button onPress={this.clickLogout} type="clear" title="Logout" />              
            </View>            
          </View>
        </View>        
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: IAppState) => {
  return {
    isAuthentificated: state.auth.isAuthentificated
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<LogoutListAction, null, any>) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);

interface IProps {
  text: string;
}
const Title = ({ text }: IProps) => {
  return <Text style={styles.title}>{text}</Text>;
};

const SwitchText = ({ text }: IProps) => {
  return <Text style={styles.switchText}>{text}</Text>;
};

const Description = ({ text }: IProps) => {
  return <Text style={styles.description}>{text}</Text>;
};

