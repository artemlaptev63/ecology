import React from 'react';
import './ec-pagination.scss';

type EcPagination = {
  activePage: number;
  allPages: number;
  setActivePage: (activePage: number) => void;
}

export const EcPagination = ({activePage, allPages, setActivePage}: EcPagination) => {
  const getNavigation = () => {
    if(activePage < 2) {
      return calculateNavigation(0, allPages < 5 ? allPages : 5);
    } else if (activePage === allPages - 1 || activePage === allPages - 2) {
      return calculateNavigation(allPages < 5 ? 0 : allPages - 5, allPages);
    } else {
      return calculateNavigation(activePage - 2, activePage + 3);
    }
  };

  const calculateNavigation = (start: number, end: number) => {
    let nav = [];
    for (let i = start; i < end; i++) {
      nav.push(<span onClick={() => setActivePage(i)} 
                     key={i}
                     className={`pagination__item pagination__item--${activePage === i && 'active'}`}>
                 {i + 1}
                </span>);
    }
    return nav;
  }

  return (
    <div className="pagination">
      <button className="pagination__button" disabled={activePage === 0} onClick={() => setActivePage(0)}>{'<<'}</button>
      <button className="pagination__button" disabled={activePage === 0} onClick={() => setActivePage(activePage - 1)}>{'<'}</button>
      {getNavigation()}
      <button className="pagination__button" disabled={activePage === allPages - 1} onClick={() => setActivePage(activePage + 1)}>{'>'}</button>
      <button className="pagination__button" disabled={activePage === allPages - 1} onClick={() => setActivePage(allPages - 1)}>{'>>'}</button>
    </div>
  )
}