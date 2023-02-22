import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'semantic-ui-css/semantic.min.css'
import Axios from 'axios'
import { useEffect, useState } from 'react';
import ItemList from '../src/component/ItemList';
import { Header, Divider } from 'semantic-ui-react';
export default function Home() {
  const [list, setList] = useState([]);
  const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  
  async function getDate() {
    await Axios.get(API_URL)
    .then(res => {
      console.log(res.data);
      setList(res.data);
    })
  }

  useEffect(() => {
    getDate()
  }, [])

  return(
    <>
      <Head>
        <title>Apple store</title>
      </Head>
      <Header as="h2">베스트 상품</Header>
      <Divider/>
      <ItemList list={list}/>
      <p>lorem</p>
    </>
  )
}
