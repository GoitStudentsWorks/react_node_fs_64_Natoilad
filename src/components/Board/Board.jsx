import HeaderDashboard from 'components/HeaderDashboard/HeaderDashboard';
import MainDashboard from 'components/MainDashboard/MainDashboard';

// import BoardIsNotYet from 'components/BoardIsNotYet/BoardIsNotYet';
// import { useState } from 'react';
// import { Conteiner } from 'components/Board/Board.styled';
const Board = () => {
  // const [isItBord, setIsItBord] = useState(true);
  // console.log(setIsItBord);
  return (
    // <Conteiner>
    <>
      <HeaderDashboard title="Name of board" />
      {/* {isItBord ? <MainDashboard /> : <BoardIsNotYet />}; */}
      <MainDashboard />
    </>

    //  </Conteiner>
  );
};
export default Board;
