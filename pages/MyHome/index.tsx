import axios from "axios"
import Head from "next/head"
import { useEffect, useState } from "react"
import { Content } from "../../src/components/Content"
import { GridImage } from "../../src/components/GridImage"
import { Search } from "../../src/components/Search"
function MyHome() {
  const [photo, setPhoto] = useState<any>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [state, setState] = useState<string>("ocean")

  useEffect(() => {
    axios
      .get(
        `https://api.pexels.com/v1/search/?page=${currentPage}&per_page=10&query=${state}`,
        {
          headers: {
            Authorization:
              "563492ad6f917000010000017cc53e814cb84a32809bee6cbd3f58ff",
          },
        }
      )
      .then((resp) => setPhoto((prev: []) => [...prev, ...resp.data.photos]))
  }, [currentPage, state])
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setCurrentPage((currentPageInside) => currentPageInside + 1)
      }
    })
    intersectionObserver.observe(document.querySelector("#sentinela")!)
    return () => intersectionObserver.disconnect()
  }, [])

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Content>
        <button>uepa</button>
        <GridImage
          data={photo}
          setState={setState}
          setPhoto={setPhoto}
          photo={photo}
        />
      </Content>
    </>
  )
}
export default MyHome
