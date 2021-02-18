const { uniqueNamesGenerator, colors, animals, adjectives } = require('unique-names-generator');

exports.getUniqueName = () => {
  return (
    uniqueNamesGenerator({
      dictionaries: [adjectives, animals, colors], // colors can be omitted here as not used
      length: 2
    }) // big-donkey
  );
}