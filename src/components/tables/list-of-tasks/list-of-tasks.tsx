import React, {useState} from 'react';
import './list-of-tasks.scss';
import {EcCheckbox} from '../../../toolkit/ec-checkbox/ec-checkbox';

type Task = {
  id: string;
  number: string;
  purposeOfTheRoom: string;
  address: string;
  interest: number;
}

type TaskTableProps = {
  data: Task[];
  title?: string;
  selectedTasks: string[];
  setSelectedTasks: (tasks: string[]) => void;
}

const headers = [
  {
    title: '',
    field: '',
    sortable: false,
  },
  {
    title: '№',
    field: 'number',
    sortable: true,
  },
  {
    title: 'Назначение помещения',
    field: 'purpose',
    sortable: true,
  },
  {
    title: 'Адрес',
    field: 'address',
    sortable: true,
  },
  {
    title: '%',
    field: 'interest',
    sortable: true,
  },
]

export const TaskTable = (props: TaskTableProps) => {
  const [sortByField, setSortByField] = useState('');
  const [ascending, setAscending] = useState(false);

  const handleChange = (selectedId: string) => {
    if(props.selectedTasks.includes(selectedId)) {
      const tasks = props.selectedTasks.filter(id => id !== selectedId);
      props.setSelectedTasks(tasks);
    } else {
      props.setSelectedTasks([...props.selectedTasks, selectedId])
    }
  }

  const isSelected = (id: string): boolean => {
    return props.selectedTasks.includes(id);
  }

  const sortByNumber = (field: string) => {
    console.log(field)
    if(!sortByField) {
      setSortByField(field);
      return;
    }
    if(sortByField !== field) {
      setSortByField(field)
      setAscending(false);
      return;
    }
    if(sortByField === field && !ascending) {
      setAscending(true)
      return;
    } else {
      setSortByField('')
      setAscending(false);
    }
  }

  const isSorted = (field: string) => {
    return field === sortByField;
  }

  return (
    <div className="tasks">
      {props.title && <div className="tasks__label">{props.title}</div>}
      <table className="tasks__table">
        <thead className="tasks__head">
          <tr>
            {
              headers.map((item, index) => {
                if(item.sortable) {
                  return <th className="tasks__item tasks__item--sortable" onClick={() => sortByNumber(item.field)} key={index}>
                           {item.title}
                           <span className={`tasks__item-img tasks__item-img--${ascending && 'ascending'}`}>{isSorted(item.field) && <img src={require('../../../down.png')} alt="down"/>}</span>
                         </th>
                } else {
                  return <th className="tasks__item" key={index}></th>
                }
              })
            }
          </tr>
        </thead>
        <tbody className="tasks__body">
          {
            props.data.map(item => {
              return <tr className="tasks__row" key={item.id}>
                       <td className="tasks__item tasks__item--center">
                         <EcCheckbox circle value={isSelected(item.id)} onChange={() => handleChange(item.id)}/>
                       </td>
                       <td className="tasks__item">{item.number}</td>
                       <td className="tasks__item">{item.purposeOfTheRoom}</td>
                       <td className="tasks__item">{item.address}</td>
                       <td className="tasks__item">{item.interest}</td>
                     </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
} 