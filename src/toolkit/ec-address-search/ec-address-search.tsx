import React, {useRef, useEffect, useState} from 'react';
import {EcInput} from '../ec-input/ec-input';
import {throttle} from 'throttle-debounce';
import './ec-address-search.scss';

type OptionAddress = {
  id: string;
  latlng: number[];
  addressName: string;
}

type AddresSearchSelectProps = {
  setAddressAndChangePosition: (item: OptionAddress) => void;
  setAddress: (value: string) => void;
  addressName: string;
  addressSuggestions: OptionAddress[];
  searchSuggestions: (value: string) => void;
  addressLoading?: boolean;
}

export const AddresSearchSelect = (props: AddresSearchSelectProps) => {
  const {setAddress, addressName, addressSuggestions, searchSuggestions, addressLoading} = props;
  const [isOpen, setIsOpen] = useState(false);

  const throttled = useRef(throttle(1000, (address: string) => searchSuggestions(address)));
  // const inputSearch = useRef<HTMLInputElement>(null);
  const searchContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('change')
    throttled.current(addressName)
  }, [addressName]);

  const itemPress = (item: OptionAddress) => {
    props.setAddressAndChangePosition(item);
    // setAddress(item.addressName);
    // changePosition(item.latlng[0], item.latlng[1]);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    let isClickInside;
    if(searchContainer.current) {
      isClickInside = searchContainer.current.contains(event.target as Node);
    }

    if (!isClickInside) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])
  
  return ( 
    <div className="address-search" ref={searchContainer}>
      <EcInput onFocus={() => setIsOpen(true)} 
               valueChange={setAddress} 
               value={addressName} 
               placeholder="Введите адресс" 
               label="Адресс"
               name="address-search"/>
      {
        isOpen &&
          <ul className="address-search__list">
            { !addressLoading && !!addressSuggestions.length &&
              addressSuggestions.map(item => {
                return <li onClick={() => itemPress(item)} 
                           key={item.id}
                           className="address-search__item">
                        {item.addressName}
                       </li>
              })
            }
            {addressLoading && <li className="address-search__item address-search__item--center">Loading...</li>}
            {!addressLoading && !addressSuggestions.length && <li className="address-search__item address-search__item--center">Empty</li>}
          </ul>
      }
    </div>
  )
}