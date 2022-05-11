function tokenIsReissuance(response) {
  if (response === "tokenIssued") {
    console.log("redirect 실행");
    return true;
  } else {
    return false;
  }
}

function urlAndData(req) {
  return `/api/load-sensor-data/test?url=${req.originalUrl.substring(
    4
  )}&startDate=${req.body.startDate}&endDate=${req.body.endDate}`;
}

function simpleUrlAndData(req) {
  return `/api/re-request/simple?url=${req.originalUrl.substring(
    4
  )}&deviceName=${req.body.deviceName}&active=${req.body.active}`;
}

module.exports = {
  tokenIsReissuance,
  urlAndData,
  simpleUrlAndData,
};
