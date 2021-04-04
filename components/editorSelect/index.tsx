import styled from "styled-components"
import useDropdownMenu from "react-accessible-dropdown-menu-hook"
import React, { SyntheticEvent, useContext } from "react"
import { GlobalContext } from "../../state/store"
import { DispatchContext } from "../../state/actions"
import { Button } from "../AceEditor/components"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.p`
  padding: 0;
  margin: 0;
  margin-right: 10px;
  font-size: 20px;
  text-align: center;
`

const Option = styled.a`
  font-size: 20px;
`

const Options = styled.div`
  display: flex;
  flex-direction: column;
`

export const EditorSelect: React.FC = () => {
  const { isOpen, setIsOpen } = useDropdownMenu(3)

  const store = useContext(GlobalContext)
  const dispatch = useContext(DispatchContext)

  const handleClick = (e: any) => {
    dispatch.onChangeEditorType(e.target.id)
    setIsOpen(false)
  }
  return (
    <Container>
      {/* <Label>Editor:</Label> */}
      <ButtonContainer>
        <Button onClick={() => setIsOpen(!isOpen)}>{store.editor}</Button>

        {isOpen && (
          <Options role="menu">
            <Option id="Text" onClick={handleClick}>
              Text
            </Option>
            <Option id="Vim" onClick={handleClick}>
              Vim
            </Option>
            <Option id="Emacs" onClick={handleClick}>
              Emacs
            </Option>
          </Options>
        )}
      </ButtonContainer>
    </Container>
  )
}
