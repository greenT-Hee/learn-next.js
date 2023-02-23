import Link from 'next/link'
import { Header } from 'semantic-ui-react'
import Gnb from './Gnb'

export default function Top() {
  return (
    <div>
      <Link href={'/'}>
        <img src="/images/logo.jpg" alt="logo" style={{ width: "200px", display: "block", margin: "0 auto" }} />
      </Link>
      {/* <Header as="h1">APPLE</Header> */}
      <Gnb />
    </div>
  )
}