const playAgain = {
    id: 42,
    name: 'Play Again?',
    plot: 'Care to play again?',
};

const die = {
    id: 3,
    name: 'die',
    image: 'https://www.colourbox.com/preview/11617094-red-skull-and-crossbones.jpg',
    plot: 'You chose poorly.  You die.',
    choices: [playAgain]
};

const winStage1 = {
    id: 7,
    name: 'WIN!',
    image: 'https://s-media-cache-ak0.pinimg.com/originals/f5/8a/86/f58a86065750d032b1683bae64d203f0.jpg',
    plot: 'You have won the first stage in Rescue the Princess. You will have to wait for the second release to play Stage 2!',
    choices: [playAgain]
};

const fightLeftHand = {
    id: 4,
    name: 'Fight Left-Handed',
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSphvZmZmtJxwMvUIoca9E7iDLxAdOWCRhfvrGiddneGM2i_2v2',
    plot: 'You choose to continue fighting with your left hand.',
    choices: [die]
};

const killInigo = {
    id: 51,
    name: 'Kill Inigo',
    image: 'https://thenypost.files.wordpress.com/2014/10/bride6.jpg?quality=90&strip=all',
    plot: 'You can\'t have the dumb bloody fool chasing after you. So, you obligingly dispatch him with a quick thrust of your blade to his heart. You\'re certainly a cold-hearted man in black.',
    choices: [winStage1]
};

const haveMercy = {
    id: 52,
    name: 'Show Mercy',
    image: 'http://www.mostlyplanned.com/wp-content/uploads/2015/08/PBduel4.jpg',
    plot: '"I would as soon destroy a stained-glass window as an artist like yourself. However, since I can\'t have you following me either...." You hit Inigo over his head with the hilt of your sword, knocking him out cold. "Please understand," you add, though probably more for yourself than for the unconscious man at your feet, "I hold you in the highest respect."',
    choices: [winStage1]
};

const fightRightHand = {
    id: 5,
    name: 'Fight Right-Handed',
    image: 'http://i337.photobucket.com/albums/n361/northerngrunge/Inigo/Inigo15.jpg',
    plot: '<p>"There is something I ought to tell you," you respond. Inigo says, "Tell me." "I\'m not left-handed either," you reply. You choose to switch to your right hand and and contiue fighting.  In a dazzling display of swordsmanship, you disarm Inigo, winning the fight. Inigo says only, "Kill me quickly".</p> <p>Do you: </p>',
    choices: [killInigo, haveMercy]
};

const lovePersuadeFail = {
    id: 0.0012,
    name: 'Your persuasion has failed',
    image: 'http://4.bp.blogspot.com/-_X4c-xG5-tc/UwVzGAsg5YI/AAAAAAAAAC4/sI-uX2n1ry8/s1600/princess-bride-movie-screencaps.com-2304.jpg',
    plot: '"It is as a man of honor that I must fight you, for I have given my word to my employer that I shall," Inigo explains regretfully. He raises his blade, "Are you ready to proceed?"',
    choices: [fightLeftHand, fightRightHand]
};

const revengePersuadeSuccess = {
    id: 0.0022,
    name: 'Your Persuasion Has Succeeded!',
    image: 'http://4.bp.blogspot.com/-_X4c-xG5-tc/UwVzGAsg5YI/AAAAAAAAAC4/sI-uX2n1ry8/s1600/princess-bride-movie-screencaps.com-2304.jpg',
    plot: '"You are a brave man, I see, and true of heart! And, I confess, having been in the revenge business for over twenty years with no success? It has been getting hopeless. Perhaps a partner in the revenge business is just what I need," muses Inigo. He mulls the thought over for a moment, and then lowers his blade and puts out his hand. "Very well, partner! We will rescue your true love and then you will help me find the six-fingered man!"',
    choices: [winStage1]
};

const lovePersuade = {
    id: 0.001,
    name: 'Appeal to Love & Virtue',
    image: 'https://deepenough2dream.files.wordpress.com/2015/05/westley-princess-bride.jpg',
    plot: '"You see, Senor Montoya, it is true love that compels me to save the princess. Surely so noble a man as youreself is more compelled to fight on behalf of noble virtues, than for what meager monies that fat little fool offers you. So, I say, join with me!"',
    choices: [lovePersuadeFail]
};

const revengePersuade = {
    id: 0.002,
    name: 'Appeal to Revenge',
    image: 'https://deepenough2dream.files.wordpress.com/2015/05/westley-princess-bride.jpg',
    plot: '"A man of your caliber should not work as the mere errand boy of so low a beast as the one paying your keep now. I fight for true love, you fight to avenge a loved one. Join me in my quest, and I shall join thee in yours. Together, we shall rescue my beloved AND avenge your father!"',
    choices: [revengePersuadeSuccess]
};

