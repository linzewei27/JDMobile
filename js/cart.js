/**
 * Created by 89418 on 2017/3/5.
 */
window.onload = function(){
    checked();
    deletWin();
}
function checked(){
    var titleBox = document.getElementsByClassName("shop-titl");
    for(var i = 0;i < titleBox.length ;i++){
        titleBox[i].addEventListener("click",function(){
            shopAllSelect(this);
        })
    }   
    var singleBox = document.querySelectorAll(".shop-detial .check-box");
    var allCheck = document.getElementById("cart-account-check");
    var isCheck = null,shopNode= null,shopAllNode= null;
//    console.log(singleBox);
    for(var i = 0;i < singleBox.length ;i++){
            singleBox[i].addEventListener("click",function(){
                isCheck = this.getAttribute("checked");
                if(isCheck!=null){
                    this.removeAttribute("checked");
                }else{
                    this.setAttribute("checked","");
                }
            });
       }
    allCheck.addEventListener("click",function(){
        isCheck = this.getAttribute("checked");
        if(isCheck!=null){
            this.removeAttribute("checked");
            for(var i = 0;i < singleBox.length ;i++){
                singleBox[i].removeAttribute("checked");
            }
        }else{
            this.setAttribute("checked","");
            for(var i = 0;i < singleBox.length ;i++){
                singleBox[i].setAttribute("checked","");
            }
        }

    });
    function shopAllSelect(ele){
        isCheck = ele.getElementsByClassName("check-box")[0].getAttribute("checked");
        shopNode = ele.parentNode;
        shopAllNode= shopNode.getElementsByClassName("check-box");
//        console.log(isCheck);
        if(isCheck !=null ){
//            console("yes");
            for(var i = 0;i < shopAllNode.length ;i++){
                shopAllNode[i].removeAttribute("checked");
//                console.log(i);
            }
        }else{
            for(var i = 0;i < shopAllNode.length ;i++){
                shopAllNode[i].setAttribute("checked","");
            }

        }
    }

}
function deletWin(){
        var delet = document.querySelectorAll(".delet");
        var deletWin = document.querySelector(".delete-product");
        var tipsWin = document.querySelector(".delete-product-window");
        var cancel = document.querySelector(".dpw-button .cancel");
        var top = null;
        for(var i = 0;i < delet.length ;i++){
                delet[i].addEventListener("click",function(){
                    showWin();
                    changeTop(this);
                });
           }
        cancel.addEventListener("click",function(){
            deletWin.style.display = "none";
            top.style.transform = "rotate(0deg) translateY(0px) translateX(0px)";
            top.style.webkitTransform = "rotate(0deg) translateY(0px) translateX(0px)";
        });
       function showWin(){
            deletWin.style.display = "block";
            tipsWin.style.animation = "winIn 1s";
            tipsWin.style.webkitAnimation = "winIn 1s";
       }
       function changeTop(ele){
            top = ele.querySelector(".del-top");
            top.style.transition = "all 1s";
            top.style.webkitTransition = "all 1s"
            top.style.transform = "rotate(-20deg) translateY(2px) translateX(-2px)";
            top.style.transformOrigin = "left";
            top.style.webkitTransform = "rotate(-20deg) translateY(2px) translateX(-2px)";
            top.style.webkitTransformOrigin = "left";
        }


}
