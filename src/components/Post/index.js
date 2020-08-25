import React from 'react';
import styled from 'styled-components';

const PostWrapper = styled.div`
    background-color: #FFFFFF;
    display: flex;
`
const Comment = styled.div`
    display: flex;
`

const showComments = (props)=>{
    return(
        <Comment>
            <img src={props.profilePic} />
            <p>
                {props.comment}
            </p>
        </Comment>
    )
}

function Post(props) {
    return (
        <PostWrapper>
            <div>
                <h2>{props.title}</h2>
                <p>{props.body}</p>
                <div>
                    {props.comment?showComments(props):false}
                </div>
            </div>
            <div>
                <img src={props.imageURL} />
            </div>
        </PostWrapper>
    );
}



export default Post;
