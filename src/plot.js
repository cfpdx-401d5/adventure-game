const die = {
    id: 1,
    name: 'die',
    image: 'https://www.colourbox.com/preview/11617094-red-skull-and-crossbones.jpg',
    plot: 'You chose poorly.  You die.'
};

const fightLeftHand = {
    id: 2,
    name: 'Fight Left-Handed',
    plot: 'You choose to continue fighting with your left hand.',
    choices: [die]
};

const fightRightHand = {
    id: 3,
    name: 'Fight Right-Handed',
    image: 'http://i337.photobucket.com/albums/n361/northerngrunge/Inigo/Inigo15.jpg',
    plot: '<p>You choose to switch to your right and and contiue fighting.  You win the fight.</p> <p>Do you: </p>',
    choices: []
};

const fightInigo = {
    id: 4,
    name: 'Fight Inigo',
    image: 'https://i.ytimg.com/vi/GT0TBWg3C3k/maxresdefault.jpg',
    plot: '<p>You fight Inigo, until you notice he is chuckling. "Why are you laughing", you ask.</p>  <p>"Because I know something you do not," Inigo replies.</p> <p>"And what is that?", you ask.</p>  <p>"I am not left handed," he says as he shifts his sword to his right hand.</p> <p>Do you: </p>',
    choices: [fightLeftHand, fightRightHand]
};

const plotItems = [die, fightInigo, fightLeftHand, fightRightHand];

function nextMove(props) {
    return plotItems.filter(item => {
        if (props === item.id) {
            return item;
        }
    });
}

module.exports = nextMove;
