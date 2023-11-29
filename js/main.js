$(function(){

    $(window).scroll(function(){

        let objTop = $(".mainBall").offset().top
        let scr = $(window).scrollTop()
        let distance = scr-objTop+(window.innerHeight/3*2.5)
        let per = distance/(window.innerHeight)
        let per150 = per*150
        let per500 = per*500
        let perdeg = per*160
        let per20 = per*20

        if(distance>=0 && distance<window.innerHeight){
            console.log(per)
            $(".mainBall").css("transform",`translate(${per500}px,${per150}px)rotate(${perdeg}deg)`)
            $(".half-circle").css("transform",`rotate(${per20}deg)`)

        }
        

    })



})