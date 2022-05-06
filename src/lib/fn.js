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
module.exports = {
  tokenIsReissuance,
  urlAndData,
};
