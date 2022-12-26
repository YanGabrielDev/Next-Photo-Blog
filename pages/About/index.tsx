import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import { Content } from "../../src/components/Content";
import { GridImage } from "../../src/components/GridImage";
import { InfinitScroll } from "../../src/components/Scroll";
import { PhotoInterface } from "../../src/interfaces/PhotoInterface";

function About(){
    const [photo, setPhoto] = useState<Array<PhotoInterface>>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const Key = process.env.NEXT_PUBLIC_PEXELS_KEY
    const getPhoto = () => {
      const res = axios
        .get(
          `https://api.pexels.com/v1/search/?page=${currentPage}&per_page=30&query=Night`,
          {
            headers: {
              Authorization: Key
            },
          }
        )
        .then((resp) => setPhoto((prev) => [...prev, ...resp.data.photos]))
      return res
    }
    return(
        <>
        <Head>
            <title>About</title>
        </Head>
       <Content>
        <GridImage data={photo}/>
        
       </Content>
        </>
    )
}

export default About;