import type { FC } from 'react';
import './App.css'
import MyList, { type List } from './MyList';
import MyPicture from './MyPicture';
import Describe from './Describe'

const App: FC =()=> {
  const lists:List[]=[
    {
     id:"2020/03",
     description:"中学卒業"
    },{
      id:"2020/04",
      description:"沖縄尚学高等学校入学"
    },{
     id:"2023/03",
     description:"沖縄尚学高等学校卒業"
    },{
      id:"2023/04",
      description:"琉球大学入学"
    }

  ]
  return (
    <>
      
      <h1>自己紹介</h1>
      <MyPicture/>
      <MyList Lists={lists} />
      <Describe/>

    </>
  )
}

export default App
