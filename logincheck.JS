var LSU = localStorage["user"];
var LSK = localStorage["kery"];
console.log(localStorage.getItem("user"));
console.log(localStorage.getItem("kery"));
if (LSU) {
    console.log(LSU);
    console.log(LSK);
    const Lurl = "https://spmoveapi.herokuapp.com/serverauth?user=" + LSU + "&seacret=" + LSK;
    console.log(Lurl);
    xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.status == 500 || xhr.responseText == "ERROR") {
                console.log("error");
            } else if (xhr.status === 200) {
                var res = xhr.responseText;
                console.log(res);
                resp = JSON.parse(res);
                var userval = resp["Name"];
                var keyval = resp["access_token"]["AS"];
                console.log(userval);
                console.log(keyval);
                var spamuser = resp["spamuser"]["userlist"]
                console.log(spamuser);
                $.each(spamuser, function(index, value){
                    console.log(index + ':' + value);
                    $('#userlist').html('');
                    $("#userlist").after('<div class="ui relaxed divided list"><div class="item"><i class="large github middle aligned icon"></i><div class="content"><a class="header">' + value + '</a><div class="description">Updated 10 mins ago</div></div></div>');
                     
                  })
            } else {
                console.log("unknown Error");
            }
        };
    }
    xhr.open("GET", Lurl);
    xhr.send();
} else {

}
