/**
by gabriel on 8/2/16.
 */

var homepage = {
    description : '<h1 class="choose-character">Choose Your Character</h1>' +
    '<div class="row vanessa"><div class="col-xs-3 col-md-4">' +
    '<img class="img-responsive" src="./images/vanessa.jpg"></div>' +
    '<div class="col-xs-9 col-md-6"><p class="player-text">Vanessa Lazer graduated from Harvard '+
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
    '<p class="player-text">Austin Snow is often criticized by his peers as being out of his class. From meager upbringings, '+
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
        description : '<h1 class="inner-pages">Partner Gone Missing</h1>' +
        '<p class="pagetext">You show up to the lab and notice there has been a commotion. ' +
        'Austin is usually early to work, but he is nowhere to be found. ' +
        'You see a formula on the chalkboard and decipher it as an encoded message. ' +
        'It says, "Track my shoe". You wonder what it means and quickly realize Austin' +
        ' keeps a fitness tracker in his shoe.</p><br><br>' +
        '<button type="button" class="btn btn-info pg1ch1 btnstyle" choice="pg1ch1">Locate Shoe Coordinates</button>' +
        '<button type="button" class="btn btn-info pg1ch2 btnstyle" choice="pg1ch2">Time Travel Back 2 Hours</button></div>'
    },
    austin : {
        description : '<h1 class="inner-pages">Partner Gone Missing</h1>' +
        '<p class="pagetext">You show up to the lab and notice there has been a commotion. ' +
        'Vanessa is usually early to work, but she is nowhere to be found. ' +
        'You see a formula on the chalkboard and decipher it as an encoded message. ' +
        'It says, "Track my shoe". You wonder what it means and quickly realize Vanessa' +
        ' keeps a fitness tracker in her shoe.</p><br><br>' +
        '<button type="button" class="btn btn-info pg1ch1 btnstyle" choice="pg1ch1">Locate Shoe Coordinates</button>' +
        '<button type="button" class="btn btn-info pg1ch2 btnstyle" choice="pg1ch2">Time Travel Back 2 Hours</button></div>'
    }
}

var page2 = {
    vanessa : {
        shoes: {
            description : '<h1 class="inner-pages">Successfully Tracked Down Coordinates</h1>' +
            '<p class="pagetext">You hack the shoe tracker software and find Austin\'s location. ' +
            'You take the location and cross-reference it in Google Maps. It pulls up an old warehouse that is ' +
            '100 miles away. You then contemplate your next move.<p><br><br>' +
            '<button type="button" class="btn btn-info pg2ch1 btnstyle" choice="pg2ch1">Call the Police</button>' +
            '<button type="button" class="btn btn-info pg2ch2 btnstyle" choice="pg2ch2">Gas Up and Go</button>',
            gameover: '<h1 class="inner-pages">You Were Unable to Track the Coordinates</h1>' +
            '<p class="pagetext">Couldn\'t track the shoes. Too much time passed. Bad news. Austin doesn\'t make it.<p><br><br>' +
            '<button type="button" class="btn btn-info pg2fail btnstyle">Play Again</button>'
        },
        timetravel: {
            description : '<h1 class="inner-pages">Successfully Travel Back in Time</h1>' +
            '<p class="pagetext">You were able to actually travel back in time. When you arrive two hours in the past, ' +
            'Austin is still not there. You hear a commotion outside and go to the window. Just then, you see his captors ' +
            'shoving him into the back of a car. You must think and act fast if you\'re going to help him.<p><br><br>' +
            '<button type="button" class="btn btn-info pg2ch1 btnstyle" choice="pg2ch1">Get Plate Number & Call PI</button>' +
            '<button type="button" class="btn btn-info pg2ch2 btnstyle" choice="pg2ch2">Follow the Car</button>',
            gameover: '<h1 class="inner-pages">You Were Unable to Travel Back in Time</h1>' +
            '<p class="pagetext">Unable to travel back in time. Not enough power. Too much time passes. Bad news. Austin didn\'t make it.<p><br><br>' +
            '<button type="button" class="btn btn-info pg2fail btnstyle">Play Again</button>'
        }
    },
    austin : {
        shoes: {
            description : '<h1 class="inner-pages">Successfully Tracked Down Coordinates</h1>' +
            '<p class="pagetext">You hack the shoe tracker software and find Austin\'s location. ' +
            'You take the location and crossreference it in Google Maps. It pulls up an old warehouse that is ' +
            '100 miles away. You then contimplate your next move<p><br><br>' +
            '<button type="button" class="btn btn-info pg2ch1 btnstyle" choice="pg2ch1">Call the Police</button>' +
            '<button type="button" class="btn btn-info pg2ch2 btnstyle" choice="pg2ch2">Gas Up and Go</button>',
            gameover: '<h1 class="inner-pages">You Were Unable to Track the Coordinates</h1>' +
            '<p class="pagetext">Couldn\'t track the shoes. Too much time passes. Bad news. Vanessa doesn\'t make it.<p><br><br>' +
            '<button type="button" class="btn btn-info pg2fail btnstyle">Play Again</button>'
        },
        timetravel: {
            description : '<h1 class="inner-pages">Successfully Travel Back in Time</h1>' +
            '<p class="pagetext">You were able to actually travel back in time. When you arrive two hours in the past, ' +
            'Austin is still not there. You hear a commotion outside and go to the window. Just then, you see his captors ' +
            'shoving him into the back of a car. You must think and act fast if you\'re going to help him.<p><br><br>' +
            '<button type="button" class="btn btn-info pg2ch1 btnstyle" choice="pg2ch1">Get Plate Number & Call PI</button>' +
            '<button type="button" class="btn btn-info pg2ch2 btnstyle" choice="pg2ch2">Follow the Car</button>',
            gameover: '<h1 class="inner-pages">You Were Unable to Travel Back in Time</h1>' +
            '<p class="pagetext">Unable to travel back in time. Not enough power. Too much time passes. Bad news. Vanesssa doesn\'t make it.<p><br><br>' +
            '<button type="button" class="btn btn-info pg2fail btnstyle">Play Again</button>'
        }
    }
}

