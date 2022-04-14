const datepicker = () => {
  var now = new Date();
  var today =
    now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
  return today;
};

export default datepicker;
