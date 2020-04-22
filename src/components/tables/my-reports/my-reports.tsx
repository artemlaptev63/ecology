import React from 'react';
import moment from 'moment';
import './my-reports.scss';

type Report = {
  id: string;
  numberOfReport: string;
  dateOfFormation: Date;
  dateOfApproval: Date;
  dateOfApplication: Date;
  status: string;
  interest: number;
  history: string;
}

type MyReportsTableProps = {
  data: Report[];
  sortBy: string;
  title?: string;
}

export const MyReportsTable = (props: MyReportsTableProps) => {
  return (
    <div className="my-reports">
      {props.title && <div className="my-reports__label">{props.title}</div>}
      <table className="my-reports__table">
        <thead className="my-reports__head">
          <tr>
            <th className="my-reports__item">Номер отчета</th>
            <th className="my-reports__item">Дата формирования</th>
            <th className="my-reports__item">Дата подачи</th>
            <th className="my-reports__item">Дата согласования</th>
            <th className="my-reports__item">Статус</th>
            <th className="my-reports__item">Заполнено</th>
            <th className="my-reports__item">История</th>
          </tr>
        </thead>
        <tbody className="my-reports__body">
          {
            props.data.map(item => {
              return <tr key={item.id} className="my-reports__row" onClick={() => console.log(item.id)}>
                      <td className="my-reports__item">{item.numberOfReport}</td>
                      <td className="my-reports__item">{moment(item.dateOfFormation).format('DD/MM/YYYY')}</td>
                      <td className="my-reports__item">{moment(item.dateOfApproval).format('DD/MM/YYYY')}</td>
                      <td className="my-reports__item">{moment(item.dateOfApplication).format('DD/MM/YYYY')}</td>
                      <td className="my-reports__item">{item.status}</td>
                      <td className="my-reports__item">{item.interest} %</td>
                      <td className="my-reports__item">{item.history}</td>
                    </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
} 