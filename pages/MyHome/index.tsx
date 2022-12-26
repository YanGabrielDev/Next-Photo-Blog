import axios from "axios"
import Head from "next/head"
import { useEffect, useState } from "react"
import { Content } from "../../src/components/Content"
import { GridImage } from "../../src/components/GridImage"
import { Search } from "../../src/components/Search"
import { PhotoInterface } from "../../src/interfaces/PhotoInterface"
import { Loader } from "../../src/components/Loader"
import { appStates } from "../../src/trataments/appStates"

function MyHome() {
  const [photo, setPhoto] = useState<Array<PhotoInterface>>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [search, setSearch] = useState<string>("ocean")
  const Key = process.env.NEXT_PUBLIC_PEXELS_KEY

  const getPhoto =  () => {
    const res = axios
      .get(
        `https://api.pexels.com/v1/search/?page=${currentPage}&per_page=30&query=${search}`,
        {
          headers: {
            Authorization: Key,
          },
        }
      )
      .then((resp) => {
        setPhoto((prev) => [...prev, ...resp.data.photos])
      })
    return res
  }

  useEffect(() => {
    try {
      getPhoto()
    } catch {
      console.error("falhou")
    }
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
        <GridImage data={photo} />
        <li id="sentinela" className="sentinela" />
      </Content>
    </>
  )
}
export default MyHome
