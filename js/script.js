function changeCol(col){
    document.getElementsByTagName("body").style.background = col;
}

var incr = 0;
var imageArray = ["cat", "dog", "mouse"];

function imageSlideShow() {
    var timer = setInterval(function() {
    incr += 1;
        if(incr >= imageArray.length){
            incr = 0;
        }
        document.getElementById("slider").src ="img/" + imageArray[incr] + ".jpg";
        console.log(imageArray[incr] + ".jpg");
    },1000);
}



imageSlideShow();
