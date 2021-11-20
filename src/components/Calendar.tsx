import React from 'react'
import { Calendar as CalendarElement, Badge } from 'antd';
import { useTypedSelector } from '../hooks/useTypedSelector';
import styles from '../styles/Calendar.module.scss';

const Calendar: React.FC = () => {
    const {events} = useTypedSelector(state => state.event);

    function dateCellRender(value: any) {
        const currentDate = `${value.year()}-${value.month()}-${value.date()}`
        const eventsForCell = events.filter(item => item.date === currentDate);

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
        </div>
    )
}

export default Calendar
