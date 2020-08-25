import React from 'react';
import styled from 'styled-components';

const PostWrapper = styled.div`
    background-color: #FFFFFF;
    display: flex;
`
const Comment = styled.div`
    display: flex;
    align-items: center;
    margin-top: 24px;
`
const Description = styled.div`
    width: 50%;
    margin: 18px 28px 9px 28px;
`
const ImageBar = styled.div`
    background-color: #707070;
    width: 4px;
    height: 83px;
`
const Image = styled.img`
    width: 50%;
`
const ImageComment = styled.img`
    width: 89px;
    border-radius: 100%;
    object-fit: cover;
    margin: 0 12px 0 12px;
`
const TitlePost = styled.div`
    color: #6A6A6A;
    font-size: 22pt;
`
const ParagraphPost = styled.div`
    color: #BDBDBD;
    font-size: 12pt;

`

const showComments = (props)=>{
    return(
        <Comment>
            <ImageBar />
            <ImageComment src={props.profilePic} />
            <p>
                "{props.comment}"
            </p>
        </Comment>
    )
}

function Post(props) {
    return (
        <PostWrapper>
            <Description>
                <TitlePost>{props.title}</TitlePost>
                <ParagraphPost>{props.body}</ParagraphPost>
                <div>
                    {props.comment?showComments(props):false}
                </div>
            </Description>
            <Image src={props.imageURL} />
        </PostWrapper>
    );
}



export default Post;
