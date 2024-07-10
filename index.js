// Function to handle Saturday activities
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// Function to handle Monday activities
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

// Function to wrap an adjective in a highlight
function wrapAdjective(flair = '*') {
    return function(adjective) {
        return `You are ${flair}${adjective}${flair}!`;
    }
}

module.exports = {
    saturdayFun,
    mondayWork,
    wrapAdjective
};

module.exports = saturdayFun;

