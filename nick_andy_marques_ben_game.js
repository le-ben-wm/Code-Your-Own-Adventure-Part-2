alert("All answers will be lowercase only. ANSWERS ARE CASE SENSITIVE.");
    var startGame = prompt("The year is YX15. Your nation, the Atrar Union, located on planet Serenity, is being attacked by the Methera Empire. " +
        "War has broken out as the Atrar soldiers defend your nation against the Methera invaders. Do you help defend at the front lines, " +
        "try to find the mothership, try to resolve the conflict by speaking with the leader, or flee your planet? (defend/mothership/talk/flee)");


    switch (startGame) {
        case "defend":
            var defendPlanet = prompt("There's smoke in the air, buildings taller then the clouds for miles on fire. The whole world in front of you is collapsing. Soldiers and " +
                "civilians are dying all over and most Commanders have abandoned them. Now everyone on Serenity looks to you for leadership. Your primary objective is to find and secure " +
                "Chancellor Keith but you need to get civilians out of danger. You have limited assets. What will you spend them on? Who will you save?  (chancellor/civilians)");

            if (defendPlanet === "chancellor"){
                var serOneChan = prompt("You start sending out scouts and Serenity has been bombarded and turned into a complete war zone. Your scouts come back with good and bad news. " +
                    "They have found the chancellor injured and brought him back alive but unconscious and injured from a Methera Bot Execution Camp in the capital building. In the process, "+
                    "however, your scouts let several hundreds of civilians die to keep their cover. A nearby Atrar ship will pick up the Chancellor if you personally escort him to one "+
                    "of two LZ's. 1st LZ INTEL: The top of one of the only standing buildings battered by bombardment surrounded by city still actively crawling with Methera Bot-Men. "+
                    "2nd LZ INTEL: The tip of a nearby mountain surrounded by wildlife and forest area that is known to have a hidden Bot-Men Battle Battallion camp. (1/2)");

                switch (serOneChan) {
                    case "2":
                        var serTwoChan1 = prompt("You move across the forest, trying to reach the mountain but you suddenly find a trail of tracks made from what you "+
                            "know are Methera Bot-Men. Now do you keep heading to the Mountain or try to ambush the camp?  (mountain/camp)");
                        if (serTwoChan1 === "camp"){
                            var dead2 = alert("Your ambush party was ambushed and you were killed");
                        } else if (serTwoChan1 === "camp"){
                            var gameWin2 = alert("You are suddenly ambushed when you're almost to the LZ and you rush the Chancellor to the ship, which you see is landing in "+
                                "the distance. He barely makes it on board but you feel a sharp pain in your chest. You're scared to look down but do so anyway to see that you were shot. "+
                                "The pilot barely takes off with everyone onboard but you're bleeding out. The Chancellor, however, calls upon a secretive support stash of ships and drives"+
                                " away the alien invaders. Congratulations, you've sacrificed yourself to win the war. Game Win.");
                        }
                        break;
                    default:
                        alert("On the way to your objective, you get ambushed by a group of SuperBots. They were expecting you there. I'm Sorry, you have died.");
                        break;
                }

            }else if(defendPlanet === "civilians" ){
                var serOneCiv = prompt("You send out rescue crews to the nearby buildings in the cities and find hundreds of people in the fire. The Methera Bot-Men were looking ford" +
                    " civilian captives too and your squads sacrifice lots of men to bring those innocent people out of harms way. In the fighting, your command center gets hacked by the enemy "+
                    "and plants a message showing you the execution of the Chancellor in what you recognize as the capital building and you see lots of hostages in the background. "+
                    "Your men, however, trace that the message from an underground sewer juncture. Your men are demoralized and say they'll do whatever you say only if you go with them. Now, "+
                    "Where will you go?  (sewer/capital)");

                if (serOneCiv === "capital"){
                    var capitalWall = prompt("You and your men squirm throughout the city avoiding detection to get to the capital building. The building is surrounded by a wall build with "+
                        "Metharian metalwork. Your men silently take out the guards and you're faced with a Quad code lock. You have to hack it and create your own passwords. (just type 'ok')");
                    if (capitalWall === "ok"){
                        var quest1 = prompt("Password One: What is most important to you?");
                        var quest2 = prompt("Password Two: If you could own a planet, what would you name it?");
                        var quest3 = prompt("Password Three: What would you name your imaginary friend?");
                        var quest4 = prompt("Password Four: What is your favorite color?");
                        var password = [quest1, quest2, quest3, quest4];
                        var serTwoCivCap = prompt("You enter the building and find two corridors, which will you take? (left/right)");
                        if (serTwoCivCap === "left"){
                            var dead1 = alert("You enter a room that has the floor dug out and filled with dangerous aliens poisonous species. A Bot-Man was secretly "+
                                "behind you and pushes you in and you fall to your death. ");
                        }else if (serTwoCivCap === "right"){
                            var serTwoCivCapRit = prompt("You enter a room full of hostages and you go to free them but a Bot-Man was behind you and fights you."+
                                " You see his half-man, half-robot is weakest where the flesh and metal combine together. You strike those joints and the bot collapses. "+
                                "Your crew which was far behind you without you noticing, catches up just in time and destoys the bot. You must now free the prisoners "+
                                "from an ominous computer console and you need to re use your password choices. (just type 'ok' again)");
                            var lock1 = prompt("what is password one:");
                            var lock2 = prompt("what is password two:");
                            var lock3 = prompt("what is password three:");
                            var lock4 = prompt("what is password four:");
                            if (lock1 === password[0] && lock2 === password[1] && lock3 === password[2] && lock4 === password[3]){
                                var gameWin1 = alert("You unlock the hostages and accidentally disengage the mothership's support. You killed millions of ruthless "+
                                    "Methera soldiers and drive the survivors away. Congratulations! You saved the Atrar Union. Game Win.");
                            }
                        }

                    } else{
                        var gameLose1 = alert("You got one or more of your passwords wrong and the console calls for the mothership's support. Your actions cause the deaths "+
                            "of millions and the fall of the the Atrar Union. Game Over.");
                    }
                }

            }
            break;



        case "mothership":
            var mothership = prompt("The great commander John Flag called a meeting of the council of the Atrar nation. He rose in front of the council and said" +
                " \"The Atrar nation has taken enough beatings from the Methera Empire. This A.I. race has taken too much from us for to long, now it's time to take the " +
                "fight back to them. We will make our final stand again" +
                "the Methera by (blowing up their mothership/make a final stand in space)\"");
            if (mothership === "blowing up their mothership") {
                var blowingUpTheirMothership = prompt("\"They destroyed our cities, they destroyed our home, they destroyed our world, and now we will destroy their world, " +
                    "to avenge ours. \"The remaining forces of Atrar Nation gathered in the air ship hangers the next morning to prepare for their final stand. Commander " +
                    "John Flag was accompanied by his two best soldiers, John-117 and Kelly-078. \"You have all been trained for this moment, make your last stand count for " +
                    "the Atrar nation.\" John gets into his ship armed with a (rifle/nuke)");
                if (blowingUpTheirMothership === "nuke") {
                    var nuke = prompt("Stuff");
                }
                else if (blowingUpTheirMothership === "rifle") {
                    var rifle = prompt("work");
                }
            }
            else if (mothership === "make a final stand in space") {
                console.log("Star Trek");
            }
            break;

        case "talk":
            var speakWithLeader = prompt("Your meeting with the leader of the Methera invaders is going very well, until you see a sharp object hanging above you. " +
                "Do you continue the meeting or run back to your planet? (continue/run)");
            switch (speakWithLeader) {
                case "continue":
                    var continueToSpeak = prompt("The Meeting continues and goes swell until the leader asks for a sacrifice or war." +
                        " The sacrifice he wants is the Chancellor. Do you give him the sacrifice? (yes/no)");
                    switch (continueToSpeak) {
                        case "yes":
                            var yes = prompt("Along with the chancellor dies some of the Atrar Union's deepest secrets. Rumors are that he knew the location and communication codes to a" +
                                " secret military base with extra support ships but there is no such thing on record. " +
                                "I guess we'll never know.");
                            break;
                        case "no":
                            var no = prompt("You refused the peace treaty, and now you start to sword fight with the Methera Empire. He takes a swing at you. Do you " +
                                "roll out of the way or hold the sword sideways to block? (roll/block)");
                            break;
                    }
                    switch (no) {
                        case "roll":
                            var roll = prompt("You roll out of the way. Do you swing your sword back or run to think of a plan? (swing/plan)");
                            break;
                        case "block":
                            alert("He hits your sword, and you fall to your knees. He cuts your head off. GAME OVER!!!!!");
                    }
                    switch (roll) {
                        case "swing":
                            alert("You swing your sword and miss, causing your sword to get stuck into the ground. Soren Lynx, the leader of the Methera Empire, cuts you in half. GAME OVER!!!!!!");
                            break;
                        case "plan":
                            var plan = prompt("You hide in a corner to plan. Do you sleep it off or surrender? (sleep/surrender)");
                            switch (plan) {
                                case "sleep":
                                    alert("You slept, thinking Soren Lynx wouldn't find you, and you had such a good sleep. You never wake up ever again!!!!!!! GAME OVER!!!!!!!!");
                                    break;
                                case "surrender":
                                    alert("You surrender and are thrown into the propeller and the war is over. You made all of your people die or become slaves. GAME OVER!!!!!!!");
                            }
                            break;
                    }
                    break;
            }
            break;

                case "flee":
                    alert("As the Methera forces killed all of your friends and family several years ago, you have no attachment " +
                        "to the Atrar Union and decide to flee the planet in the interest of saving your own life. You get in your ship and prepare " +
                        "to take off. With the amount of fuel you have, there are only a few other planets you will be able to reach before you run " +
                        "out. The closest, Nustrye, is an ally of the Atrar Union and would probably welcome you in. However, you might also be seen " +
                        "as a traitor, as you are a commander in the Atrar military. The next planet, Pasleau, is known as a neutral group, often staying " +
                        "out of conflicts and not taking sides in wars. However, because of this, they often do not take in refugees from other " +
                        "nations. The furthest planet you can go to is Shaenga, which is one of the many planets in the galaxy that has not been " +
                        "colonized yet.");
                    var fleePlanet = prompt("Which planet do you go to? (nustrye/pasleau/shaenga)");
                    if (fleePlanet === "nustrye") {
                        var nustrye = prompt("You decide to head to the closest planet, Nustrye. When you arrive on the planet, you are immediately arrested. From what you can tell, " +
                            "the news that you have fled the Atrar Union has already reached Nustrye, and you have been labelled as a traitor. Do you try to break away, " +
                            "or do you resign yourself to your fate? (break away/ arrest)");
                        switch (nustrye) {
                            case "break":
                                var breakChance = Math.random();
                                if (breakChance >= .5) {
                                    alert("You decide to try to break away. You fight off the first officer and manage to run fast enough and find a hiding place. " +
                                        "You are able to wait out the war and live peacefully for the rest of your life. YOU WIN!")
                                }
                                else{
                                    alert("You decide to try to break away. You manage to fight off the first officer, but you are quickly overwhelmed by" +
                                        "more. You are arrested and sentenced to death for being a traitor. GAME OVER.")
                                }
                                break;
                            case "arrest":
                                alert("You resign yourself to your fate. You are arrested and sentenced to death for being a traitor. GAME OVER.")
                                break;
                            default:
                        }
                    }
                    else if (fleePlanet === "pasleau") {
                        var pasleau = prompt("You decide to head to the middle planet, Pasleau. As you are approaching the planet, you are greeted by several warships, which you " +
                            "assume are from Pasleau. They ask you what your business with the planet is. Do you tell them the truth or do you lie? (truth/lie)")
                        switch (pasleau) {
                            case "truth":
                                var pasleauAccept = Math.random();
                                if (pasleauAccept >= .5) {
                                    alert("You decide to tell the warships the truth about fleeing from the war between the Atrar Nation and the Methera Empire. To your surprise, " +
                                        "you are told that you are allowed to stay on the planet as a refugee. YOU WIN!")
                                }
                                else {
                                    alert("You decide to tell the warships the truth about fleeing from the war between the Atrar Nation and the Methera Empire. As expected, " +
                                        "you are denied entry into the planet as a refugee. As you do not have enough fuel to fly to another planet, you are left to float in space " +
                                        "for the rest of your life. GAME OVER.")
                                }
                                break;
                            case "lie":
                                alert("You decide to lie to the warships about your situation, as you believe that lying would give you a better chance of gaining entry to the planet. " +
                                    "However, you are unable to come up with something quickly, and are immediately fired upon on the basis of suspicious activity. GAME OVER.")
                                break;
                            default:
                        }
                    }
                    else if (fleePlanet === "shaenga") {
                        var shaenga = prompt("You decide to head to the farthest planet, Shaenga. As you are approaching the planet, you are met with several warships " +
                            "which you assume are from Shaenga. They ask you what your business is. You know that if you answer falsely and they find out later, you will be " +
                            "arrested. You tell them you are a refugee from the Atrar nation and have fled from the war. You are immediately turned away. Do you attempt to find " +
                            "a different way around, or do you resign yourself to your fate? (different/resign)")
                        switch (shaenga) {
                            case "different":
                                var findChance = Math.random();
                                if (findChance >= .5) {
                                    alert("You decide to find a different, less populated area on the planet where you can land and wait out the war. After an hour and with only a " +
                                        "sliver left on your fuel gauge, you manage to find an uninhabited area where you can live in your ship and wait out the war. YOU WIN!")
                                }
                                else {
                                    alert("You decide to find a different, less populated area on the planet where you can land and wait out the war. However, you are unable to " +
                                        "find a place to land before you run out of fuel and are left drifting endlessly for the rest of your life. GAME OVER.")
                                }
                                break;
                            case "resign":
                                alert("As you don't have enough fuel to travel to another planet, you resign yourself to your fate. You float off into space as you wait out your " +
                                    "days until you run out of resources. GAME OVER.");
                                break;
                            default:
                        }
                    }
                    else {
                        alert("Please choose one of the options in the parentheses. Remember, answers are CASE SENSITIVE.")
                    }
}/* Work on your own part:
 Andy: Defend
 Nick: Mothership
 Marques: Talk
 Ben: Flee
 */
