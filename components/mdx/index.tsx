import styled from "styled-components"

const StyledCoolText = styled.span`
  font-size: 1.25rem;
  color: goldenrod;
`

export const Break = styled.div`
  border-bottom: 1px solid goldenrod;
`
export const CoolText = (
  props: {children: React.ReactNode}
): React.ReactElement => {
  return <StyledCoolText>{props.children}</StyledCoolText>
}

