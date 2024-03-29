import { Button, Form, Input } from 'antd'

export const ElementsPerPageForm = () => {
  return (
    <Form layout='inline' size='small'>
      <Form.Item required label='Elements per page' htmlFor='elements'>
        <Input placeholder='10' id='elements' />
      </Form.Item>
      <Form.Item>
        <Button type='primary'>Confirm</Button>
      </Form.Item>
    </Form>
  )
}
