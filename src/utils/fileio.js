const fs = require('fs');
const path = require('path');

function getRecursiveTree(dirname, depth) {
    let tree = new Array();
    let content = fs.readdirSync(dirname);
    let key;

    for (key in content) {
        let filename = path.resolve(dirname, content[key]);
        let arr = new Array();
        arr.push(content[key]);
        fs.stat(filename, (err, stat) => {
            if (err) console.log(err);
            else {
                if (stat.isDirectory()) {
                    let dirs = fs.readdirSync(filename);
                    arr.push(dirs);
                }
            }
        });
        tree.push(arr);
    }

    return tree;
}

module.exports = { getRecursiveTree };
