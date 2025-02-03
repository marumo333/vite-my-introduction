import type { FC } from 'react';
import React from 'react'; // これを追加
import "./MyList.css"
export interface List {
    id: string;
    description: string;
  }

  type Props = {
    Lists: List[];
  };

  const MyList: FC<Props> = ({ Lists }) => {
    return (
      <React.Fragment>
        <h2>経歴</h2>
        <ul>
          {Lists.map((list) => (
            <li key={list.id}>
                {list.id}&nbsp;&nbsp;{list.description}
            </li>
          ))}
        </ul>
        </React.Fragment>
    );
  };
  
  export default MyList;