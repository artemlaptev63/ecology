import React, {useState} from 'react';
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import {AddresSearchSelect} from '../toolkit/ec-address-search/ec-address-search';
import {EcMap} from '../toolkit/ec-map/ec-map';

const mockData = [
  {
    addressName: 'Самара',
    id: '1',
    latlng: [53.24160131977871, 50.22020101547242]
  },
  {
    addressName: 'Самара второй адресс',
    id: '2',
    latlng: [53.2433380532142, 50.22620379924774]
  },
  {
    addressName: 'Самара 3 адресс',
    id: '3',
    latlng: [52.24160131977871, 49.22020101547242]
  },
  {
    addressName: 'Самара 4 адресс',
    id: '4',
    latlng: [54.24160131977871, 52.22020101547242]
  },
  {
    addressName: 'Самара 5 адресс',
    id: '5',
    latlng: [52.24160131977871, 54.22020101547242]
  },
  {
    addressName: 'Самара 6 адресс',
    id: '6',
    latlng: [55.24160131977871, 51.22020101547242]
  },
  {
    addressName: 'Самара 7 адресс',
    id: '7',
    latlng: [48.24160131977871, 60.22020101547242]
  }
];

const mockDataFromApi = [
  {
    addressName: 'Красный Яр',
    id: '8',
    latlng: [53.50025551980703, 50.39229154586792]
  },
  {
    addressName: 'Красный Яр второй адресс',
    id: '9',
    latlng: [51.2433380532142, 50.22620379924774]
  },
  {
    addressName: 'Красный Яр 3 адресс',
    id: '10',
    latlng: [55.24160131977871, 50.22020101547242]
  },
  {
    addressName: 'Красный Яр 4 адресс',
    id: '11',
    latlng: [52.24160131977871, 50.22020101547242]
  },
  {
    addressName: 'Красный Яр 5 адресс',
    id: '12',
    latlng: [55.24160131977871, 50.22020101547242]
  },
  {
    addressName: 'Красный Яр 6 адресс',
    id: '13',
    latlng: [51.24160131977871, 50.22020101547242]
  },
  {
    addressName: 'Красный Яр 7 адресс',
    id: '14',
    latlng: [53.24160131977871, 50.22020101547242]
  }
];

export type OptionAddress = {
  addressName: string;
  id: string;
  latlng: number[];
}

export const AddressWithMapSearch = () => {
  const [position, setPosition] = useState<number[]>([53.241505, 50.221245]); // lat lng
	
  const [addressSuggestions, setAddressSuggestions] = useState<OptionAddress[]>([]);

  const [address, setAddress] = useState('');
  
  
  const callApi = (address: string) => {
    if(!address) {
      setAddressSuggestions([])
    } else {
      setAddressSuggestions(mockData)
    }
  }
	
  const changeMarkerPosition = (lat: number, lng: number) => {
    // setAddressSuggestions([]);
    setPosition([lat, lng]);
    // get Address name from api
    setAddress('new address from map marker');
    // update suggestions
  }

  const changeAddress = (item: OptionAddress) => {
    setPosition([item.latlng[0], item.latlng[1]])
    setAddress(item.addressName);
  };

  return (
    <div>
      {/* <EcInput valueChange={autocomplete} value={value} placeholder='' label=''/> */}
			<AddresSearchSelect setAddressAndChangePosition={changeAddress} 
													setAddress={setAddress} 
													addressName={address} 
													addressSuggestions={addressSuggestions}
                          searchSuggestions={callApi}/>
      <EcMap position={position} changePosition={changeMarkerPosition}/>
    </div>
  );
};

