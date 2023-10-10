import { PropsWithChildren } from 'react'
import { Header } from 'components/Header'

export function BaseLayout(props: PropsWithChildren) {
  return (
    <>
      <Header />     
      {props.children}
    </>
  )
}