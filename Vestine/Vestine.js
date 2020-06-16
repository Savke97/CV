$(document).ready(function(){
    $("#OtvoriMenu p").click(function(){
        $("#main").fadeIn(500);
        $("#OtvoriMenu img").animate({left:"-10%"});
        $("#OtvoriMenu p").fadeOut();
        $(".menu").animate({left:"0%"});
    });

    $("#closeMenu img").click(function(){
        $(".menu").animate({left:"0%"});
        $("#main").fadeOut(100);
        $("#OtvoriMenu p").fadeIn();
        $("#OtvoriMenu img").animate({left:"0%"});
    });
});

let sound = document.getElementById("audioId");
sound.currentTime = 0;
sound.loop = true; //if you want it to restart playing automatically when it ends
sound.play();


function anim(ciljaniDiv){
        var ciljanoSlovo = $("#"+ ciljaniDiv +" .rotiraj").text();
        
        var vrednost = ciljanoSlovo.charCodeAt(0);

        var pokazivac = 65;

        promeniChar();

        function promeniChar(){
            if(pokazivac <= vrednost){
                $("#"+ ciljaniDiv +" .rotiraj").text(String.fromCharCode(pokazivac));
                pokazivac++;
                setTimeout(promeniChar,20);
            }
            else{
                $(this).stop;
            }
        }
}