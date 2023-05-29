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
      max-width: 100%;
      width: 800px;
   }
`;
const App = () => {
   return (
      <StyledElement>
         <h1 style={{ textAlign: 'center', margin: 0 }}>Calendar Component</h1>
         <h4 style={{ textAlign: 'center', margin: '15px 0' }}>
            <a href='https://github.com/hayitmurod707/calendar'>Github</a>
         </h4>
         <div className='content'>
            <Calendar />
         </div>
      </StyledElement>
   );
};
export default App;
