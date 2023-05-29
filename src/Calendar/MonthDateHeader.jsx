import { bool, func, string } from 'prop-types';
import styled from 'styled-components';
const StyledMonthDateHeader = styled.button`
   background-color: rgba(82, 85, 241, 0.1);
   border-radius: 12px;
   border: none;
   cursor: pointer;
   font-size: 15px;
   margin: 3px 3px 0 0;
   outline: none;
   padding: 4px 7px;
`;
const MonthDateHeader = ({ isOffRange, label, onDrillDown }) =>
   isOffRange ? null : (
      <StyledMonthDateHeader onClick={onDrillDown}>
         {label}
      </StyledMonthDateHeader>
   );
MonthDateHeader.defaultProps = {
   isOffRange: false,
   label: '',
};
MonthDateHeader.propTypes = {
   isOffRange: bool,
   label: string,
   onDrillDown: func,
};
export default MonthDateHeader;
