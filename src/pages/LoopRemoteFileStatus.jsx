import React, { useState } from 'react';

export default function LoopRemoteFileStatus() {


  // const loopFetchStatus = (productId) => {

  //   let loop = setInterval(async () => {
  //     // const res = await SystemPlusFileService.queryExportStatus(productId);
  //     const msg = res.results || {};

  //     if (msg === "error") {
  //       clearInterval(loop);
  //       message.error(res.errorMessage);

  //       return;
  //     }

  //     if (msg === "finish") {
  //       clearInterval(loop);
  //       // const csvData = await SystemPlusFileService.downloadExportCsv(productId);

  //       if (csvData.errorCode) {
  //         message.error(csvData.errorMessage);

  //         return;
  //       }
  //       downloadLocalFile(csvData, "export.csv");
  //     }



  //   }, 1000)
  // }


  return <>
    LoopRemoteFileStatus
  </>
}
