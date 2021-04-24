var flag = 0;
$(function () {
    $(window).scroll(function () {
    var scrollVal = $(this).scrollTop();
    //document.getElementById("test").innerHTML = scrollVal;
    if( 95 < scrollVal && scrollVal < 130 && flag == 0)
    {
        $(".modal").css("visibility","visible");
        flag = 1;
    }
    });
});

$("#judge_1").click(function()
{
    $(".modal").css("visibility","hidden");
    var talk = "<div class = 'chatOdd'>" + "<img src = '水餃.jpg' alt = '水餃'>"+"<div class = 'TriAngleToLeft'></div>"+
               "<div class = 'textLeft'>那我們去港式燒拉店吧</div></div>"+
               "<div class = 'chatEven'>" + "<img src = '拉麵.jpg' alt = '拉麵'>"+"<div class = 'TriAngleToRight'></div>"+
               "<div class = 'textRight'>好啊! 現在就去吃吧</div></div>";
    $(".after_talk").append(talk);
});
$("#judge_2").click(function()
{
    $(".modal").css("visibility","hidden");
    var talk = "<div class = 'chatOdd'>" + "<img src = '水餃.jpg' alt = '水餃'>"+"<div class = 'TriAngleToLeft'></div>"+
               "<div class = 'textLeft'>那我們去腿庫飯便當店吧</div></div>"+
               "<div class = 'chatEven'>" + "<img src = '拉麵.jpg' alt = '拉麵'>"+"<div class = 'TriAngleToRight'></div>"+
               "<div class = 'textRight'>好啊! 現在就去吃吧</div></div>";
    $(".after_talk").append(talk);
});