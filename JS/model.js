/**
by gabriel on 8/2/16.
 */

var page1 = {
    vanessa : {
        description : '<h1>Partner Gone Missing</h1>' +
        '<p class="pagetext">You show up to the lab and notice there has been a commotion. ' +
        'Austin is usually early to work, but he is nowhere to be found. ' +
        'You see a formula on the chalkboard and decipher it as an encoded message. ' +
        'It says, "Track my shoe". You wonder what it means and quickly realize Austin' +
        ' keeps a fitness tracker in his shoe. <div><br><br>' +
        '<button type="button" class="btn btn-info pg1ch1 btnstyle" choice="pg1ch1">Locate Shoe Coordinates</button>' +
        '<button type="button" class="btn btn-info pg1ch2 btnstyle" choice="pg1ch2">Time Travel Back 2 Hours</button>'
    },
    austin : {
        description : '<h1>Partner Gone Missing</h1>' +
        '<p class="pagetext">You show up to the lab and notice there has been a commotion. ' +
        'Vanessa is usually early to work, but she is nowhere to be found. ' +
        'You see a formula on the chalkboard and decipher it as an encoded message. ' +
        'It says, "Track my shoe". You wonder what it means and quickly realize Vanessa' +
        ' keeps a fitness tracker in her shoe.<p><br><br>' +
        '<button type="button" class="btn btn-info pg1ch1 btnstyle" choice="pg1ch1">Locate Shoe Coordinates</button>' +
        '<button type="button" class="btn btn-info pg1ch2 btnstyle" choice="pg1ch2">Time Travel Back 2 Hours</button>'
    }
}

var page2 = {
    vanessa : {
        shoes: {
            description : '<h1>Successfully Tracked Down Coordinates</h1>' +
            '<p class="pagetext">You hack the shoe tracker software and find Austin\'s location. ' +
            'You take the location and cross-reference it in Google Maps. It pulls up an old warehouse that is ' +
            '100 miles away. You then contemplate your next move.<p><br><br>' +
            '<button type="button" class="btn btn-info pg2ch1 btnstyle" choice="pg2ch1">Call the Police</button>' +
            '<button type="button" class="btn btn-info pg2ch2 btnstyle" choice="pg2ch2">Gas Up & Go</button>',
            gameover: '<h1>You Were Unable to Track the Coordinates</h1>' +
            '<p class="pagetext">Couldn\'t track the shoes. Too much time passed. Bad news. Austin doesn\'t make it.<p><br><br>' +
            '<button type="button" class="btn btn-info pg2fail">Play Again</button>'
        },
        timetravel: {
            description : '<h1>Successfully Travel Back in Time</h1>' +
            '<p class="pagetext"> <p><br><br>' +
            '<button type="button" class="btn btn-info pg2ch1 btnstyle" choice="pg2ch1">Get Plate Number & Call PI</button>' +
            '<button type="button" class="btn btn-info pg2ch2 btnstyle" choice="pg2ch2">Follow the Car</button>',
            gameover: '<h1>You Were Unable to Travel Back in Time</h1>' +
            '<p class="pagetext">Unable to travel back in time. Not enough power. Too much time passes. Bad news. Austin didn\'t make it.<p><br><br>' +
            '<button type="button" class="btn btn-info pg2fail">Play Again</button>'
        }
    },
    austin : {
        shoes: {
            description : '<h1>Successfully Tracked Down Coordinates</h1>' +
            '<p class="pagetext">You hack the shoe tracker software and find Austin\'s location. ' +
            'You take the location and crossreference it in Google Maps. It pulls up an old warehouse that is ' +
            '100 miles away. You then contimplate your next move<p><br><br>' +
            '<button type="button" class="btn btn-info pg2ch1 btnstyle" choice="pg2ch1">Call the Police</button>' +
            '<button type="button" class="btn btn-info pg2ch2 btnstyle" choice="pg2ch2">Gas Up and Go</button>',
            gameover: '<h1>You Were Unable to Track the Coordinates</h1>' +
            '<p class="pagetext">Couldn\'t track the shoes. Too much time passes. Bad news. Vanessa doesn\'t make it.<p><br><br>' +
            '<button type="button" class="btn btn-info pg2fail">Play Again</button>'
        },
        timetravel: {
            description : '<h1>Successfully Travel Back in Time</h1>' +
            '<p class="pagetext">Timetravel Austin this worked. <p><br><br>' +
            '<button type="button" class="btn btn-info pg2ch1 btnstyle" choice="pg2ch1">Get Plate Number & Call PI</button>' +
            '<button type="button" class="btn btn-info pg2ch2 btnstyle" choice="pg2ch2">Follow the Car</button>',
            gameover: '<h1>You Were Unable to Travel Back in Time</h1>' +
            '<p class="pagetext">Unable to travel back in time. Not enough power. Too much time passes. Bad news. Vanesssa doesn\'t make it.<p><br><br>' +
            '<button type="button" class="btn btn-info pg2fail">Play Again</button>'
        }
    }
}

