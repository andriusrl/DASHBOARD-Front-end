import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { setMenu } from "../../actions/menu";

const HomePageWrapper = styled.div`
    display: flex;
`
const ImageHome = styled.img`
    width: 50%;
`
class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        this.props.setMenu("dashboard", false)
        this.props.setMenu("exit", false)
        this.props.setMenu("about", false)
        this.props.setMenu("login", false)
    }

    render() {
        // console.log(this.props.feedData)
        return (
            <HomePageWrapper>
                <ImageHome src={require("../../images/image1.png")} />
                <ImageHome src={require("../../images/image2.png")} />
            </HomePageWrapper>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setMenu: (nameMenu, statusMenu) => dispatch(setMenu(nameMenu, statusMenu))
})

export default connect(null, mapDispatchToProps)(HomePage);


