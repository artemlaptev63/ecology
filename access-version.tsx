import React, {useState} from 'react';
import '../src/App.scss';

export const AccessVersionControl = () => {
  const [access, setAccess] = useState(false);
  const [accessDark, setAccessDark] = useState(false);

  const toggleTheme = () => {
    const html = document.querySelector("html");
    if(access) {
      html?.classList.remove('access', 'dark');
    } else {
      html?.classList.add('access');
    }
    setAccess(!access);
    setAccessDark(false);
  };

  const activeLight = () => {
    document.querySelector("html")?.classList.remove('dark')
    setAccessDark(false)
  }

  const activeDark = () => {
    document.querySelector("html")?.classList.add('dark')
    setAccessDark(true)
  }

  return (
    <div className="App">
      <div onClick={toggleTheme}>toggle</div>
      {access && <><div onClick={activeLight}>light</div><div onClick={activeDark}>dark</div></>}
      <div className='test'>привет</div>
    </div>
  );
};