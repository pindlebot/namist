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
  let limit = (options.limit || 100) / 2
  let offset = (options.offset || 0)
  if (offset > 0) {
    offset = offset / 2
  }
  let modifiers = options.modifiers || dataset.prefixes.slice(offset, offset + limit).map(v => v[0])
  let heads = options.heads || dataset.suffixes.slice(offset, offset + limit + 1).map(v => v[0])
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
  let data = sortBy(list, ([word, score]) => -1 * score)
    .map(r => r[0])

  return data
}

module.exports = namer
