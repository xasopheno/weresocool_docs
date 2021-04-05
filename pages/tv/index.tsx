import Youtube from "../../components/youtube"
import styled from "styled-components"

const Wrapper = styled.div`
  max-width: 80vw;
  margin-left: auto;
  margin-right: auto;
`

const TV = () => {
  return (
    <Wrapper>
      <Youtube code={"ikGA9wDE9nM"} />
    </Wrapper>
  )
}

export default TV
