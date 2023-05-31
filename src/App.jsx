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
   const [date, setDate] = useState(new Date());
   const events = [
      {
         title: 'Meeting',
         start: new Date(2023, 4, 30, 8, 0, 0),
         end: new Date(2023, 4, 30, 11, 0, 0),
         allDay: false,
         status: 'warning',
      },
      {
         title: 'Meeting',
         start: new Date(2023, 4, 30, 9, 0, 0),
         end: new Date(2023, 4, 30, 10, 0, 0),
         allDay: false,
         status: 'success',
      },
      {
         title: 'Meeting',
         start: new Date(2023, 4, 30, 10, 0, 0),
         end: new Date(2023, 4, 30, 12, 0, 0),
         allDay: false,
         status: 'error',
      },
      {
         title: 'Meeting Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate natus vero eos temporibus iste perferendis hic quo id reprehenderit commodi, numquam sint molestiae placeat sequi? Dicta tempore quo sunt qui.',
         start: new Date(2023, 4, 30, 7, 0, 0),
         end: new Date(2023, 4, 30, 8, 0, 0),
         allDay: false,
      },
      {
         title: 'New meeting nfoerfer',
         start: new Date(2023, 4, 30, 10, 0, 0),
         end: new Date(2023, 4, 30, 11, 0, 0),
         allDay: false,
      },
      {
         title: 'New meeting nfoerfer',
         start: new Date(2023, 4, 30, 12, 0, 0),
         end: new Date(2023, 4, 30, 13, 0, 0),
         allDay: false,
      },
      {
         title: 'New meeting nfoerfer',
         start: new Date(2023, 4, 30, 13, 0, 0),
         end: new Date(2023, 4, 30, 14, 0, 0),
         allDay: false,
      },
      {
         title: 'Meeting',
         start: new Date(2023, 4, 31, 8, 0, 0),
         end: new Date(2023, 4, 31, 11, 0, 0),
         allDay: false,
         status: 'warning',
      },
      {
         title: 'Meeting',
         start: new Date(2023, 4, 31, 9, 0, 0),
         end: new Date(2023, 4, 31, 10, 0, 0),
         allDay: false,
         status: 'success',
      },
      {
         title: 'Meeting',
         start: new Date(2023, 4, 31, 10, 0, 0),
         end: new Date(2023, 4, 31, 12, 0, 0),
         allDay: false,
         status: 'error',
      },
      {
         title: 'Meeting',
         start: new Date(2023, 4, 31, 8, 0, 0),
         end: new Date(2023, 4, 31, 11, 0, 0),
         allDay: false,
         status: 'warning',
      },
      {
         title: 'Meeting',
         start: new Date(2023, 4, 31, 9, 0, 0),
         end: new Date(2023, 4, 31, 10, 0, 0),
         allDay: false,
         status: 'success',
      },
      {
         title: 'Meeting',
         start: new Date(2023, 4, 31, 10, 0, 0),
         end: new Date(2023, 4, 31, 12, 0, 0),
         allDay: false,
         status: 'error',
      },
      {
         title: 'Meeting',
         start: new Date(2023, 4, 31, 8, 0, 0),
         end: new Date(2023, 4, 31, 11, 0, 0),
         allDay: false,
         status: 'warning',
      },
      {
         title: 'Meeting',
         start: new Date(2023, 4, 31, 9, 0, 0),
         end: new Date(2023, 4, 31, 10, 0, 0),
         allDay: false,
         status: 'success',
      },
      {
         title: 'Meeting',
         start: new Date(2023, 4, 31, 10, 0, 0),
         end: new Date(2023, 4, 31, 12, 0, 0),
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
