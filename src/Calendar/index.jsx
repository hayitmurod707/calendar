import { array } from 'prop-types';
import { useMemo, useState } from 'react';
import { Calendar as ReactBigCalendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styled from 'styled-components';
import Toolbar from './Toolbar';
import localizer from './localizer';
const StyledElement = styled.div`
   border-radius: 14px;
   border: 1px solid rgb(226, 228, 234);
   height: 100%;
   width: 100%;
`;
const Calendar = ({ events }) => {
   const [view, setView] = useState('month');
   const components = useMemo(
      () => ({
         toolbar: Toolbar,
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
