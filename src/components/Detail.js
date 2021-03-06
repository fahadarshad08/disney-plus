import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import db from "../firebase";


const Detail = (props) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("documentdocument 🔥");
        }
      })
      .catch((error) => {
        console.log("document document 🔥:", error);
      });
  }, [id]);


  return (
    <Container>
      <Background>
      <img alt={detailData.title} src={detailData.backgroundImg} />
      </Background>

      <ImageTitle>
      <img alt={detailData.title} src={detailData.titleImg} />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src="/imagess/play-icon-black.png" alt="" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/imagess/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src="/imagess/group-icon.png" alt="" />
            </div>
          </GroupWatch>
        </Controls>
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>{detailData.description}</Description>
      </ContentMeta>
    </Container>
  )
}

export default Detail


const SubTitle = styled.main`
color: rgb(249, 249, 249);
font-size: 15px;
min-height: 20px;
TEXT-ALIGN: left;

@media (max-width: 768px) {
  font-size: 12px;
}
`

const Description = styled.main`
line-height: 1.4;
font-size: 20px;
text-align: left;

padding: 16px 0px;
color: rgb(249, 249, 249);
@media (max-width: 768px) {
  font-size: 14px;
}
`;




const Container = styled.main`
position: relative;
min-height: calc(100vh-250px);
overflow-x: hidden;
display: block;
top: 72px;
padding: 0 calc(3.5vw + 5px);
`

const Background = styled.div`
  left: 0px;
  opacity: 0.7;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;
  img {
    width: 100vw;
    height: 100vh;
    @media (max-width: 768px) {
      width: initial;
    }
  }
`
const ImageTitle = styled.div`
height: 30vw;
align-items: flex-end;
display:flex;
justify-content: flex-start;
  margin-top:10%;
  height: 100%;
  min-height: 170px;
  width: 100%;
  img {
    max-width:600px;
    min-width: 200px;
    width: 35vw;
  }
`
const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;
const Player = styled.button`
font-size: 15px;
margin: 0px 22px 0px 0px;
padding: 0px 24px;
height: 56px;
border-radius: 4px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
letter-spacing: 1.8px;
text-align: center;
text-transform: uppercase;
background: rgb (249, 249, 249);
border: none;
color: rgb(0, 0, 0);
img {
  width: 32px;
}
&:hover {
  background: rgb(198, 198, 198);
}
@media (max-width: 768px) {
  height: 45px;
  padding: 0px 12px;
  font-size: 12px;
  margin: 0px 10px 0px 0px;
  img {
    width: 25px;
  }
}
`
const Trailer = styled.button`
font-size: 15px;
margin: 0px 22px 0px 0px;
padding: 0px 24px;
height: 56px;
border-radius: 4px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
letter-spacing: 1.8px;
text-align: center;
text-transform: uppercase;
background: rgba(0, 0, 0, 0.3);
border: 1px solid white;
color: rgb(249, 249, 249);
img {
  width: 32px;
}
&:hover {
  background: rgb(198, 198, 198);
}
@media (max-width: 768px) {
  height: 45px;
  padding: 0px 12px;
  font-size: 12px;
  margin: 0px 10px 0px 0px;
  img {
    width: 25px;
  }
}
`

const GroupWatch = styled.main`
margin-right: 16px;
height: 44px;
width: 44px;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0, 0, 0, 0.6);
border-radius: 50%;
border: 2px solid white;
cursor: pointer;
span {
  background-color: rgb(249, 249, 249);
  display: inline-block;
 
}
@media (max-width: 768px) {
  height: 20px;
  font-size: 10px;
  margin: 0px 8PX 0px 0px;
  img {
    width: 25px;
  }
}
`


const AddList = styled.main`
margin-right: 16px;
height: 44px;
width: 44px;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0, 0, 0, 0.6);
border-radius: 50%;
border: 2px solid white;
cursor: pointer;
span {
  background-color: rgb(249, 249, 249);
  display: inline-block;
  &:first-child {
    height: 2px;
    transform: translate(1px, 0px) rotate(0deg);
    width: 16px;
  }
  &:nth-child(2) {
    height: 16px;
    transform: translateX(-8px) rotate(0deg);
    width: 2px;
  }
}
@media (max-width: 768px) {
  height: 20px;
  font-size: 10px;
  margin: 0px 8PX 0px 0px;
  img {
    width: 25px;
  }
}

`
