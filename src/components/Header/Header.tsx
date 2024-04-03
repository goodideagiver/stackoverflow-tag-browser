import { Layout } from 'antd'
import classes from './Header.module.css'

export const Header = () => {
  return (
    <Layout.Header className={classes.header}>
      <h1 className={classes.title}>Stackoverflow Tag Display</h1>
    </Layout.Header>
  )
}