var page3 = {
    vanessa : {
        call: {
            description : '<h1 class="inner-pages">Successfully Contacted the Police</h1>' +
            '<p class="pagetext">You get through to the police and tell them Austin was kidnapped. ' +
            'It takes them an hour to come out. They take your statement and you try stress the urgency. ' +
            'After nearly two hours, they inform you the investigation is over. Austin didn\'t make it.<p><br><br>' +
            '<button type="button" class="btn btn-info pg3fail btnstyle">Play Again</button>',
            gameover: '<h1 class="inner-pages">Unable to Connect with the Police</h1>' +
            '<p class="pagetext">Couldn\'t get through to the police. You can\'t get a signal and your phone dies. Bad news. Austin doesn\'t make it.<p><br><br>' +
            '<button type="button" class="btn btn-info pg3fail btnstyle">Play Again</button>'
        },
        follow: {
            description : '<h1 class="inner-pages">Successfully Followed the Captors</h1>' +
            '<p class="pagetext"> After following Austin\'s captors, you stop just short of the warehouse. '+
            'Not too far away, you see a guard. On the way over, you noticed a gun store. But maybe there is no time? '+
            'You see a big iron pipe near by and start thinking. Torn between your next step, carefully consider your next move.<p><br><br>' +
            '<button type="button" class="btn btn-info pg3ch1 btnstyle" choice="pg3ch1">Get a Gun from the Store</button>' +
            '<button type="button" class="btn btn-info pg3ch2 btnstyle" choice="pg3ch2">Attack Guard with Pipe</button>',
            gameover: '<h1 class="inner-pages">You Were Unable to Follow the Captors</h1>' +
            '<p class="pagetext">Your care gets a flat tire and it takes several hours to fix. Too much time passes. Bad news. Austin didn\'t make it.<p><br><br>' +
            '<button type="button" class="btn btn-info pg3fail btnstyle">Play Again</button>'
        }
    },
    austin : {
        call: {
            description : '<h1 class="inner-pages">Successfully Contacted Private Investigator</h1>' +
            '<p class="pagetext">You get through to the police and tell them Vanessa was kidnapped. ' +
            'It takes them an hour to come out. They take your statement and you try stress the urgency. ' +
            'After nearly two hours, they inform you the investigation is over. Vanessa didn\'t make it.<p><br><br>' +
            '<button type="button" class="btn btn-info pg3fail btnstyle">Play Again</button>',
            gameover: '<h1 class="inner-pages">Unable to Connect with the Police</h1>' +
            '<p class="pagetext">Couldn\'t get through to the police. You can\'t get a signal and your phone dies. Bad news. Vanessa doesn\'t make it.<p><br><br>' +
            '<button type="button" class="btn btn-info pg3fail btnstyle">Play Again</button>'
        },
        follow: {
            description : '<h1 class="inner-pages">Successfully Followed the Captors</h1>' +
            '<p class="pagetext"> After following Austin\'s captors, you stop just short of the warehouse. '+
            'Not too far away, you see a guard. On the way over, you noticed a gun store. But maybe there is no time? '+
            'You see a big iron pipe near by and start thinking. Torn between your next step, carefully consider your next move.<p><br><br>' +
            '<button type="button" class="btn btn-info pg3ch1 btnstyle" choice="pg3ch1">Get a Gun from the Store</button>' +
            '<button type="button" class="btn btn-info pg3ch2 btnstyle" choice="pg3ch2">Attack Guard with Pipe</button>',
            gameover: '<h1 class="inner-pages">You Were Unable to Follow the Captors</h1>' +
            '<p class="pagetext">Your care gets a flat tire and it takes several hours to fix. Too much time passes. Bad news. Vanessa didn\'t make it.<p><br><br>' +
            '<button type="button" class="btn btn-info pg3fail btnstyle">Play Again</button>'
        }
    }
}

