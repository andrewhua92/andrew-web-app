import React from 'react';
import { Background, MyPaper } from './Styled';
import Content from './Content'

function App() {

  return (
    <Background>
      <div textAlign='center'>
        <MyPaper>
          <Content/>
        </MyPaper>
      </div>
    </Background>
  );
}

export default App;
