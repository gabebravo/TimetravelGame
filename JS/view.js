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
                showPages("#home");
                $('div.homepageview').html(homepage.description);
                $('button.pickplayer').on('click', function() {
                    hideAllPages();
                    setLocalStorage("playerName", $(this).attr("character")); // pass player to game
                    window.location.href = 'game.html#page1';
                    location.reload();
                });
                break;
            case "#page1": /* PAGE 1 */
                showPages("#page1");
                (getLocalStorageVal("playerName") === "Vanessa") ? $('div.page1view').html(page1.vanessa.description) : $('div.page1view').html(page1.austin.description);
                $('button.pg1ch1').on('click', function() {
                    hideAllPages();
                    setLocalStorage($(this).attr("choice"), gameChallenge($(this).attr("choice"))); // pass player to game
                    window.location.href = 'game.html#page2';
                    location.reload();
                });
                $('button.pg1ch2').on('click', function() {
                    hideAllPages();
                    setLocalStorage($(this).attr("choice"), gameChallenge($(this).attr("choice"))); // pass player to game
                    window.location.href = 'game.html#page2';
                    location.reload();
                });
                break;
            case "#page2": /* PAGE 2 */
                // conditionals for building the page
                showPages("#page2");
                if (getLocalStorageVal("playerName") === "Vanessa") {
                    if(getLocalStorageKey(0) === "pg1ch1") {
                        (getLocalStorageVal("pg1ch1")) ? $('div.page2view').html(page2.vanessa.shoes.description) : $('div.page2view').html(page2.vanessa.shoes.gameover);
                    } else {
                        (getLocalStorageVal("pg1ch2")) ? $('div.page2view').html(page2.vanessa.timetravel.description) : $('div.page2view').html(page2.vanessa.timetravel.gameover);
                    }
                } else {
                    if(getLocalStorageKey(0) === "pg1ch1") {
                        (getLocalStorageVal("pg1ch1")) ? $('div.page2view').html(page2.austin.shoes.description) : $('div.page2view').html(page2.austin.shoes.gameover);
                    } else {
                        (getLocalStorageVal("pg1ch2")) ? $('div.page2view').html(page2.austin.timetravel.description) : $('div.page2view').html(page2.austin.timetravel.gameover);
                    }
                }
                // button click events
                $('button.pg2ch1').on('click', function() {
                    hideAllPages();
                    setLocalStorage($(this).attr("choice"), gameChallenge($(this).attr("choice"))); // set choice data
                    window.location.href = 'game.html#page3';
                    location.reload();
                });
                $('button.pg2ch2').on('click', function() {
                    hideAllPages();
                    setLocalStorage($(this).attr("choice"), gameChallenge($(this).attr("choice"))); // set choice data
                    window.location.href = 'game.html#page3';
                    location.reload();
                });
                $('button.pg2fail').on('click', function() { // reset game and redirect to homepage
                    hideAllPages();
                    resetGame();
                    window.location.href = 'game.html#home';
                    location.reload();
                });
                break;
            case "#page3": /* PAGE 3 */
                showPages("#page3");
                // conditionals for building the page
                if (getLocalStorageVal("playerName") === "Vanessa") {
                    if(getLocalStorageKey(1) === "pg2ch1") {
                        (getLocalStorageVal("pg2ch1")) ? $('div.page3view').html(page3.vanessa.call.description) : $('div.page3view').html(page3.vanessa.call.gameover);
                    } else {
                        (getLocalStorageVal("pg2ch2")) ? $('div.page3view').html(page3.vanessa.follow.description) : $('div.page3view').html(page3.vanessa.follow.gameover);
                    }
                } else {
                    if(getLocalStorageKey(1) === "pg2ch1") {
                        (getLocalStorageVal("pg2ch1")) ? $('div.page3view').html(page3.austin.call.description) : $('div.page3view').html(page3.austin.call.gameover);
                    } else {
                        (getLocalStorageVal("pg2ch2")) ? $('div.page3view').html(page3.austin.follow.description) : $('div.page3view').html(page3.austin.follow.gameover);
                    }
                }
                // button click events
                $('button.pg3ch1').on('click', function() {
                    hideAllPages();
                    setLocalStorage($(this).attr("choice"), gameChallenge($(this).attr("choice"))); // set choice data
                    window.location.href = 'game.html#page4';
                    location.reload();
                });
                $('button.pg3ch2').on('click', function() {
                    hideAllPages();
                    setLocalStorage($(this).attr("choice"), gameChallenge($(this).attr("choice"))); // set choice data
                    window.location.href = 'game.html#page4';
                    location.reload();
                });
                $('button.pg3fail').on('click', function() { // reset game and redirect to homepage
                    hideAllPages();
                    resetGame();
                    window.location.href = 'game.html#home';
                    location.reload();
                });
                break;
            case "#page4": /* PAGE 4 */
                showPages("#page4");
                $('div.page4view').html(page4.description);
                $('button.gotopage5').on('click', function() {
                    hideAllPages();
                    window.location.href = 'game.html#page5';
                    location.reload();
                });
                break;
            case "#page5": /* PAGE 5 */
                showPages("#page5");
                $('div.page5view').html(page5.description);
                $('button.playagainpg5').on('click', function() {
                    hideAllPages();
                    //resetGame();
                    window.location.href = 'game.html#welcome';
                    location.reload();
                });
                break;
            case "#page5": /* PAGE 5 */
                showPages("#page6");
                $('div.page5view').html(page5.description);
                $('button.playagainpg5').on('click', function() {
                    hideAllPages();
                    //resetGame();
                    window.location.href = 'game.html#welcome';
                    location.reload();
                });
                break;
        }
    }

});
