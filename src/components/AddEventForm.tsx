import React, { useState } from 'react'
import { Button, } from 'antd';
import AddEventModal from './AddEventModal'
import { useActions } from '../hooks/useActions';
import { IEvent } from '../types/eventReducer';
import { useTypedSelector } from '../hooks/useTypedSelector';

const AddEventForm: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const {addEvent} = useActions();
    const users = useTypedSelector(state => state.user.users);

    // true if modal may be closed
    function handleOk(values: any): void {
        const user = users.find(item => item.username === values.guest);

        if (user) {
            const newEvent: IEvent = {
                type: "processing",
                content: values.eventName,
                date: values.eventDate,
                user
            }

            addEvent(newEvent);

            setIsModalVisible(false);
        }
    }

    return (
        <>
            <Button onClick={() => setIsModalVisible(true)}>
                Add event
            </Button>

            <AddEventModal
                isVisible={isModalVisible}
                handleOk={handleOk}
            />
        </>
    )
}

export default AddEventForm
