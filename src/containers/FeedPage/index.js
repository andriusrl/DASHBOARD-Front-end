import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import Post from "../../components/Post"
import { getFeed } from "../../actions/feed";


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

    componentDidMount(){
        this.props.getFeed()
    }


    render() {
        return (
            <FeedPageWrapper>
                <Title>Seja bem vindo!</Title>
                <SubTitle>Olá [USUÁRIO], essa é a parte de dentro da minha aplicação <SubTitleBold>MY FRONTEND TEST.</SubTitleBold></SubTitle>
                <SeparationLine />
                <Title>Feed</Title>
                <div>
                    <Post
                        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque vel felis et efficitur. Morbi ac tellus a nunc lobortis rutrum a sed nulla. Cras ultricies nulla erat, non malesuada nulla cursus at. Donec sollicitudin elit sapien, eget euismod odio sollicitudin a. Maecenas lectus tortor, egestas non cursus sit amet, congue id nisl. Sed molestie purus id mauris vestibulum varius. Nam dictum ac ligula sit amet luctus. Mauris mattis, lacus vel euismod volutpat, erat purus semper libero, ut aliquam nisi metus sed nibh. Mauris ipsum arcu, volutpat at auctor at, maximus ac odio. Curabitur est sapien, fermentum non mattis vel, luctus vitae velit. Vivamus nec varius neque. Morbi eget sapien egestas, finibus est feugiat, facilisis tortor."
                        id={1}
                        imageURL="https://conafer.org.br/wp-content/uploads/2020/08/001.jpg"
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        profilePic="https://i.pravatar.cc/150?img=27"
                        comment="Nunc odio neque, maximus quis magna nec, viverra fringilla risus."
                    />
                </div>
            </FeedPageWrapper>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getFeed: () => dispatch(getFeed()),
  })

export default connect (null, mapDispatchToProps)(LoginPage);


