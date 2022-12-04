$(function () {
  //Miliseconds of day
  const one_day = 1000 * 60 * 60 * 24;
  const one_hour = 1000 * 60 * 60;
  const one_minute = 1000 * 60;
  const ARRIVAL_DATE = new Date(2075, 08, 23, 13, 30, 00);
  //Countdown function
  const countdownFunc = () => {
    let date_now = new Date();
    let countdownMiliseconds = ARRIVAL_DATE.getTime() - date_now.getTime();

    let days = Math.floor(countdownMiliseconds / one_day);
    let hours = Math.floor((countdownMiliseconds % one_day) / one_hour);
    let minutes = Math.floor((countdownMiliseconds % one_hour) / one_minute);
    let seconds = Math.floor((countdownMiliseconds % one_minute) / 1000);
    $("#days").html(days);
    $("#hours").html(hours);
    $("#minutes").html(minutes);
    $("#seconds").html(seconds);
  };

  //Countdown in beginning
  countdownFunc();
  //Countdown every second
  setInterval(() => {
    countdownFunc();
  }, 1000);
});
