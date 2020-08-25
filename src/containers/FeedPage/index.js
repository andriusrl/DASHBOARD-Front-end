import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import Post from "../../components/Post"
import { getFeed } from "../../actions/feed";
import { setMenu } from "../../actions/menu";



const FeedPageWrapper = styled.div`
    width: 90%;
    margin: 0 auto 0 auto;
    margin-top: 42px;
`
const SeparationLine = styled.div`
    border: 1px solid #D2D2D2;
    width: 100%;
    margin: 33px 0 33px 0;
`
const Title = styled.div`
    color: #19612E;
    font-size: 26pt;
    margin: 9px 0 9px 0;
`
const SubTitle = styled.div`
    color: #757575;
    font-size: 26pt;
    margin: 9px 0 9px 0;
`
const SubTitleBold = styled.div`
    display: inline;
    color: #7C7C7C;
`
class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        this.props.getFeed()
        this.props.setMenu("about", true)
    }

    showPosts = () => {
        if (this.props.feedData) {
            
            return (
                this.props.feedData.map(feed=>{
                    return(
                    <Post
                    key={feed.id}
                    body={feed.body}
                    id={feed.id}
                    imageURL={feed.imageURL}
                    title={feed.title}
                    profilePic={feed.comments[0]?.profilePic}
                    comment={feed.comments[0]?.comment}
                />
                )})
            )
        }
    }

    render() {
        // console.log(this.props.feedData)
        return (
            <FeedPageWrapper>
                <Title>Seja bem vindo!</Title>
                <SubTitle>Olá {this.props.username}, essa é a parte de dentro da minha aplicação <SubTitleBold>MY FRONTEND TEST.</SubTitleBold></SubTitle>
                <SeparationLine />
                <Title>Feed</Title>
                <div>
                    {this.showPosts()}
                </div>
            </FeedPageWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        feedData: state.feedData.feedData,
        username: state.loginData.loginData.username,
    }
}

const mapDispatchToProps = dispatch => ({
    getFeed: () => dispatch(getFeed()),
    setMenu: (nameMenu, statusMenu) => dispatch(setMenu(nameMenu, statusMenu))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);


