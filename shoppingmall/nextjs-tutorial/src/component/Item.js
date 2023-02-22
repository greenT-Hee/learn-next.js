import { Grid, Image, Header, Divider } from 'semantic-ui-react'
import styles from './itemList.module.css'
export default function Item ({item}) {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column key={item.id} className={styles.card}>
          <Image src={item.image_link} alt={item.name} className={styles.image}/>
          <div className={styles.wrapInfo}>
            <strong className={styles.productName}>{item.name}</strong>
            <strong>{item.product_type}</strong>
            <strong className={styles.price}>{item.price}</strong>
            <button className={styles.button}>구매하기</button>
          </div>
        </Grid.Column>
      </Grid.Row>
      <Divider/>
      <div style={{boxSizing:"border-box",padding:"20px 40px 40px"}}>
        <Header as="h3">Description</Header>
        <p>{item.description}</p>
      </div>
    </Grid>
    
  )
}