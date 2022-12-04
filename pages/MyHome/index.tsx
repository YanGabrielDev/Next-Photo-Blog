import axios from "axios"
import Head from "next/head"
import { useEffect, useState } from "react"
import { Content } from "../../src/components/Content"
import { GridImage } from "../../src/components/GridImage"
import { Search } from "../../src/components/Search"
import {PhotoInterface} from '../../src/interfaces/PhotoInterface'
function MyHome() {
  const [photo, setPhoto] = useState<Array<PhotoInterface>>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [search, setSearch] = useState<string>("ocean")
  const getPhoto = () => {
    const res = axios
      .get(
        `https://api.pexels.com/v1/search/?page=${currentPage}&per_page=10&query=${search}`,
        {
          headers: {
            Authorization:
              "563492ad6f917000010000017cc53e814cb84a32809bee6cbd3f58ff",
          },
        }
      )
      .then((resp) => setPhoto((prev) => [...prev, ...resp.data.photos]))
    return res
  }

  useEffect(() => {
    getPhoto()
  }, [currentPage])


  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setCurrentPage((currentPageInside) => currentPageInside + 1)
      }
    })
    intersectionObserver.observe(document.querySelector("#sentinela")!)
    return () => intersectionObserver.disconnect()
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const handleSubimit = async () => {
    await setPhoto([])
    await getPhoto()
  }
  console.log(photo)

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Content>
        <Search
          searchChange={handleChange}
          search={search}
          onSearch={(e: React.FormEvent<HTMLInputElement>) => {
            e.preventDefault()
            handleSubimit()
          }}
        />
        <GridImage data={photo}/>
      </Content>
    </>
  )
}
export default MyHome
