var topic = 
[
    "向未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性"
];

var startDate = new Date();
var inputDate = window.prompt("輸入日期", "1/1");
var Date_arr;
Date_arr = inputDate.split('/');
//alert(Date_arr[0] + "    " + Date_arr[1]);
function setMonthAndDay(startMonth, startDay)
{
    startDate.setMonth(startMonth - 1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}
setMonthAndDay(parseInt(Date_arr[0]),parseInt(Date_arr[1]));
//setMonthAndDay(5,5);