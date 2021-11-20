import React from 'react'
import { Calendar as CalendarElement, Badge } from 'antd';
import { useTypedSelector } from '../hooks/useTypedSelector';
import styles from '../styles/Calendar.module.scss';
import AddEventForm from './AddEventForm';

const Calendar: React.FC = () => {
    const {events} = useTypedSelector(state => state.event);

    function dateCellRender(value: any) {
        const eventsForCell = events.filter(item => !item.date.isAfter(value, 'day') && !item.date.isBefore(value, 'day'));

        return (
            <ul className={styles.events}>
                    {eventsForCell.map(item => (
                        <li key={item.content}>
                            <Badge status={item.type} text={item.content} />
                        </li>
                    ))}
            </ul>
        );
    }

    return (
        <div>
            <CalendarElement
                dateCellRender={dateCellRender}
            />

            <AddEventForm />
        </div>
    )
}

export default Calendar