var page4 = {
    vanessa : {
        gunstore: {
            description : '<h1 class="inner-pages">Successfully Went to Gun Store</h1>' +
            '<p class="pagetext">You try to track down the gun store and eventually find it. ' +
            'You try and stay calm and play it cool with the sales clerk. But they pick up on your anxiety and sense of urgency. ' +
            'They continue the process with hesitation, and it takes almost two hours to complete the paperwork. '+
            'In the end they tell you it takes 24 hours to finalize the background check, so you have to come back the next day. '+
            'Unfortunately, that takes entirely too long, and you get the call that Austin didn\'t make it.<p><br><br>' +
            '<button type="button" class="btn btn-info pg4fail btnstyle">Play Again</button>',
            gameover: '<h1 class="inner-pages">You Got Lost and Couldn\'t Find the Gun Store</h1>' +
            '<p class="pagetext">After hours of going in circles, you finally give up. Too much time passes, and you get the bad news. Austin didn\'t make it.<p><br><br>' +
            '<button type="button" class="btn btn-info pg4fail btnstyle">Play Again</button>'
        },
        pipe: {
            description : '<h1 class="inner-pages">Successfully Attacked Austin\'s Captor</h1>' +
            '<p class="pagetext"> You pick up the pipe, silently sneak up on Austin\'s captor while he\'s having a smoke break '+
            ', and knock him square in the back of the head with the pipe. He goes out cold, you quickly pick up his gun and key chain. '+
            'You find a door on the side of the warehouse and try a few different keys before you get in. Very carefully, you quietly move through the halls. '+
            'Before long, you find Austin, but two guards are watching him closely. You are very anxious, but decide there are only two choices. '+
            'You either have a shootout with guards, or you wait to see what happens next. Either way, you take a chance.<p><br><br>' +
            '<button type="button" class="btn btn-info p4ch1 btnstyle" choice="pg4ch1">Shootout with Austin\'s Guards</button>' +
            '<button type="button" class="btn btn-info pg4ch2 btnstyle" choice="pg4ch2">Stay in the Shadows and Wait</button>',
            gameover: '<h1 class="inner-pages">You Were Unable to Take Out the Gaurd</h1>' +
            '<p class="pagetext">You try and attack, but he sees the pipe coming, dodges it and takes you down. You are taken hostage. Game over.<p><br><br>' +
            '<button type="button" class="btn btn-info pg4fail btnstyle">Play Again</button>'
        }
    },
    austin : {
        gunstore: {
            description : '<h1 class="inner-pages">Successfully Went to Gun Store</h1>' +
            '<p class="pagetext">You try to track down the gun store and eventually find it. ' +
            'You try and stay calm and play it cool with the sales clerk. But they pick up on your anxiety and sense of urgency. ' +
            'They continue the process with hesitation, and it takes almost two hours to complete the paperwork. '+
            'In the end they tell you it takes 24 hours to finalize the background check, so you have to come back the next day. '+
            'Unfortunately, that takes entirely too long, and you get the call that Vanessa didn\'t make it.<p><br><br>' +
            '<button type="button" class="btn btn-info pg4fail btnstyle">Play Again</button>',
            gameover: '<h1 class="inner-pages">You Got Lost and Couldn\'t Find the Gun Store</h1>' +
            '<p class="pagetext">After hours of going in circles, you finally give up. Too much time passes, and you get the bad news. Vanessa didn\'t make it.<p><br><br>' +
            '<button type="button" class="btn btn-info pg4fail btnstyle">Play Again</button>'
        },
        pipe: {
            description : '<h1 class="inner-pages">Successfully Attacked Vanessa\'s Captor</h1>' +
            '<p class="pagetext"> You pick up the pipe, silently sneak up on Vanessa\'s captor while he\'s having a smoke break '+
            ', and knock him square in the back of the head with the pipe. He goes out cold, you quickly pick up his gun and key chain. '+
            'You find a door on the side of the warehouse and try a few different keys before you get in. Very carefully, you quietly move through the halls. '+
            'Before long, you find Vanessa, but two guards are watching him closely. You are very anxious, but decide there are only two choices. '+
            'You either have a shootout with guards, or you wait to see what happens next. Either way, you take a chance.<p><br><br>' +
            '<button type="button" class="btn btn-info pg4ch1 btnstyle" choice="pg4ch1">Shootout with Vanessa\'s Guards</button>' +
            '<button type="button" class="btn btn-info pg4ch2 btnstyle" choice="pg4ch2">Stay in the Shadows and Wait</button>',
            gameover: '<h1 class="inner-pages">You Were Unable to Take Out the Gaurd</h1>' +
            '<p class="pagetext">You try and attack, but he sees the pipe coming, dodges it and takes you down. You are taken hostage. Game over.<p><br><br>' +
            '<button type="button" class="btn btn-info pg4fail btnstyle">Play Again</button>'
        }
    }
}

