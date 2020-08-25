import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"

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

export default connect(null, null)(HomePage);


