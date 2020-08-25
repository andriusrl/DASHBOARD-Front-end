import React from 'react';
import styled from 'styled-components';

const HeadersWrapper = styled.div`
 background-color: #2D8848;
 height: 58px;
 display: flex;
 align-items: center;
 justify-content: space-between;
`

const TitleDashBoard = styled.h2`
  margin: 0;
  color: #FFFFFF;
`

const ButtonGroup = styled.div`
  display: flex;
  height: 100%;
`

const ButtonMenu = styled.div`
  color: #FFFFFF;
  background-color: #19612E;
  width: 166px;
  height: 100%;

`
const TextButtonMenu = styled.p`
  text-align: center;
`

function Headers() {
  return (
    <HeadersWrapper>
      <TitleDashBoard>MY FRONTEND TEST</TitleDashBoard>
      <ButtonGroup>
        <ButtonMenu><TextButtonMenu>SOBRE</TextButtonMenu></ButtonMenu>
        <ButtonMenu><TextButtonMenu>LOGIN</TextButtonMenu></ButtonMenu>
      </ButtonGroup>
    </HeadersWrapper>
  );
}

export default Headers;
