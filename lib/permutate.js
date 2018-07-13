/*
 * Adds suffixes and prefixes to words
 */

function permutate (words, { modifiers, heads }) {
  if (words.length === 0) {
    return permutateFixes(modifiers, heads)
  } else {
    return permutateFixes(modifiers, words)
      .concat(permutateFixes(words, heads))
  }
}

/*
 * I'm feeling lucky
 */

function permutateFixes (modifiers, heads) {
  return modifiers.reduce((list, modifier) => {
    return heads.reduce((list, head) => {
      if (modifier === head) return list
      return list.concat([ `${modifier} ${head}` ])
    }, list)
  }, [])
}

module.exports = { permutate, permutateFixes }
