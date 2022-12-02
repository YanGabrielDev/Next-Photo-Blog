import * as Styled from "./styles"
import { Image } from "./styles"
import { GridImageInterface } from "../../interfaces/GridImage.interface"
import { ModalContent } from "../ModalImage"
import { useEffect, useState } from "react"
import { Download } from "@mui/icons-material"
import { Search } from "../Search"

export const GridImage = ({ data, setState, setPhoto }: GridImageInterface) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [imageState, setImageState] = useState<string>('')
  const [searchValue, setSearchvalue] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     setSearchvalue(event.target.value)
  }

  useEffect((
    
  )=>{
    setPhoto((e:any) => e = [])
  },[imageState])
  return (
    <Styled.Container>
        <Search  searchChange={handleChange} search={searchValue} onSearch={(e) => {
          e.preventDefault()
          setState(searchValue)
          
          }}/>
      {isOpen && (
        <ModalContent onClose={() => setIsOpen(false)} image={imageState} />
      )}

      <Styled.Grid>
        {data?.map((image, index) => (
          <Styled.ContentImage key={index}>
            <Image
              src={image.src.large}
              onClick={() => {
                setIsOpen(true), setImageState(image.src.large)
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
              <li id="sentinela" className="sentinela" />

        {/* {OpenImage(state)} */}
      </Styled.Grid>
    </Styled.Container>
  )
}
