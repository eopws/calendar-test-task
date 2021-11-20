import React from 'react'
import { Form, Input, DatePicker, Button, Select, Modal } from 'antd';
import { useTypedSelector } from '../hooks/useTypedSelector';

interface AddEventModalProps {
    isVisible: boolean;
    handleOk: (values: any) => void;
}

const AddEventModal: React.FC<AddEventModalProps> = ({isVisible, handleOk}) => {
    const {users} = useTypedSelector(state => state.user);

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
                        {users.map(({username}) =>
                            <Select.Option
                                key={username}
                                value={username}
                            >
                                {username}
                            </Select.Option>  
                        )}
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
