const fs = require('fs');


const readWordsFromFile = () => {
  const words = [];
  const allFileContents = fs.readFileSync(__dirname + '/data/word-list.txt', 'utf-8');
  allFileContents.split(/\r?\n/).forEach(line =>  {
    words.push(line)
  });
  return words;
}

module.exports = {readWordsFromFile}
