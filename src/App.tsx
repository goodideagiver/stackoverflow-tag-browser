import { Button, Form, Input, Layout, Table, Typography } from 'antd'

const App = () => (
  <Layout>
    <Layout.Header>
      <Typography.Title level={1}>Header</Typography.Title>
    </Layout.Header>
    <Layout.Content>
      <Form layout='inline' size='small'>
        <Form.Item required label='Elements per page'>
          <Input placeholder='10' />
        </Form.Item>
        <Form.Item>
          <Button type='primary'>Confirm</Button>
        </Form.Item>
      </Form>
      <Table />
    </Layout.Content>
    <Layout.Footer>Footer</Layout.Footer>
  </Layout>
)

export default App
