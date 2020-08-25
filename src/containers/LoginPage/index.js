import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { login } from "../../actions/login";

const LoginPageWrapper = styled.div`

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

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputUser: "",
            inputPassword: ""
        }
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
                    <input type="text" name="inputUser" value={this.state.inputUser} onChange={this.handleInputChange} />
                    <input type="password" name="inputPassword" value={this.state.inputPassword} onChange={this.handleInputChange} />
                    <button type="submit" >Entrar</button>
                </FormGroup>
            </LoginPageWrapper>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    login: (user, password) => dispatch(login(user, password)),
  })

export default connect (null, mapDispatchToProps)(LoginPage);


