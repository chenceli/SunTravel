/**
 * Created by chen on 2018/3/9.
 */

$(function () {
    let start=$('.start').offset().left;
    let end=document.querySelector('.end');
    let range=document.querySelector('.range');
    let priceTag=document.querySelectorAll('.priceTag')[1];
    end.onmousedown=function (e) {
        let that=this;
        range.onmousemove=function (e) {
            let left=e.clientX-start;
            if(left>202.5){
                left=202.5;
            }
            if(left<50){
                left=50;
            }
            that.style.left=left+'px';
            document.querySelector('.orangeLine').style.width=left+'px';
            let num=left * 20 +800;
            priceTag.innerText='$'+num;
        };
        this.onmouseup=function () {
            range.onmousemove=null;
        }
    };

});


