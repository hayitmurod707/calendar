import { array } from 'prop-types';
import { useMemo, useState } from 'react';
import { Calendar as ReactBigCalendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styled from 'styled-components';
import EventWrapper from './EventWrapper';
import MonthDateHeader from './MonthDateHeader';
import Toolbar from './Toolbar';
import localizer from './localizer';
const StyledElement = styled.div`
   border-radius: 14px;
   border: 1px solid rgb(226, 228, 234);
   height: 100%;
   overflow: hidden;
   width: 100%;
   & .rbc-month-view {
      border-color: rgb(226, 228, 234);
      border-style: solid;
      border-width: 1px 0 0 0;
      & .rbc-month-header {
         & .rbc-header {
            font-size: 16px;
            padding: 8px 0;
         }
      }
      & .rbc-month-row + .rbc-month-row {
         border-top: 1px solid #e2e4ea;
      }
      & .rbc-month-row {
         & .rbc-row-content {
            & .rbc-row {
               & .rbc-date-cell {
                  padding: 0;
               }
            }
         }
      }
   }
`;
const Calendar = ({ events }) => {
   const [view, setView] = useState('month');
   const components = useMemo(
      () => ({
         toolbar: Toolbar,
         month: {
            dateHeader: MonthDateHeader,
         },
         eventWrapper: EventWrapper,
         // agenda: {
         //    event: MyAgendaEvent,
         //    time: MyAgendaTime,
         //    date: MyAgendaDate,
         // },
         // day: {
         //    header: MyDayHeader,
         //    event: MyDayEvent,
         // },
         // week: {
         //    header: MyWeekHeader,
         //    event: MyWeekEvent,
         // },
         // month: {
         //    header: MyMonthHeader,
         //    dateHeader: MyMonthDateHeader,
         //    event: MyMonthEvent,
         // },
      }),
      []
   );
   return (
      <StyledElement>
         <ReactBigCalendar
            components={components}
            endAccessor='end'
            events={events}
            localizer={localizer}
            onView={setView}
            startAccessor='start'
            style={{ width: '100%' }}
            view={view}
            views={['month', 'week', 'work_week', 'day', 'agenda']}
         />
      </StyledElement>
   );
};
Calendar.defaultProps = {
   events: [],
};
Calendar.propTypes = {
   events: array,
};
export default Calendar;
