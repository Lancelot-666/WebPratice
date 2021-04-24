$(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    var topicCount = topic.length;
    //alert(topicCount);
    //一秒鐘有1000毫秒
    //每分鐘60秒、每小時60分鐘、每天24小時
    var millisecsPerDay = 24*60*60*1000;
    for(var x = 0; x < topicCount; x++)
    {
        $("#courseTable").append("<tr>");
        $("#courseTable").append(`<td>${x+1}</td>`);
        //alert("test1");
        if(topic[x] != "環境準備")
        {
           //alert("test2")
           style = "border-bottom: 1px solid blue;"
           $("#courseTable").append(`<td>${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().slice(5)}</td>`);
           $("#courseTable").append(`<td style = "color: gray">${topic[x]}</td>`);
           $("#courseTable").append("</tr>");
        }
        else
        {
            $("#courseTable").append(`<td>${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().slice(5)}</td>`);
            $("#courseTable").append(`<td>${topic[x]}</td>`);
            $("#courseTable").append("</tr>");
        }
    }
});