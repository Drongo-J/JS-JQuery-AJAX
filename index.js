// $(document).ready(function () {
// $("div").find("span").css(
//     {
//         "color":"red",
//         "border":"2px solid orange  "
//     }
// );

// $("div").find("*").css(
//     {
//         "color": "red",
//         "border": "2px solid orange  "
//     }
// );

// $("div").children("p.first").css({
//     "color": "deepskyblue"
// });

// $("span").siblings().css({
//     "color": "red"
// });

// $("div").click(function(){
//     // $(".item").first().hide(200);
//     // $(".item").eq(1).hide(1000);

//     // $("h1").filter(".box").hide(1000);
//     // $("h1").not(".box").hide(1000);

//     // $(this).prevUntil().hide(100); 
//     $(this).nextAll().hide(200);
// });
// });

// $(document).ready(function () {
//     $("div").css({
//         "border": "5px solid red",
//     });
//     $("section").css({
//         "border": "5px solid black",
//     });

//     $("section").click(function (e) {
//         e.stopPropagation();
//         $("#container").find("div").css("border", "5px solid orange");
//     });

//     $("div").click(function (e) {
//         e.stopPropagation();
//         $("#container").find("section").css("border", "5px solid springgreen");
//     });
// });

$(document).ready(function () {

    $("button").click(function () {
        let url = "https://reqres.in/api/users";
        // // $(".container").load(url);

        // $(".container").load(url, function (responseText, statusText, xhr) {
        //     if (statusText == "success") {
        //         $(".container").css("border", "4px solid #00ff7f")
        //         console.log(JSON.parse(responseText));
        //     }
        //     else if (statusText == "error") {
        //         console.log(xhr.status);
        //         console.log(xhr.statusText);
        //         $(".container").css("border", "4px solid red");
        //     }
        // });

        // $.get(url, function(data, status){
        //     $(".container").text(JSON.stringify(data.data));
        //     $(".container").append(`Status ${status}`);

        // });

        let body = {
            name: "John",
            job: "Internship"
        }

        $.post(url, body, function (data, status) {
            let result = data;
            $(".container").html(`<h1>${result.name} - ${result.job}</h1>`)
            console.log(result);
            $(".container").append(`<br/>Status ${status}`);
        });


        $.post()

    });

});
