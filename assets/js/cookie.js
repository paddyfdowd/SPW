document.getElementById("setcookie").addEventListener("click", function () {
    setCookie("test", 12345, 20);
});
document.getElementById("getcookie").addEventListener("click", function () {
    getCookie("test");
});

function setCookie(cname, cvalue, exseconds) {
    alert(cname + cvalue + exseconds)
    const d = new Date();
    d.setTime(d.getTime() + (exseconds * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    alert(expires);
}

function getCookie(cname) {

    var allcookies = document.cookie;
    alert(allcookies)

    /* // Get all the cookies pairs in an array
       cookiearray = allcookies.split(';');
       
       // Now take key value pair out of this array
       for(var i=0; i<cookiearray.length; i++) {
          name = cookiearray[i].split('=')[0];
          value = cookiearray[i].split('=')[1];
          document.write ("Key is : " + name + " and Value is : " + value);
       } */
}