import React from 'react'
import { Calendar as CalendarElement, Badge } from 'antd';
import { useTypedSelector } from '../hooks/useTypedSelector';
import styles from '../styles/Calendar.module.scss';
import AddEventForm from './AddEventForm';
import { IEvent } from '../types/eventReducer';

const Calendar: React.FC = () => {
    const {events} = useTypedSelector(state => state.event);
    const currentUser = useTypedSelector(state => state.auth.user);

    function dateCellRender(value: any) {
        const eventMatches = (event: IEvent) => {
            if (event.user.username !== currentUser?.username) {
                return false;
            }

            return !event.date.isAfter(value, 'day') && !event.date.isBefore(value, 'day');
        }

        const eventsForCell = events.filter(item => eventMatches(item));

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
