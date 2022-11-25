import * as Styled from "./styles"
import { Image } from "./styles"
import { GridImageInterface } from "../../interfaces/GridImage.interface"
import { ModalContent } from "../ModalImage"
import { useState } from "react"
import { Download } from "@mui/icons-material"

export const GridImage = ({ data, image }: GridImageInterface) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [state, setState] = useState<any>()

  return (
    <Styled.Container>
      {isOpen && (
        <ModalContent onClose={() => setIsOpen(false)} image={state} />
      )}

      <Styled.Grid>
        {data?.map((image) => (
          <Styled.ContentImage key={image.id}>
            <Image
              src={image.src.large}
              onClick={() => {
                setIsOpen(true), setState(image.src.large)
              }}
            />
            <Styled.MenuContent>
              <a href={image.photographer_url} target={"_blank"} rel="noreferrer">
                <p>
                  By:
                  {image.photographer}
                </p>
              </a>
              <a href={image.url} target={"_blank"} rel="noreferrer">
                <Download fontSize="large" />
              </a>
            </Styled.MenuContent>
          </Styled.ContentImage>
        ))}
        {/* {OpenImage(state)} */}
      </Styled.Grid>
    </Styled.Container>
  )
}
