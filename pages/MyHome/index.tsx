import axios from "axios"
import { useEffect, useState } from "react"
import { Content } from "../../src/components/Content"
import { GridImage } from "../../src/components/GridImage"
function MyHome() {
  const [state, setState] = useState([])
  const getImages = () => {
    axios
      .get("https://api.pexels.com/v1/search/?page=2&per_page=40&query=night", {
        headers: {
          Authorization:
            "563492ad6f917000010000017cc53e814cb84a32809bee6cbd3f58ff",
        },
      })
      .then((resp) => setState(resp.data.photos))
  }
  useEffect(() => {
    getImages()
  }, [])
  console.log(state)
  return (
    <Content>
      <GridImage data={state} />
    </Content>
  )
}
export default MyHome
