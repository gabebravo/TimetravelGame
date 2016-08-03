/**
 * Created by gabriel on 8/2/16.
 */

    function resetGame() {
        console.log('reset any vars for a new game');
        playerName = "";
    }

    function setLocalStorage(ObjKey, value){
        localStorage.setItem(ObjKey, value);
        //runGame(playerName);
    }

    function getLocalStorageVal(ObjKey){
        var value = localStorage.getItem(ObjKey);
        try {
            return JSON.parse(value);
        }
        catch(e) {
            return value;
        }
    }

    function getLocalStorageKey(index){
        var key = localStorage.key(index);
        try {
            return JSON.parse(key);
        }
        catch(e) {
            return key;
        }
    }

    function ranNumGen(){
        return Math.floor((Math.random() * 10) + 1);
    }

    function gameChallenge(pageChallenge) {
        switch(pageChallenge) {
            case "pg1ch1": /* PAGE 1 Challenge */
                if ( ranNumGen() > 1 ){ // won the challenge
                    return true;
                } else { // lost the challenge
                    return false;
                }
                break;
            case "pg1ch2": /* PAGE 2 Challenge */
                if ( ranNumGen() > 5 ){ // won the challenge
                    return true;
                } else { // lost the challenge
                    return false;
                }
                break;
        }
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

