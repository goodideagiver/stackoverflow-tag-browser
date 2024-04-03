import { Divider, Layout } from 'antd'
import { GithubOutlined } from '@ant-design/icons'

export const Footer = () => {
  return (
    <Layout.Footer>
      <Divider />
      <a href='https://github.com/goodideagiver/stackoverflow-tag-browser'>
        <GithubOutlined /> Project repository
      </a>
    </Layout.Footer>
  )
}