const reasonInigo = {
    id: 0.01,
    name: 'Try Reasoning With Inigo',
    image: 'https://s-media-cache-ak0.pinimg.com/736x/d4/04/62/d40462a2c5164290027ab727688cd449.jpg',
    plot: '*GULP* A man who has done nothing but study swordcraft and pursue bloody revenge for more than 20 years? A bitter fight this would surely be! You hope to reason with him... "Stay your blade a minute, Senor Montoya! I think we might reach a mutually beneficial truce." Inigo cocks his head at you and says, "Oh?"',
    choices: [lovePersuade, revengePersuade]
};

const fightInigo = {
    id: 6,
    name: 'Fight Inigo',
    image: 'https://i.ytimg.com/vi/GT0TBWg3C3k/maxresdefault.jpg',
    plot: '<p>You fight Inigo, until you notice he is chuckling. "Why are you laughing", you ask.</p>  <p>"Because I know something you do not," Inigo replies.</p> <p>"And what is that?", you ask.</p>  <p>"I am not left handed," he says as he shifts his sword to his right hand.</p> <p>Do you: </p>',
    choices: [fightLeftHand, fightRightHand]
};

const talkInigo = {
    id: 2,
    name: 'Talk to Inigo',
    image: 'https://s-media-cache-ak0.pinimg.com/564x/38/4e/17/384e17aa169dd085f89b323800269739.jpg',
    plot: 'The Spaniard is as good as his word, and you safely reach the top of the cliffs. Once there, he even lets you regain your breath. While you recuperate from your climb, the Spaniard asks if you are, perchance, a six-fingered man. You respond: "Do you always begin conversations this way?" To which he launches into the tale of his youth: as it turns out, a six-fingered man hired the Spaniard\'s father, a peerless swordsmith, to craft him a blade. The six-fingered man, rather than pay fair market price, chose instead to murder the Spaniard\'s father in front of his own son, and leave the Spaniard himself with an impressive scar. The Spaniard\'s intent, since that day more than twenty years ago, has been solely to hone his swordcraft and track down the six-fingered man so that he may say to the man, "Hello. My name is Inigo Montoya. You Killed my father. Prepare to die." You say: "Well, I certainly hope you find him someday", and the Spaniard, in response, asks if you are ready to fight.',
    choices: [fightInigo, reasonInigo]
};

const acceptRope = {
    id: 0.1,
    name: 'Climb the Rope',
    image: 'https://s-media-cache-ak0.pinimg.com/736x/29/4c/50/294c50ca5f53877214a43c4ceb462674.jpg',
    plot: 'You accepted the Spaniard\'s assistance and have made it to the top of the Cliffs of insanity!',
    choices: [talkInigo]
};

const refuseRope = {
    id: 0.2,
    name: 'Refuse the Rope',
    image: 'https://s-media-cache-ak0.pinimg.com/736x/3f/76/ac/3f76ac69ccd35ad10ef4db6c5f850df9.jpg',
    plot: 'You refused the help of a man who pledged on his sainted father\'s soul to ensure you made it to the top alive! The Gods frown upon your mistrust. O, faithless adventurer!',
    choices: [die]
};

const inigoRope = {
    id: 1,
    name: 'Take the rope?',
    image: 'https://s-media-cache-ak0.pinimg.com/736x/51/d3/2a/51d32a36687b8c3cfb56da0edecb7f2c.jpg',
    plot: '<p>You are climbing, hand by hand, up the sheer face of the cliffs of insanity. The Spaniard looks down at you and calls, "Hello there! Slow going?" You respond: "  Look, I don\'t mean to be rude, but this is not as easy as it looks, so I\'d appreciate it if you wouldn\'t distract me." The Spaniard says: "I do not suppose you could a-speed things up?" You respond: "If you\'re in such a hurry, you could lower a rope or a tree branch or find something useful to do." The Spaniard: "I could do that. I still got some rope up here, but I do not think you would accept my help, since I am only waiting around to kill you." You retort: "That does put a damper on our relationship." The two of you dicker a bit, and eventually the Spaniard swears, upon the soul of his father, Domingo Montoya, that you will reach the top alive. He throws you the rope. Do you accept the help of your current nemesis?',
    choices: [acceptRope, refuseRope] 
};

const plotItems = [die, winStage1, inigoRope, acceptRope, refuseRope, talkInigo, reasonInigo, lovePersuade, lovePersuadeFail, revengePersuade, revengePersuadeSuccess, killInigo, haveMercy, fightInigo, fightLeftHand, fightRightHand];

function nextMove(props) {
    const plotConst = plotItems.filter(item => { //eslint-disable-line
        if (props === item.id) {
            return item;
        }
    });
    return plotConst[0];
}

module.exports = nextMove;
