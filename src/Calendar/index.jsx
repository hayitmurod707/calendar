import moment from 'moment';
import { any, array, func } from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import {
   Calendar as ReactBigCalendar,
   momentLocalizer,
} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styled from 'styled-components';
import Toolbar from './Toolbar';
moment.locale('uz', {
   months: [
      'Yanvar',
      'Fevral',
      'Mart',
      'Aprel',
      'May',
      'Iyun',
      'Iyul',
      'Avgust',
      'Sentyabr',
      'Oktyabr',
      'Noyabr',
      'Dekabr',
   ],
   monthsShort: [
      'Yan',
      'Fev',
      'Mar',
      'Apr',
      'May',
      'Iyun',
      'Iyul',
      'Avg',
      'Sen',
      'Okt',
      'Noy',
      'Dek',
   ],
   monthsParseExact: true,
   weekdays: [
      'Dushanba',
      'Seshanba',
      'Chorshanba',
      'Payshanba',
      'Juma',
      'Shanba',
      'Yakshanba',
   ],
   weekdaysShort: ['Ya', 'Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh'],
   weekdaysMin: ['Ya', 'Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh'],
   weekdaysParseExact: true,
   longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm',
   },
   calendar: {
      sameDay: '[Aujourd’hui à] LT',
      nextDay: 'Keyingi Kun',
      nextWeek: 'Keyingi Hafta',
      lastDay: '[Hier à] LT',
      lastWeek: 'dddd [dernier à] LT',
      sameElse: 'L',
   },
   relativeTime: {
      future: 'dans %s',
      past: 'il y a %s',
      s: 'quelques secondes',
      m: 'une minute',
      mm: '%d minutes',
      h: 'une heure',
      hh: '%d heures',
      d: 'un jour',
      dd: '%d jours',
      M: 'un mois',
      MM: '%d mois',
      y: 'un an',
      yy: '%d ans',
   },
   dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
   ordinal: function (number) {
      return number + (number === 1 ? 'er' : 'e');
   },
   meridiemParse: /PD|MD/,
   isPM: input => {
      return input.charAt(0) === 'M';
   },
   meridiem: (hours, minutes, isLower) => {
      return hours < 12 ? 'PD' : 'MD';
   },
   week: {
      dow: 1,
      doy: 4,
   },
});
const localizer = momentLocalizer(moment);
const calendarConfig = {
   endAccessor: 'end',
   localizer,
   messages: {
      agenda: 'Kun tartibi',
      allDay: 'Kun davomida',
      date: 'Sana',
      day: 'Kun',
      event: 'Hodisa',
      month: 'Oy',
      next: 'Keyingi',
      noEventsInRange: 'Hodisalar mavjud emas',
      previous: 'Orqaga',
      showMore: total => `Yana ${total}ta`,
      time: 'Vaqt',
      today: 'Bugun',
      tomorrow: 'Ertaga',
      week: 'Hafta',
      work_week: 'Ish haftasi',
      yesterday: 'Kecha',
   },
   startAccessor: 'start',
   style: {
      width: '100%',
   },
   views: ['month', 'week', 'work_week', 'day', 'agenda'],
};
const StyledCalendar = styled.div`
   border-radius: 14px;
   border: 1px solid #e2e4ea;
   height: 100%;
   overflow: hidden;
   width: 100%;
   & .rbc-today {
      background-color: rgba(82, 85, 241, 0.1);
   }
   & .rbc-month-view {
      border-color: #e2e4ea;
      border-style: solid;
      border-width: 1px 0 0 0;
      & .rbc-month-header {
         & .rbc-header {
            border-bottom: 1px solid #e2e4ea;
            font-size: 16px;
            padding: 8px 0;
         }
         & .rbc-header + .rbc-header {
            border-left: 1px solid #e2e4ea;
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
               & .rbc-row-segment {
                  & .rbc-show-more {
                     background-color: transparent;
                     border-radius: 8px;
                     color: #0071f2;
                     padding: 2px 4px;
                  }
               }
            }
         }
         & .rbc-row-bg {
            & .rbc-day-bg + .rbc-day-bg {
               border-left: 1px solid #e2e4ea;
            }
         }
      }
   }
   & .rbc-time-view {
      border: none;
      border-top: 1px solid #e2e4ea;
      & .rbc-time-header {
         border-left: none;
         & .rbc-time-header-content {
            border-left: 1px solid #e2e4ea;
            font-size: 16px;
            vertical-align: center;
            & .rbc-header {
               align-items: center;
               border-bottom: 1px solid #e2e4ea;
               display: flex;
               justify-content: center;
               padding: 0;
               &:last-child {
                  padding: 0 6px 0 0;
               }
               & .rbc-button-link {
                  font-size: 15px;
                  padding: 13px 0;
                  width: 100%;
               }
            }
            & .rbc-header + .rbc-header {
               border-left: 1px solid #e2e4ea;
            }
            & .rbc-row-bg {
               padding: 0 6px 0 0;
               & .rbc-day-bg + .rbc-day-bg {
                  border-left: 1px solid #e2e4ea;
               }
            }
         }
      }
      & .rbc-time-content {
         border-top: 1px solid #e2e4ea;
         margin: 0 0 -1px 0;
         &::-webkit-scrollbar {
            padding: 0 5px 0 0;
            width: 6px;
         }
         &::-webkit-scrollbar-track {
            background-color: transparent;
         }
         &::-webkit-scrollbar-thumb {
            background-color: #0071f2;
            border-radius: 3px;
         }
         & .rbc-day-slot {
            & .rbc-timeslot-group {
               border-bottom: 1px solid #e2e4ea;
               & .rbc-time-slot {
                  border-top: none;
               }
            }
            & .rbc-events-container {
               border-left: 1px solid #e2e4ea;
            }
         }
         & .rbc-time-gutter {
            & .rbc-timeslot-group {
               align-items: center;
               border-bottom: 1px solid #e2e4ea;
               display: flex;
               flex: initial;
               font-size: 15px;
               justify-content: center;
               padding: 2px 6px;
               & .rbc-time-slot {
                  align-items: center;
                  display: flex;
                  height: 100%;
                  justify-content: center;
                  width: 100%;
                  &:nth-child(2) {
                     display: none;
                  }
               }
            }
         }
      }
   }
`;
const StyledEventWrapper = styled.div`
   &[data-status='success'] {
      & .rbc-event {
         background-color: #64bc26;
      }
   }
   &[data-status='warning'] {
      & .rbc-event {
         background-color: #fad202;
      }
   }
   &[data-status='info'] {
      & .rbc-event {
         background-color: #0071f2;
      }
   }
   &[data-status='error'] {
      & .rbc-event {
         background-color: #ea1601;
      }
   }
   & .rbc-event {
      background-color: #0071f2;
      border-radius: 8px;
      border: none;
      padding: 4px 8px;
      display: flex;
      flex-direction: column;
      &:focus {
         outline: none;
      }
      & .rbc-event-content {
         font-size: 15px;
      }
      & .rbc-event-label {
         padding: 0 0 3px 0;
      }
   }
`;
const StyledMonthDateHeader = styled.button`
   background-color: rgba(82, 85, 241, 0.1);
   border-radius: 12px;
   border: none;
   cursor: pointer;
   font-size: 15px;
   margin: 3px 3px 0 0;
   min-width: 24px;
   outline: none;
   padding: 4px 7px;
`;
const EventWrapper = ({ children, event }) => (
   <StyledEventWrapper data-status={event?.status}>
      {children}
   </StyledEventWrapper>
);
const MonthDateHeader = ({ isOffRange, label }) =>
   isOffRange ? null : (
      <StyledMonthDateHeader>
         {String(label).startsWith('0') ? label.slice(1) : label}
      </StyledMonthDateHeader>
   );
