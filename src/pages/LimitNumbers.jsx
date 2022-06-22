import React, { useState } from 'react';

export default function LimitNumbers() {


  // 限制小数点后2位
  const limitDecimals = (value) => {
    const reg = /^(\-)*(\d+)\.(\d\d).*$/;
    if (typeof value === "string") {
      return !isNaN(Number(value)) ? value.replace(reg, "$1$2.$3") : "";
    } else if (typeof value === "number") {
      return !isNaN(value) ? String(value).replace(reg, "$1$2.$3") : "";
    } else {
      return "";
    }
  };

// 限制只输入数字
  const limitNumber = (value) => {
    if (typeof value === "string") {
      return !isNaN(Number(value)) ? value.replace(/^(0+)|[^\d]/g, "") : "";
    } else if (typeof value === "number") {
      return !isNaN(value) ? String(value).replace(/^(0+)|[^\d]/g, "") : "";
    } else {
      return "";
    }
  };


  return <>
   LimitNumbers
  </>
}
