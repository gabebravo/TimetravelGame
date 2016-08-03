/**
 * Created by gabriel on 8/1/16.
 */
$(document).ready(function() {

    window.addEventListener("load", function() {
        welcomeRedirect();
        pageSpecific(location.hash);
    });

    function welcomeRedirect(){
        if(location.hash === "") {
            window.location.href = "#welcome";
        }
    }

    function pageSpecific(pageID){
        switch(pageID) {
            case "#welcome": /* WELCOME PAGE */
                var viewport = {
                    width  : $(window).width(),
                    height : $(window).height()
                };
                $('div.background-image').css({"height": viewport.height+"px", "width": viewport.width+"px"});
                $('.playnow').on('click', function(event) {
                    event.preventDefault();
                    window.location.href = 'game.html#home';
                });
                break;
            case "#home": /* HOME PAGE */
                $('button.pickplayer').on('click', function() {
                    var player = $(this).attr("character");
                    setPlayer(player); // pass player to game
                    window.location.href = 'game.html#page1';
                    location.reload();
                });
                break;
            case "#page1": /* PAGE 1 */
                hideOtherPages("#page1");
                (getPlayer() === "Vannesa") ? $('div.page1view').html(page1.vanessa.description) : $('div.page1view').html(page1.austin.description);
                $('button.pg1ch1').on('click', function() {
                    if (getPlayer() === "Vannesa") {
                        (gameChallenge("pg1ch1")) ? $('div.page2view').html(page2.vanessa.shoes.description) : $('div.page2view').html(page2.vanessa.shoes.gameover);
                        window.location.href = 'game.html#page2';
                        location.reload();
                    } else {
                        (gameChallenge("pg1ch1")) ? $('div.page2view').html(page2.austin.shoes.description) : $('div.page2view').html(page2.austin.shoes.gameover);
                        window.location.href = 'game.html#page2';
                        location.reload();
                    }
                });
                $('button.pg1ch2').on('click', function() {
                    if (getPlayer() === "Vannesa") {
                        (gameChallenge("pg1ch2")) ? $('div.page2view').html(page2.vanessa.timetravel.description) : $('div.page2view').html(page2.vanessa.timetravel.description);
                        window.location.href = 'game.html#page2';
                        location.reload();
                    } else {
                        (gameChallenge("pg1ch2")) ? $('div.page2view').html(page2.austin.timetravel.description) : $('div.page2view').html(page2.austin.timetravel.description);
                        window.location.href = 'game.html#page2';
                        location.reload();
                    }
                });
                break;
            case "#page2": /* PAGE 2 */
                hideOtherPages("#page2");
                $('button.gotopage3').on('click', function() {
                    window.location.href = 'game.html#page3';
                    location.reload();
                });
                break;
            case "#page3": /* PAGE 3 */
                hideOtherPages("#page3");
                $('div.page3view').html(page3.description);
                $('button.gotopage4').on('click', function() {
                    window.location.href = 'game.html#page4';
                    location.reload();
                });
                break;
            case "#page4": /* PAGE 4 */
                hideOtherPages("#page4");
                $('div.page4view').html(page4.description);
                $('button.gotopage5').on('click', function() {
                    window.location.href = 'game.html#page5';
                    location.reload();
                });
                break;
            case "#page5": /* PAGE 5 */
                hideOtherPages("#page5");
                $('div.page5view').html(page5.description);
                $('button.playagainpg5').on('click', function() {
                    //resetGame();
                    window.location.href = 'game.html#welcome';
                    location.reload();
                });
                break;
        }
    }

});
