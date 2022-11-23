import axios from "axios"
import { useEffect, useState } from "react"
import { Content } from "../../src/components/Content"
import { GridImage } from "../../src/components/GridImage"
function MyHome() {
  const [photo, setPhoto] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    axios
      .get(
        `https://api.pexels.com/v1/search/?page=2&per_page=${currentPage}&query=night`,
        {
          headers: {
            Authorization:
              "563492ad6f917000010000017cc53e814cb84a32809bee6cbd3f58ff",
          },
        }
      )
      .then((resp) => setPhoto(resp.data.photos))
  }, [currentPage])

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        console.log("viu")
        setCurrentPage((currentPageInside) => currentPageInside + 1)
      }
    })
    intersectionObserver.observe(document.querySelector("#sentinela")!)
    return () => intersectionObserver.disconnect()
  }, [])
  console.log(currentPage)

  return (
    <Content>
      <GridImage data={photo} />
      <li id="sentinela" className="sentinela" />
    </Content>
  )
}
export default MyHome
