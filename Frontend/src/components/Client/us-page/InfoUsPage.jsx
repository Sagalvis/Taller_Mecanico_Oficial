import {  InfoContainer, Text, Title, TitleText } from "./styles/StyledInfoUsPage";


function InfoUsPage({title, text}) {
  return (
    <>
    <InfoContainer>
      <TitleText>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </TitleText>      
    </InfoContainer>
    </>
  )
}

export default InfoUsPage;
