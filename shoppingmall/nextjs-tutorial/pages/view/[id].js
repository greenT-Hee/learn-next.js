import axios, { Axios } from 'axios';
import { useRouter } from 'next/router'
import { useState } from 'react';
import Item from '../../src/component/Item';

const Post = () => {
  const [item, setItem] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  console.log(id)
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  async function getData() {
    await axios.get(API_URL)
    .then((res) => {
      console.log(res);
      setItem(res.data)
    })
  }

  useState(()=> {
    if(id && id > 0) {
      getData()
    }
  }, [id])

  return <Item item={item}/>
}

export default Post