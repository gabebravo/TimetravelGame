/**
 * Created by gabriel on 8/2/16.
 */
    ///////* GLOBAL VARS *///////
    var playerName = "";

    function resetGame() {
        console.log('reset any vars for a new game');
        playerName = "";
    }

    function setPlayer(player){
        var playerName = player;
        localStorage.setItem("playerName", player);
        //runGame(playerName);
    }

    function getPlayer(){
        var storedPlayerName = localStorage.getItem("playerName");
        try {
            return JSON.parse(storedPlayerName);
        }
        catch(e) {
            return storedPlayerName;
        }
    }

    function ranNumGen(){
        return Math.floor((Math.random() * 10) + 1);
    }

    function gameChallenge(pageNum) {
        switch(pageNum) {
            case "#page1": /* PAGE 1 Challenge */
                if ( challengeResult(ranNumGen()) > 1 ){ // won the challenge
                    return true;
                } else { // lost the challenge
                    return false;
                }
                break;
            case "#page2": /* PAGE 2 Challenge */
                if ( challengeResult(ranNumGen()) > 2 ){ // won the challenge
                    return true;
                } else { // lost the challenge
                    return false;
                }
                break;
            case "#page3": /* PAGE 3 Challenge */
                if ( challengeResult(ranNumGen()) > 7 ){ // won the challenge
                    return true;
                } else { // lost the challenge
                    return false;
                }
                break;
            case "#page4": /* PAGE 4 Challenge */
                if ( challengeResult(ranNumGen()) > 6 ){ // won the challenge
                    return true;
                } else { // lost the challenge
                    return false;
                }
                break;
            case "#page5": /* PAGE 5 Challenge */
                if ( challengeResult(ranNumGen()) > 5 ){ // won the challenge
                    return true;
                } else { // lost the challenge
                    return false;
                }
                break;
        }
    }

    function runGame(playerName) {
        console.log('someshit');
    }

    function hideOtherPages(currentPage) {
        switch(currentPage) {
            case "#page1": /* PAGE 1 Challenge */
                hideAllPages();
                $(currentPage).show();
                break;
            case "#page2": /* PAGE 2 Challenge */
                hideAllPages();
                $(currentPage).show();
                break;
            case "#page3": /* PAGE 3 Challenge */
                hideAllPages();
                $(currentPage).show();
                break;
            case "#page4": /* PAGE 4 Challenge */
                hideAllPages();
                $(currentPage).show();
                break;
            case "#page5": /* PAGE 5 Challenge */
                hideAllPages();
                $(currentPage).show();
                break;
        }
    }

    function hideAllPages(){
        $('div#home').hide();
        $('div#page1').hide();
        $('div#page2').hide();
        $('div#page3').hide();
        $('div#page4').hide();
        $('div#page5').hide();
    }

