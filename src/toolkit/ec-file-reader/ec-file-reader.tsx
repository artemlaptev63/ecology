import React, {useRef} from 'react';
import './ec-file-reader.scss';
import {EcFileList} from './ec-file-list';

type EcFileReaderProps = {
  files: string[];
  setFiles: (files: string[]) => void;
  deleteFile: (index: number) => void;
}

export const EcFileReader = (props: EcFileReaderProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const readFile = (selectorFiles: FileList | null) => {
    if(selectorFiles) {
      for (let el of Array.from(selectorFiles)) {
        const reader = new FileReader();
        reader.readAsDataURL(el);
        reader.addEventListener('progress', (e) => {
          console.log(e);
        })
        reader.onload = () => {
          props.setFiles([reader.result as string]);
          if(inputRef.current) {
            inputRef.current.value = '';
          }
          
        }
        reader.onerror = () => {
          console.log(reader.error);
        }
      }
    }
  }

  return (
    <div className="file-reader">
      <EcFileList files={props.files} deleteFile={props.deleteFile}/>
      <label className="file-reader__label">
        <input type="file" onChange={(e) => readFile(e.target.files)} ref={inputRef} multiple className="file-reader__control"/>
        +
      </label>
    </div>
  )
}