var page5 = {
    vanessa : {
        shootout: {
            description : '<h1 class="inner-pages">Successfully Took Down the Guards</h1>' +
            '<p class="pagetext">Without thinking, you jump out of the shadows and start shooting. ' +
            'You point to the guards and close your eyes as you keep pulling the trigger. ' +
            'When you open up your eyes, your barrel is smoking and the guards lay motionless on the ground. '+
            'You are in the clear, greet Austin with an embrace, and go through the keys patiently until you find the one that unlocks his shackles. '+
            'You help Austin limp to the car. He\'s severely injured, so you go straight to the hospital. You\'ve saved the day!<p><br><br>' +
            '<button type="button" class="btn btn-info pg5win btnstyle">Play Again</button>',
            gameover: '<h1 class="inner-pages">You Are Unable to Take Down the Guards</h1>' +
            '<p class="pagetext">The shootout doesn\'t go well. You take out one guard, but the other hits you in the chest. Austin is the last thing you see before you lose consciousness. Game over.<p><br><br>' +
            '<button type="button" class="btn btn-info pg5fail btnstyle">Play Again</button>'
        },
        wait: {
            description : '<h1 class="inner-pages">Successfully Waited it Out</h1>' +
            '<p class="pagetext">You are able to stay quiet in the shadows. Before long, the guards call their partner outside, ' +
            'but he doesn\'t pick up. They decide to go looking for him. As soon as the guards leave, you come from the shadows and greet Austin. ' +
            'He is really happy to see and tells you the key needed to unlock him. You quickly unfasten his shackles and start headed back to the car. '+
            'Just before you arrive, you are confronted by the guards. It doesn\'t look good for you guys. You will have to shoot your way out. '+
            'One way or another. This is it.<p><br><br>' +
            '<button type="button" class="btn btn-info pg5ch1 btnstyle" choice="pg5ch1">Fight Guards</button>',
            gameover: '<h1 class="inner-pages">You Get Spotted in the Shadows</h1>' +
            '<p class="pagetext">Accidentally, you trip on a random metal scrap on the ground. The two guards see you, so you start shooting. '+
            'The shootout doesn\'t go well. You take out one guard, but the other hits you in the chest. Austin is the last thing you see before you lose consciousness. Game over.<p><br><br>' +
            '<button type="button" class="btn btn-info pg5fail btnstyle">Play Again</button>'
        }
    },
    austin : {
        shootout: {
            description : '<h1 class="inner-pages">Successfully Took Down the Guards</h1>' +
            '<p class="pagetext">Without thinking, you jump out of the shadows and start shooting. ' +
            'You point to the guards and close your eyes as you keep pulling the trigger. ' +
            'When you open up your eyes, your barrel is smoking and the guards lay motionless on the ground. '+
            'You are in the clear, greet Vanessa with an embrace, and go through the keys patiently until you find the one that unlocks her shackles. '+
            'You help Vanessa limp to the car. She\'s severely injured, so you go straight to the hospital. You\'ve saved the day!<p><br><br>' +
            '<button type="button" class="btn btn-info pg5win btnstyle">Play Again</button>',
            gameover: '<h1 class="inner-pages">You Are Unable to Take Down the Guards</h1>' +
            '<p class="pagetext">The shootout doesn\'t go well. You take out one guard, but the other hits you in the chest. Vanessa is the last thing you see before you lose consciousness. Game over.<p><br><br>' +
            '<button type="button" class="btn btn-info pg5fail btnstyle">Play Again</button>'
        },
        wait: {
            description : '<h1 class="inner-pages">Successfully Waited it Out</h1>' +
            '<p class="pagetext">You are able to stay quiet in the shadows. Before long, the guards call their partner outside, ' +
            'but he doesn\'t pick up. They decide to go looking for him. As soon as the guards leave, you come from the shadows and greet Vanessa. ' +
            'She is really happy to see and tells you the key needed to unlock her. You quickly unfasten her shackles and start headed back to the car. '+
            'Just before you arrive, you are confronted by the guards. It doesn\'t look good for you guys. You will have to shoot your way out. '+
            'One way or another. This is it.<p><br><br>' +
            '<button type="button" class="btn btn-info pg5ch1 btnstyle" choice="pg5ch1">Fight Guards</button>',
            gameover: '<h1 class="inner-pages">You Get Spotted in the Shadows</h1>' +
            '<p class="pagetext">Accidentally, you trip on a random metal scrap on the ground. The two guards see you, so you start shooting. '+
            'The shootout doesn\'t go well. You take out one guard, but the other hits you in the chest. Vanessa is the last thing you see before you lose consciousness. Game over.<p><br><br>' +
            '<button type="button" class="btn btn-info pg5fail btnstyle">Play Again</button>'
        }
    }
}

