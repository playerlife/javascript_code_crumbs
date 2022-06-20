import React, { useState } from 'react';

export default function UniqueObjcts() {

  // merge & remove the element with same id in arrays
  let array1 = [{ id: 1, name: "tony" }, { id: 2, name: "Eric" }];
  let array2 = [{ id: 1, name: "tony" }, { id: 2, name: "Eric" }, { id: 3, name: "Eric1" }];
  let fullArray = array1.concat(array2);
  let objs = [];
  let ids = [];

  fullArray.forEach(item => {
    if (ids.includes(item.id) === false) {
      ids.push(item.id);
      objs.push(item);

    }
  })

  return <>
    <b>array1 is</b> {JSON.stringify(array1)}
    <br />
    <b>array2 is</b> {JSON.stringify(array2)}
    <br />

    after merge unique id: <b>{JSON.stringify(objs)}</b>
  </>
}
