/**
 * Created by gabriel on 8/2/16.
 */

var player = {};
var page1 = {};

function printPage(playerName, currentPage) {
    player.name = playerName;
    switch(currentPage) {
        case "#page1": /* PAGE 1 Challenge */
            page1.description =
                '<h1>Partner Gone Missing</h1>' +
                '<p class="page1-description">You show up to the lab and notice there has been a commotion. ' +
                player.name + ' is usually early to work, but they are nowhere to be found. ' +
                'You see a formula on the chalkboard and decipher it as an encoded message. ' +
                'It says, "Track my shoe". You wonder what it means and quickly realize ' + player.name + ' keeps a fitness tracker in their shoe. <p><br><br>' +
                '<button type="button" class="btn btn-info gotopage2">Locate Shoe Coordinates</button>' +
                '<button type="button" class="btn btn-info gotopage2">Time Travel Back 2 Hours</button>';
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

var page2 = {
    description:
    '<p class="page2-description">This is the page 2 description<p>' +
    '<button type="button" class="btn btn-info gotopage3">Next Page</button>'
}

var page3 = {
    description:
        '<p class="page3-description">This is the page 3 description<p>' +
        '<button type="button" class="btn btn-info gotopage4">Next Page</button>'

}

var page4 = {
    description:
    '<p class="page4-description">This is the page 4 description<p>' +
    '<button type="button" class="btn btn-info gotopage5">Next Page</button>'
}

var page5 = {
    description:
    '<p class="page5-description">This is the page 5 description<p>' +
    '<button type="button" class="btn btn-info playagainpg5">Play Again</button>'
}
