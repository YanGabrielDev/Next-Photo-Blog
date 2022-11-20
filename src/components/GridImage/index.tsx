import * as Styled from "./styles"
import { GridImageInterface } from "../../interfaces/GridImage.interface"
export const GridImage = ({ data, image }: GridImageInterface) => {
  return (
    <Styled.Container>
      <Styled.Grid>
        {data?.map((image) => (
          <>
            <div>
              <img src={image.src.medium} />
            </div>
          </>
        ))}
      </Styled.Grid>
    </Styled.Container>
  )
}
