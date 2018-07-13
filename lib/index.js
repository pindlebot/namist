const sortBy = require('lodash.sortby')
const getRandom = require('random-seed')
const permutate = require('./permutate').permutate
const score = require('./score')
const normalize = require('./normalize')
const { SUFFIXES } = require('./fixtures')
const dataset = require('prefix-suffix')
/**
 * Names your shitty startup. Returns a list of possible names.
 * @example
 *
 *     namer('cloud')
 *     namer('health fit')
 *     namer(['health', 'fit'])
 *     => ['Fitrise', 'Fityard', 'Healthup', ...]
 */

function namer (words = [], options = {}) {
  if (typeof words === 'string') words = words.split(' ')
  let modifiers = options.modifiers || dataset.prefixes.slice(0, 1000).map(v => v[0])
  let heads = options.heads || dataset.suffixes.slice(0, 1000).map(v => v[0])
  let suffixes = options.suffixes || SUFFIXES
  // Random number generator
  let gen = getRandom(options.seed || Math.random())
  let rand = () => gen.floatBetween(0, 1)
  let list = permutate(words, { modifiers, heads  })
    .map((word) => ([
      normalize(word),
      score(word, { rand, suffixes })
    ]))

  // Sort by score
  return sortBy(list, ([word, score]) => -1 * score)
    .map(r => r[0])
}

module.exports = namer
