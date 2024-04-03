import { ConfigProvider, Layout, theme } from 'antd'

import { BrowserRouter } from 'react-router-dom'
import classes from './App.module.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
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
        <Header />
        <Layout.Content className={classes.content}>
          <TagDisplayTable />
        </Layout.Content>
        <Footer />
      </Layout>
    </ConfigProvider>
  </BrowserRouter>
)

export default App
