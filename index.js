// index.js
require('datejs');

function combineUsers(...args) {
    let combinedObject = {
        users: []
    };

    args.forEach(arr => {
        combinedObject.users = [...combinedObject.users, ...arr];
    });

    combinedObject.merge_date = Date.today().toString('M/d/yyyy');

    return combinedObject;
}

module.exports = combineUsers;
