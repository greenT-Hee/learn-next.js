import { Grid, Image, Header } from 'semantic-ui-react'
import styles from './itemList.module.css'
import Link from 'next/link'

export default function ItemList ({list}) {
  return (
    <Grid columns={3} divided>
      <Grid.Row>
      {list.map((item) => (
        <Grid.Column key={item.id} className={styles.card}>
          <Link href={`/view/${item.id}`}>
          <Image src={item.image_link} alt={item.name} className={styles.image}/>
          <div className={styles.wrapInfo}>
            <strong className={styles.productName}>{item.name}</strong>
            <strong>{item.product_type}</strong>
            <strong className={styles.price}>{item.price}</strong>
          </div>
          </Link>
        </Grid.Column>
      ))}
    </Grid.Row>    
  </Grid>
  )
}