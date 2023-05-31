import { useState } from 'react';
import styled from 'styled-components';
import Calendar from './Calendar';
const StyledElement = styled.div`
   align-items: center;
   display: flex;
   flex-direction: column;
   height: 100vh;
   justify-content: center;
   width: 100%;
   & .content {
      height: 600px;
      max-height: 100%;
      max-width: 100%;
      width: 900px;
   }
`;
const App = () => {
   const currentDate = new Date().getTime();
   const [date, setDate] = useState(new Date(currentDate));
   const hour = 1000 * 60 * 60;
   const events = [
      {
         title: 'Meeting',
         start: new Date(currentDate + hour * 3),
         end: new Date(currentDate + hour * 5),
         allDay: false,
         status: 'warning',
      },
      {
         title: 'Meeting',
         start: new Date(currentDate + hour * 24),
         end: new Date(currentDate + hour * 26),
         allDay: false,
         status: 'success',
      },
      {
         title: 'Meeting',
         start: new Date(currentDate - hour * 27),
         end: new Date(currentDate - hour * 24),
         allDay: false,
         status: 'error',
      },
   ];
   return (
      <StyledElement>
         <h2 style={{ textAlign: 'center', margin: 0 }}>Calendar</h2>
         <h4 style={{ textAlign: 'center', margin: '15px 0' }}>
            <a href='https://github.com/hayitmurod707/calendar'>Github</a>
         </h4>
         <div className='content'>
            <Calendar date={date} onNavigate={setDate} events={events} />
         </div>
      </StyledElement>
   );
};
export default App;
