import { Abouth1, ContentText, Divabout, Text, Texth2, Textp } from "./styles/StyledInfoUsPage";


function InfoUsPage({title, text, about}) {
  return (
    <>
    <Divabout>
      <Abouth1>{about}</Abouth1>

      <ContentText>
        <Text>
          <Texth2>{title}</Texth2>
          <Textp>{text}</Textp>
        </Text>
      </ContentText>
    </Divabout>
    </>
  )
}

export default InfoUsPage;
