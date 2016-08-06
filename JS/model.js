/**
by gabriel on 8/2/16.
 */

var homepage = {
    description : '<h1>Choose Your Character</h1>' +
    '<div class="row vanessa"><div class="col-xs-3 col-md-4">' +
    '<img class="img-responsive" src="./images/vanessa.jpg"></div>' +
    '<div class="col-xs-9 col-md-6"><p>Vanessa Lazer graduated from Harvard '+
    'at 16-years-old with a PhD in Particle Physics. She became interested in testing Einstein\'s theory '+
    'on time and space after she became the lead engineer in the Cambridge lab in experimental physics. '+
    'Vanessa was soon making breakthroughs, especially with her new programming genius, Austin, by her side. '+
    'And she soon designed theoretical devices that could be used for time traveling. '+
    'As word spread of this amazing invention, the intelligence community became very interested. '+
    'Soon, spies were tapping the lab and plotting to steal any prototype. All the biggest world powers wanted '+
    'to have exclusive control over time travel. As the years unfolded, her colleagues begged her not to continue. '+
    'Vanessa saw her work as too important and refused. Click on the Vanessa button to play with her and find out '+
    'what comes next in this great time travel adventure...</p><button type="button" class="btn btn-info pickplayer" '+
    'character="Vanessa">Vanessa</button></div><div class="col-md-2"></div></div><div class="row"><div class="col-xs-9 col-md-6">'+
    '<p>Austin Snow is often criticized by his peers as being out of his class. From meager upbringings, '+
    'Austin was a country boy that grew up on a farm in Arkansas. He was always scrawny and wasn\'t very good as a farm hand, '+
    'so when he started to show exceptional skills at school, his father took the family savings and bought Austin a Tandy 1000 '+
    'computer. It would change his life forever. Although Austin never went to college, by the time he was 20-years-old, '+
    'he was working as lead engineer for the software development team at Macintosh. Steve Jobs saw his genius and eventually '+
    'told him that he should go work for a greater cause to humanity. Having his pick of the litter, Austin sought out Vanessa'+
    'and her fledgling time travel project. It was struggling due to a lack of software that could handle the speed of calculations. '+
    'Over they years, Austin had brush-ins with shady spies, but he always stayed by Vanessa\'s side. Mainly out of his secret love for her. '+
    'Play with Austin and see what happens next...</p><button type="button" class="btn btn-info pickplayer" character="Austin">Austin</button>'+
    ' </div><div class="col-xs-3 col-md-4"><img class="img-responsive" src="./images/Austin.jpg"></div><div class="col-md-2"></div></div>'
}

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
