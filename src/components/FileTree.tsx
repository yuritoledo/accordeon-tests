import { FILE_TREE } from "../data/fileTree"
import AccordionItem from "./AccordionItem"
import { Title, Accordion } from "./styleds"

export const FileTree = () => {
  return (
    <Accordion>
      <Title>{FILE_TREE.name}</Title>
      <Title>{FILE_TREE.children.map(child => (
        <AccordionItem
          name={child.name}
          children={child.children}
        />
      ))}</Title>
    </Accordion>
  )
}