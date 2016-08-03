/**
by gabriel on 8/2/16.
 */

var page1 = {
    vanessa : {
        description : '<h1>Partner Gone Missing</h1>' +
        '<p class="page1-description">You show up to the lab and notice there has been a commotion. ' +
        'Austin is usually early to work, but they are nowhere to be found. ' +
        'You see a formula on the chalkboard and decipher it as an encoded message. ' +
        'It says, "Track my shoe". You wonder what it means and quickly realize Austin' +
        ' keeps a fitness tracker in his shoe. <p><br><br>' +
        '<button type="button" class="btn btn-info gotopage2 pg1ch1" choice="pg1ch1">Locate Shoe Coordinates</button>' +
        '<button type="button" class="btn btn-info gotopage2 pg1ch2" choice="pg1ch2">Time Travel Back 2 Hours</button>'
    },
    austin : {
        description : '<h1>Partner Gone Missing</h1>' +
        '<p class="page1-description">You show up to the lab and notice there has been a commotion. ' +
        'Vanessa is usually early to work, but they are nowhere to be found. ' +
        'You see a formula on the chalkboard and decipher it as an encoded message. ' +
        'It says, "Track my shoe". You wonder what it means and quickly realize Vanessa' +
        ' keeps a fitness tracker in her shoe. <p><br><br>' +
        '<button type="button" class="btn btn-info gotopage2 pg1ch1" choice="pg1ch1">Locate Shoe Coordinates</button>' +
        '<button type="button" class="btn btn-info gotopage2 pg1ch2" choice="pg1ch2">Time Travel Back 2 Hours</button>'
    }
};

var page2 = {
    vanessa : {
        shoes: {
            description : '<h1>Successfully Tracked Down Coordinates</h1>' +
            '<p class="page2-description">Shoes Vanessa this worked. <p><br><br>' +
            '<button type="button" class="btn btn-info gotopage3 pg2ch1" choice="pg1ch1">Choice 1</button>' +
            '<button type="button" class="btn btn-info gotopage3 pg2ch2" choice="pg1ch2">Chioce 2</button>',
            gameover: '<h1>You Were Unable to Track the Coordinates</h1>' +
            '<p class="page2-description">Shoes failed for Vanessa<p><br><br>' +
            '<button type="button" class="btn btn-info gotopage3 pg2ch1" choice="pg1ch1">Play Again</button>'
        },
        timetravel: {
            description : '<h1>Successfully Traveled Back in Time</h1>' +
            '<p class="page2-description">Timetravel Vanessa this worked. <p><br><br>' +
            '<button type="button" class="btn btn-info gotopage3 pg2ch1" choice="pg1ch1">Choice 1</button>' +
            '<button type="button" class="btn btn-info gotopage3 pg2ch2" choice="pg1ch2">Chioce 2</button>',
            gameover: '<h1>You Were Unable to Traveled Back in Time</h1>' +
            '<p class="page2-description">Timetrvael failed for Vanessa.<p><br><br>' +
            '<button type="button" class="btn btn-info gotopage3 pg2ch1" choice="pg1ch1">Play Again</button>'
        }
    },
    austin : {
        shoes: {
            description : '<h1>Successfully Tracked Down Coordinates</h1>' +
            '<p class="page2-description">Shoes Austin this worked. <p><br><br>' +
            '<button type="button" class="btn btn-info gotopage3 pg2ch1" choice="pg1ch1">Choice 1</button>' +
            '<button type="button" class="btn btn-info gotopage3 pg2ch2" choice="pg1ch2">Chioce 2</button>',
            gameover: '<h1>You Were Unable to Track the Coordinates</h1>' +
            '<p class="page2-description">Shoes failed for Austin<p><br><br>' +
            '<button type="button" class="btn btn-info gotopage3 pg2ch1" choice="pg1ch1">Play Again</button>'
        },
        timetravel: {
            description : '<h1>Successfully Traveled Back in Time</h1>' +
            '<p class="page2-description">Timetravel Austin this worked. <p><br><br>' +
            '<button type="button" class="btn btn-info gotopage3 pg2ch1" choice="pg1ch1">Choice 1</button>' +
            '<button type="button" class="btn btn-info gotopage3 pg2ch2" choice="pg1ch2">Chioce 2</button>',
            gameover: '<h1>You Were Unable to Traveled Back in Time</h1>' +
            '<p class="page2-description">Timetrvael failed for Austin.<p><br><br>' +
            '<button type="button" class="btn btn-info gotopage3 pg2ch1" choice="pg1ch1">Play Again</button>'
        }
    }
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
