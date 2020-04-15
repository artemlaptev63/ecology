import React, {useEffect} from 'react';

export const ThirdNestedComponent = () => {
  useEffect(() => {
    console.log('3 is mounted')

    return () => console.log('3 is unmounted')
  }, [])
  return (
    <div>ThirdNestedComponent</div>
  )
}