const Calendar = ({ events, date, onNavigate }) => {
   const [view, setView] = useState('month');
   const [event, setEvent] = useState(null);
   const components = useMemo(
      () => ({
         toolbar: Toolbar,
         month: {
            dateHeader: MonthDateHeader,
         },
         eventWrapper: EventWrapper,
      }),
      []
   );
   const defaultDate = useMemo(() => date, [date]);
   const onDrillDown = (date, view) => {
      setView(view);
      onNavigate(date);
   };
   useEffect(() => {
      console.log(event);
   }, [event]);
   useEffect(() => {
      const listener = e => {
         if (e.target.tagName === 'BODY') {
            switch (e.code) {
               case 'KeyM':
                  setView('month');
                  break;
               case 'KeyW':
                  setView('week');
                  break;
               case 'KeyD':
                  setView('day');
                  break;
               case 'KeyA':
                  setView('agenda');
                  break;
               default:
                  break;
            }
         }
      };
      document.addEventListener('keydown', listener);
      return () => {
         document.removeEventListener('keydown', listener);
      };
   }, []);
   return (
      <StyledCalendar>
         <ReactBigCalendar
            {...calendarConfig}
            components={components}
            date={defaultDate}
            events={events}
            onDrillDown={onDrillDown}
            onNavigate={onNavigate}
            onSelectEvent={setEvent}
            onView={setView}
            view={view}
         />
      </StyledCalendar>
   );
};
Calendar.defaultProps = {
   date: new Date(),
   events: [],
};
Calendar.propTypes = {
   date: any,
   events: array,
   onNavigate: func,
};
export default Calendar;