var page3 = {
    vanessa : {
        call: {
            description : '<h1>Successfully Contacted the Police</h1>' +
            '<p class="pagetext">You get through to the police and tell them Austin was kidnapped. ' +
            'It takes them an hour to come out. They take your statement and you try stress the urgency. ' +
            'After nearly two hours, they inform you the investigation is over. Austin didn\'t make it.<p><br><br>' +
            '<button type="button" class="btn btn-info pg3fail">Play Again</button>'
        },
        follow: {
            description : '<h1>Successfully Followed the Captors</h1>' +
            '<p class="pagetext"> After following Austin\'s captors, you stop just short of the warehouse. '+
            'Not too far away, you see a guard. On the way over, you noticed a gun store. But maybe there is no time? '+
            'You see a big iron pipe near by and start thinking. Torn between your next step, carefully consider your next move.<p><br><br>' +
            '<button type="button" class="btn btn-info p3ch1 btnstyle" choice="pg3ch1">Get a Gun from the Store</button>' +
            '<button type="button" class="btn btn-info pg3ch2 btnstyle" choice="pg2ch2">Attack Guard with Pipe</button>',
            gameover: '<h1>You Were Unable to Follow the Captors</h1>' +
            '<p class="pagetext">Your care gets a flat tire and it takes several hours to fix. Too much time passes. Bad news. Austin didn\'t make it.<p><br><br>' +
            '<button type="button" class="btn btn-info pg3fail">Play Again</button>'
        }
    },
    austin : {
        call: {
            description : '<h1>Successfully Contacted Private Investigator</h1>' +
            '<p class="pagetext">You get through to the police and tell them Vanessa was kidnapped. ' +
            'It takes them an hour to come out. They take your statement and you try stress the urgency. ' +
            'After nearly two hours, they inform you the investigation is over. Vanessa didn\'t make it.<p><br><br>' +
            '<button type="button" class="btn btn-info pg3fail">Play Again</button>'
        },
        follow: {
            description : '<h1>Successfully Followed the Captors</h1>' +
            '<p class="pagetext"> After following Austin\'s captors, you stop just short of the warehouse. '+
            'Not too far away, you see a guard. On the way over, you noticed a gun store. But maybe there is no time? '+
            'You see a big iron pipe near by and start thinking. Torn between your next step, carefully consider your next move.<p><br><br>' +
            '<button type="button" class="btn btn-info pg3ch1 btnstyle" choice="pg3ch1">Get a Gun from the Store</button>' +
            '<button type="button" class="btn btn-info pg3ch2 btnstyle" choice="pg2ch2">Attack Guard with Pipe</button>',
            gameover: '<h1>You Were Unable to Follow the Captors</h1>' +
            '<p class="pagetext">Your care gets a flat tire and it takes several hours to fix. Too much time passes. Bad news. Vanessa didn\'t make it.<p><br><br>' +
            '<button type="button" class="btn btn-info pg3fail">Play Again</button>'
        }
    }
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
