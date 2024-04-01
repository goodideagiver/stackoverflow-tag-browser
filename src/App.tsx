import {
  Button,
  ConfigProvider,
  Divider,
  Form,
  Input,
  Layout,
  Space,
  Table,
  Typography,
  theme,
} from 'antd'

import classes from './App.module.css'
import { GithubOutlined } from '@ant-design/icons'
import { TagDisplayTable } from './components/TagDisplayTable/TagDisplayTable'
import { BrowserRouter } from 'react-router-dom'

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
