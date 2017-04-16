/**
 * Created by 89418 on 2017/3/4.
 */
window.onload = function(){
    topbar();
    count_down();
    slider();
}
function topbar(){
    var topBar = document.getElementsByClassName("jd-header-box")[0];
    var banner = document.getElementsByClassName("jd-banner")[0];
    var scale = 0;
    window.addEventListener("scroll",function(){
        scale =   document.body.scrollTop/banner.offsetHeight;
        if(scale<1){
            topBar.style.backgroundColor = "rgba(201,21,35,"+0.85*scale+")"
        }else{
            topBar.style.backgroundColor = "rgba(201,21,35,0.85)"
        }
    })
}
function count_down(){
    var times = 24*60*60;
    var endDate = new Date();
    var sk = document.getElementsByClassName("sk-time")[0];
    var num = sk.getElementsByClassName("num");
//    alert(num.length);
    endDate.setHours(24);
    endDate.setMinutes(0);
    endDate.setSeconds(0);
    var remain_secondes = 0,h = 0 , m = 0, s = 0;
    setInterval(function(){
        var nowData = new Date();
        remain_secondes = (endDate.valueOf() - nowData.valueOf())/1000;
//        console.log(remain_secondes);
        h = parseInt(remain_secondes/60/60);
        m = parseInt(remain_secondes/60%60);
        s = parseInt(remain_secondes%60);
//        console.log(h+"-"+m+"-"+s)
        setNum(h,num[0],num[1]);
        setNum(m,num[2],num[3]);
        setNum(s,num[4],num[5]);
    },1000);
    function setNum(num,ele1,ele2){

        if(num<10){
            ele1.innerText = 0;
            ele2.innerText = num;
        }else{
            ele1.innerText = parseInt(num/10);
            ele2.innerText = num%10;
        }
    }
}
function slider(){
    var banner = document.getElementsByClassName("jd-banner")[0];
    var img_box = banner.getElementsByTagName("ul")[0];
    var point_box = banner.getElementsByTagName("ul")[1];
    var points = point_box .getElementsByTagName("li");
    var img_width = banner.offsetWidth;
    var index = 1;
    var startX = 0,endX = 0,now_translateX = 0 , all_translateX=0;
    function addTransition(){
      img_box.style.transition = "all .3s ease 0s";
    }
    function removeTransition(){
        img_box.style.transition = "none";
    }
    function setTransform(t){
        img_box.style.transform = "translateX("+t+"px)";

    }

    var timer = setInterval(function(){
            index++;
            addTransition();
            setTransform(-index*img_width);
        //与transitionend 效果一样
//        setTimeout(function(){
//            if(index>=9){
//                index = 1;
//            }else if(index<0){
//                index = 8;
//            }
//            removeTransition();
//            setTransform(index);
//        },300);

    },1000);

    img_box.addEventListener("transitionend",function(){
        if(index>=9){
                index = 1;
            }else if(index<=0){
                index = 8;
            }
            removeTransition();
            setTransform(-index*img_width);
        for(var i = 0;i<points.length;i++){
            points[i].className="";
        }
        points[(index - 1)%8].className = "active";
    });
    banner.addEventListener("touchstart",function(e){
        startX = e.targetTouches[0].clientX;

    });
    banner.addEventListener("touchmove",function(e){
        clearInterval(timer) ;
//        all_translateX = 0 ;
        endX = e.targetTouches[0].clientX;
        img_box.style.transform = "none";
        now_translateX = index * img_width;
        all_translateX = now_translateX-endX + startX;
        console.log(all_translateX);
        setTransform(-all_translateX);
    });
    banner.addEventListener("touchend",function(e){
        clearInterval(timer) ;
        if(Math.abs(endX-startX)<img_width/3){
            
        }else {

            if (endX < startX) {
                index++;
            } else {
                index--;
            }
        }
            addTransition();
            setTransform(img_width * index * -1);

        timer = setInterval(function() {
            index++;
            addTransition();
            setTransform(img_width * index * -1);
        }, 1000);
    })



}
