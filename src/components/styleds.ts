import styled from "styled-components"

export const Accordion = styled.div`
  padding: 10px;
  margin: 10px;
  background-color: #5ECFFF;
  border-radius: 8px;
`

export const Title = styled.p`
  color: white;
`

export const Container = styled.div`
  background-color: #2DBDFB;
  border-radius: 8px;
  padding-left: 20px;
  padding-right: 10px;
  margin-bottom: 10px;
`

interface LineProps {
  isFolder: boolean
}
export const Line = styled.div<LineProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: ${props => props.isFolder ? 'pointer' : 'default'};
`


interface ChidrenContainerProps {
  show: boolean
  listLength: number
}
export const ChildrenContainer = styled.div<ChidrenContainerProps>`
  height: ${props => props.show ? props.listLength * 40 : 0};
  overflow-y: hidden;
  transition: height 1300ms;
`
