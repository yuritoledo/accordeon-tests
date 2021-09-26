import { useState } from "react"
import { checkIsFolder } from "../utils/helpers"
import { Container, ChildrenContainer, Line, Title } from "./styleds"
import { Chevron } from "./Chevron"

interface Child {
  name: string
  children?: Child[]
}

interface Props extends Child { }

const AccordionItem = (props: Props) => {
  const { name, children } = props

  const [showLayer, setShowLayer] = useState(false)

  const onClickLayer = () => {
    setShowLayer(!showLayer)
  }

  const isFolder = checkIsFolder(name)
  return (
    <Container>
      <Line
        onClick={onClickLayer}
        isFolder={isFolder}
      >
        <Title>{name}</Title>
        {isFolder && (
          <Chevron isShowing={showLayer} />
        )}
      </Line>

      <ChildrenContainer
        listLength={Number(children?.length)}
        show={showLayer}
      >
        {children?.map(child2 => (
          <AccordionItem
            name={child2.name}
            children={child2.children}
          />
        ))}
      </ChildrenContainer>
    </Container>
  )
}

export default AccordionItem
