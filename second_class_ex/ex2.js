var last_f = -1;//全域變數
var last_d = -1;
$(function(){
    $("input").on("click", function(){
        //alert($("#food li").length); //找到特定id中的li數
        var f_number0fListItem = $("#food li").length;
        var f_randomChildNumber = Math.floor(Math.random() * f_number0fListItem);
        while(last_f == f_randomChildNumber)
        {
            f_randomChildNumber = Math.floor(Math.random() * f_number0fListItem);
        }
        last_f = f_randomChildNumber;
        var d_number0fListItem = $("#drink li").length;
        var d_randomChildNumber = Math.floor(Math.random() * d_number0fListItem);
        while(last_d == d_randomChildNumber)
        {
            d_randomChildNumber = Math.floor(Math.random() * d_number0fListItem);
        }
        last_d = d_randomChildNumber;
        var food_arr = $("#food li").eq(f_randomChildNumber).text().split(" $");
        var drink_arr = $("#drink li").eq(f_randomChildNumber).text().split(" $");
        //alert($("food").eq(randomChildNumber).text());
        $("h1").text(food_arr[0] + " + " + drink_arr[0]);
        //alert($("ul li").eq(randomChildNumber).text() + ".jpg");
        $("#food_img").attr("src",food_arr[0] + ".jpg");
        $("#drink_img").attr("src",drink_arr[0] + ".jpg");
        var total = parseInt(food_arr[1])+parseInt(drink_arr[1]);
        $("#sum").text("總計: " + total);
    });
});