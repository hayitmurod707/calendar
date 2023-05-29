import moment from 'moment';
import { momentLocalizer } from 'react-big-calendar';
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
      L: 'DD/MM/YYYY',
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
export default localizer;
