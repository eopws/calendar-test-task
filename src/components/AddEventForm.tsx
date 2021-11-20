import React, { useState } from 'react'
import { Button, } from 'antd';
import AddEventModal from './AddEventModal'
import { useActions } from '../hooks/useActions';
import { IEvent } from '../types/eventReducer';

const AddEventForm: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const {addEvent} = useActions();

    // true if modal may be closed
    function handleOk(values: any): void {
        console.log(values.eventDate);

        const newEvent: IEvent = {
            type: "processing",
            content: values.eventName,
            date: values.eventDate,
            user: values.guest
        }

        addEvent(newEvent);

        setIsModalVisible(false);
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
