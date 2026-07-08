// Write a function that checks the first name of a string and if it matches 'R' or 'r' then return playing Banjo along with the string
// else return not playin Banjo.


function areYouPlayingBanjo(name) {
    // Implement me
    if(name[0] === 'R' || name[0] === 'r') {
        return (`${name} plays banjo`)
    }
    else {
        return `${name} does not play banjo`
    }
    // return name;
}

module.exports = areYouPlayingBanjo;