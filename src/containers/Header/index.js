import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { routes } from '../../containers/Router';

const HeadersWrapper = styled.div`
 background-color: #2D8848;
 height: 58px;
 display: flex;
 align-items: center;
 justify-content: space-between;
`

const TitleDashBoard = styled.h2`
  margin: 0 0 0 26px;
  color: #FFFFFF;
`

const ButtonGroup = styled.div`
  display: flex;
  height: 100%;
`

const ButtonMenu = styled.div`
  color: #FFFFFF;
  background-color: ${
  props => props.background
  };
  width: 166px;
  height: 100%;
`
const TextButtonMenu = styled.p`
  text-align: center;
`

// const buttonMenu = () => {
//   return <ButtonMenu><TextButtonMenu>SOBRE</TextButtonMenu></ButtonMenu>
// }

function Headers(props) {
  console.log(props.username)
  // const [menuStatus, setMenuStatus] = useState({
  //   dashBoard: false,
  //   exit: false,
  //   about: false,
  //   login: false,
  // })
  console.log(props.menuStatus)
  return (
    <HeadersWrapper>
      <TitleDashBoard>MY FRONTEND TEST</TitleDashBoard>
      {props.username ?
        <ButtonGroup>
          <ButtonMenu background={props.menuStatus.dashboard?"#19612E":"transparent"} ><TextButtonMenu>DASHBOARD</TextButtonMenu></ButtonMenu>
          <ButtonMenu background={props.menuStatus.exit?"#19612E":"transparent"} onClick={props.goToHome}><TextButtonMenu>SAIR</TextButtonMenu></ButtonMenu>
        </ButtonGroup> :
        <ButtonGroup>
          <ButtonMenu background={props.menuStatus.about?"#19612E":"transparent"} ><TextButtonMenu>SOBRE</TextButtonMenu></ButtonMenu>
          <ButtonMenu background={props.menuStatus.login?"#19612E":"transparent"} ><TextButtonMenu>LOGIN</TextButtonMenu></ButtonMenu>
        </ButtonGroup>
      }
    </HeadersWrapper>
  );
}

const mapStateToProps = state => {
  return {
    username: state.loginData.loginData.username,
    menuStatus: state.menu.menu
  }
}

const mapDispatchToProps = dispatch => ({
  goToHome: () => dispatch(push(routes.root)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Headers);
