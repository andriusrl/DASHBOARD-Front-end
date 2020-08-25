import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { setMenu } from "../../actions/menu";

const AboutPageWrapper = styled.div`
    display: flex;
`
const Box = styled.div`
    width: 50%;
`
const BoxImage = styled.div`
    width: 50%;
    background-color: #FFFFFF;
    padding: 11% 0 11% 0;
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
const ParagraphWrapper = styled.div`
    margin: 30px 54px 30px 54px;

`
const Paragraph = styled.div`
    color: #8E9497;
    margin: 3px 0px 3px 0px;
    /* box-sizing: border-box; */
`
class AboutPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        this.props.setMenu("about", true)
    }

    componentWillUnmount() {
        this.props.setMenu("about", false)
    }

    render() {
        return (
            <AboutPageWrapper>
                <BoxImage>
                    <img src={require("../../images/image3.png")} />
                </BoxImage>
                <Box>
                    <FormGroup>
                        <TitleForm>Sobre</TitleForm>
                        <ParagraphWrapper>
                            <Paragraph>
                                Esse Projeto foi feito usando:
                            </Paragraph>
                            <Paragraph>- HTML</Paragraph>
                            <Paragraph>- CSS</Paragraph>
                            <Paragraph>- JAVASCRIPT</Paragraph>
                            <Paragraph>- REACT</Paragraph>
                            <Paragraph>- REDUX</Paragraph>
                            <Paragraph>- STYLED-COMPONENTS</Paragraph>
                        </ParagraphWrapper>
                    </FormGroup>
                </Box>
            </AboutPageWrapper>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setMenu: (nameMenu, statusMenu) => dispatch(setMenu(nameMenu, statusMenu))
})

export default connect(null, mapDispatchToProps)(AboutPage);


