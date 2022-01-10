import styled from 'styled-components';

export const AppContainer = styled.div`
  margin: 0 auto;
  
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;


  @media screen and (${props => props.theme.breakpoints.tablet}){
    margin: auto;
    text-align: center;

    max-width: 768px;
    height: 100%;
    width: 100%;
  }
`;
