/**
 * Created by 89418 on 2017/3/4.
 */
window.onload = function(){
    scrollBar();
}
function scrollBar(){

    var leftBar = document.getElementsByClassName("cate-left")[0];
    var rightBar = document.getElementsByClassName("cate-right")[0];
    var partBox = document.getElementsByClassName("category")[0];
    var ul = leftBar.getElementsByTagName("ul")[0];
    var lis = ul.getElementsByTagName("li");
//    console.log(lis.length);
    for( var i= 0;i<lis.length;i++){
        lis[i].addEventListener("click",function(){
           for(var j= 0;j<lis.length;j++) {
               lis[j].className = "";
           }
            this.className = "active";
        });
    }
    function addTransform(ele){
        ele.style.transition = "all 1s";
    }
    function removeTransform(ele){
        ele.style.transition = "all 0s";
    }
    function setTranslateY(ele,distance){
        ele.style.transform = "translateY("+distance+"px)"
    }
    move(leftBar);
    move(rightBar);
    function move(ele) {
        var chil = ele.children;
        var currentY = 0,startY= 0 ,endY = 0 , distance= 0;
        for(var i = 0;i< chil.length;i++){
            distance+=chil[i].offsetHeight;
        }
//        console.log(distance);
        ele.addEventListener("touchstart", function (e) {
//        alert(11);
            startY = e.targetTouches[0].clientY;
//            console.log("start" + startY);
        });
        ele.addEventListener("touchmove", function (e) {
            endY = e.targetTouches[0].clientY;
            addTransform(ele);
            setTranslateY(ele, currentY - startY + endY);
//            console.log("move" + (currentY + startY - endY));
        });
        ele.addEventListener("touchend", function (e) {
            currentY = currentY - startY + endY;
            if(currentY > 0){
                currentY = 0;
                setTranslateY(ele,0);
            }else if(currentY < -distance+partBox.offsetHeight){
                currentY = -distance+partBox.offsetHeight;
                setTranslateY(ele,-distance+partBox.offsetHeight);
            }
//            console.log("end" + currentY);
//            console.log("end" + -distance+partBox.offsetHeight);
        });
    }
}