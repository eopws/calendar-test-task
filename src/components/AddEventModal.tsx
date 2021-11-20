import React from 'react'
import { Form, Input, DatePicker, Button, Select, Modal } from 'antd';

interface AddEventModalProps {
    isVisible: boolean;
    handleOk: (values: any) => void;
}

const AddEventModal: React.FC<AddEventModalProps> = ({isVisible, handleOk}) => {
    return (
        <Modal title="Basic Modal" visible={isVisible} footer={[]}>
            <Form
                name="add-event-form"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={handleOk}
                autoComplete="off"
            >
                <Form.Item
                    label="Event name"
                    name="eventName"
                    rules={[{ required: true, message: 'Please input event name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Event date"
                    name="eventDate"
                    rules={[{ required: true, message: 'Please input event date!' }]}
                >
                    <DatePicker />
                </Form.Item>

                <Form.Item
                    label="Choose guest"
                    name="guest"
                    rules={[{ required: true, message: 'Please input guest!' }]}
                >
                    <Select>
                        <Select.Option value="jack">Jack</Select.Option>
                        <Select.Option value="lucy">Lucy</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item>
                    <Button htmlType="submit">Add event</Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default AddEventModal
