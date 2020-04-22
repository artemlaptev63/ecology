import React from 'react';
import './ec-file-list.scss';

type EcFileListProps = {
  files: string[];
  deleteFile: (index: number) => void;
}

export const EcFileList = (props: EcFileListProps) => {
  return (
    <>
      {
        !!props.files.length && props.files.map((item, index) => {
          if (item.includes('data:application/pdf')) {
            return <div className="item-container" key={index}>
                     <div className="item-container__file">.PDF</div>
                     <img className="item-container__trash" src={require('../../trash.png')} 
                          alt="trash" onClick={() => props.deleteFile(index)}/>
                   </div>
          } else if (item.includes('data:text/plain')) {
            return <div className="item-container" key={index}>
                     <div className="item-container__file">.TXT</div>
                     <img className="item-container__trash" src={require('../../trash.png')} 
                          alt="trash" onClick={() => props.deleteFile(index)}/>
                   </div>
          } else if (item.includes('data:application/msword')) {
            return <div className="item-container" key={index}>
                     <div className="item-container__file">.DOC</div>
                     <img className="item-container__trash" src={require('../../trash.png')} 
                          alt="trash" onClick={() => props.deleteFile(index)}/>
                   </div>
          } else {
            return <div className="item-container" key={index}>
                     <img src={item} className="item-container__image"/>
                     <img className="item-container__trash" src={require('../../trash.png')} 
                          alt="trash" onClick={() => props.deleteFile(index)}/>
                   </div>
          }
        })
      }
    </>
  )
}
