const moment = require("moment");

module.exports = () => {
  const year = moment().format("YYYY");
  const month = moment().format("MM");
  const day = moment().format("DD");
  const dddd = moment().format("dddd");
  const hour = moment().format("HH");
  const minute = moment().format("mm");
  const second = moment().format("ss");

  return {
    year,
    month,
    day,
    dddd,
    hour,
    minute,
    second,
  };
};