var page6 = {
    vanessa: {
        result: {
            description: '<h1 class="inner-pages">You Escape Successfully</h1>' +
            '<p class="pagetext">You push Austin out of the way and surprise the guards with the gun. ' +
            'They never see it coming, so you have the upper-hand. Just like in the movies, you shoot and roll.' +
            'After pulling your matrix move, you get up and see that the guards are down and motionless. ' +
            'You look over at Austin and realize it\'s over. You\'ve saved the day.' +
            ' keeps a fitness tracker in his shoe.</p><br><br>' +
            '<button type="button" class="btn btn-info pg6win btnstyle">Play Again</button>',
            gameover: '<h1 class="inner-pages">You Are Unable to Take Down the Guards</h1>' +
            '<p class="pagetext">The shootout doesn\'t go well. You take out one guard, but the other hits you in the chest. Austin is the last thing you see before you lose consciousness. Game over.<p><br><br>' +
            '<button type="button" class="btn btn-info pg6fail btnstyle">Play Again</button>'
        }
    },
    austin: {
        result: {
            description: '<h1 class="inner-pages">You Escape Sucessfully</h1>' +
            '<p class="pagetext">You push Vanessa out of the way and surprise the guards with the gun. ' +
            'They never see it coming, so you have the upper-hand. Just like in the movies, you shoot and roll.' +
            'After pulling your matrix move, you get up and see that the guards are down and motionless. ' +
            'You look over at Vanessa and realize it\'s over. You\'ve saved the day.' +
            ' keeps a fitness tracker in his shoe.</p><br><br>' +
            '<button type="button" class="btn btn-info pg6win btnstyle">Play Again</button>',
            gameover: '<h1 class="inner-pages">You Are Unable to Take Down the Guards</h1>' +
            '<p class="pagetext">The shootout doesn\'t go well. You take out one guard, but the other hits you in the chest. Vanessa is the last thing you see before you lose consciousness. Game over.<p><br><br>' +
            '<button type="button" class="btn btn-info pg6fail btnstyle">Play Again</button>'
        }
    }
}


