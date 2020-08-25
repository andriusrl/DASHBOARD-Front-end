import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { login } from "../../actions/login";
import { setMenu } from "../../actions/menu";

const LoginPageWrapper = styled.div`
    height: 80vh;
`
const FormGroup = styled.form`
    display: flex;
    flex-direction: column;
    width: 520px;
    margin: 62px auto 0 auto;
    background-color: #FFFFFF;
    border-radius: 11px;

    
`
const TitleForm = styled.h1`
    margin: 0;
    background-color: #19612E;
    border-top-left-radius: 11px;
    border-top-right-radius: 11px;
    text-align: center;
    padding: 12px 0 6px 0;
    color: #FFFFFF;
`
const CustomInput = styled.input`
    border: 0;
    border-bottom: 1px solid #B7B7B7;
    width: 80%;
    margin: 16px auto 16px auto;
    font-size: 22pt;
`
const CustomButton = styled.button`
    background-color: #19612E;
    width: fit-content;
    align-self: center;
    color: #FFFFFF;
    padding: 8px 26px 8px 26px;
`

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputUser: "",
            inputPassword: ""
        }
    }

    componentDidMount() {
        this.props.setMenu("login", true)
    }

    componentWillUnmount() {
        this.props.setMenu("login", false)
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.login(this.state.inputUser, this.state.inputPassword)
    }

    render() {
        return (
            <LoginPageWrapper>
                <FormGroup onSubmit={this.handleSubmit}>
                    <TitleForm>Login</TitleForm>
                    <CustomInput type="text" name="inputUser" placeholder="Usuário" value={this.state.inputUser} onChange={this.handleInputChange} />
                    <CustomInput type="password" name="inputPassword" placeholder="Senha" value={this.state.inputPassword} onChange={this.handleInputChange} />
                    <CustomButton type="submit" >Entrar</CustomButton>
                </FormGroup>
            </LoginPageWrapper>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    login: (user, password) => dispatch(login(user, password)),
    setMenu: (nameMenu, statusMenu) => dispatch(setMenu(nameMenu, statusMenu))
  })

export default connect (null, mapDispatchToProps)(LoginPage);


