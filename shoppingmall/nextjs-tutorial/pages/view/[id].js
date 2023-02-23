import axios, { Axios } from 'axios';
import { useRouter } from 'next/router'
import { useState } from 'react';
import Item from '../../src/component/Item';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'


const Post = ({ item }) => {
  // const [item, setItem] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const router = useRouter();
  // const { id } = router.query;
  // console.log(id)
  // const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  // async function getData() {
  //   await axios.get(API_URL)
  //     .then((res) => {
  //       console.log(res);
  //       setItem(res.data);
  //       setIsLoading(false);
  //     })
  // }

  // useState(() => {
  //   if (id && id > 0) {
  //     getData()
  //   }
  // }, [id])

  return (
    <>
      {/* {isLoading &&
        <Dimmer active>
          <Loader />
        </Dimmer>
      } */}
      {item &&
        <Item item={item} />
      }
    </>
  )
}

export default Post;

export async function getServerSideProps(context) {
  const id = context.params.id;
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(API_URL);
  const data = res.data;

  return {
    props: {
      item: data
    }
  }
}

/*
Next js 모든 페이지 사전 렌더링 (pre-rendering)
더 좋은 퍼포먼스
검색엔진최적화(SEO)

1. 정적 생성
2. Server Side Rendering (SSR, Dynamic Rendering)

차이점은 언제 html 파일을 생성하는가 

[정적 생성]
- 프로젝트가 빌드하는 시점에 html 파일들이 생성
- 모든 요청에 재사용
- 퍼포먼스 이유로 넥스트 js는 정적 생성을 권고 
- 정적 생성된 페이지들은 CDN에 캐시 
- getStaticProps / getStaticPaths
- 미리 불러와도 괜찮은 페이지

[서버사이드 렌더링]은 매 요청마다 html을 생성 
- 항상 최신 상태 유지 
- getServerSideProps 
*/