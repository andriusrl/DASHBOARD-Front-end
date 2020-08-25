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
  cursor: pointer;
`
const TextButtonMenu = styled.p`
  text-align: center;
`

function Headers(props) {
  return (
    <HeadersWrapper>
      <TitleDashBoard onClick={props.goToHome} >MY FRONTEND TEST</TitleDashBoard>
      {props.username ?
        <ButtonGroup>
          <ButtonMenu background={props.menuStatus.dashboard?"#19612E":"transparent"} onClick={props.goToFeed} ><TextButtonMenu>DASHBOARD</TextButtonMenu></ButtonMenu>
          <ButtonMenu background={props.menuStatus.exit?"#19612E":"transparent"} onClick={props.goToHome}><TextButtonMenu>SAIR</TextButtonMenu></ButtonMenu>
        </ButtonGroup> :
        <ButtonGroup>
          <ButtonMenu background={props.menuStatus.about?"#19612E":"transparent"} onClick={props.goToAbout} ><TextButtonMenu>SOBRE</TextButtonMenu></ButtonMenu>
          <ButtonMenu background={props.menuStatus.login?"#19612E":"transparent"} onClick={props.goToLogin} ><TextButtonMenu>LOGIN</TextButtonMenu></ButtonMenu>
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
  goToAbout: () => dispatch(push(routes.about)),
  goToFeed: () => dispatch(push(routes.feed)),
  goToLogin: () => dispatch(push(routes.login)),
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Headers);
