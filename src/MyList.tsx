import type { FC } from 'react';
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
      <>
        <h2>経歴</h2>
        <ul>
          {Lists.map((list) => (
            <li key={list.id}>
                {list.id}&nbsp;&nbsp;{list.description}
            </li>
          ))}
        </ul>
      </>
    );
  };
  
  export default MyList;