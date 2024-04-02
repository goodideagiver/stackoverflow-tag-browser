import { ConfigProvider, Divider, Layout, theme } from 'antd'

import { GithubOutlined } from '@ant-design/icons'
import { BrowserRouter } from 'react-router-dom'
import classes from './App.module.css'
import { TagDisplayTable } from './components/TagDisplayTable/TagDisplayTable'

const App = () => (
  <BrowserRouter>
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        components: {
          Layout: {
            headerBg: 'transparent',
          },
        },
      }}
    >
      <Layout className={classes.root}>
        <Layout.Header className={classes.header}>
          <h1 className={classes.title}>Stackoverflow Tag Display</h1>
        </Layout.Header>
        <Layout.Content className={classes.content}>
          <TagDisplayTable />
        </Layout.Content>
        <Layout.Footer>
          <Divider />
          <a href='https://github.com/goodideagiver/stackoverflow-tag-browser'>
            <GithubOutlined /> Project repository
          </a>
        </Layout.Footer>
      </Layout>
    </ConfigProvider>
  </BrowserRouter>
)

export default App
