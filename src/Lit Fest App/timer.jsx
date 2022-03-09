import React from 'react';
import moment from 'moment';

export default function Timer(props) {
  const count = (s) => {
    let a = s.split(' ');
    return a[1] + ' ' + a[2].toUpperCase();
  };
  const a = count(moment(props.ddmmyyyy, 'DDMMYYYY').fromNow());
  return <React.Fragment>{a + ' TO GO'}</React.Fragment>;
}
