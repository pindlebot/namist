const sortBy = require('lodash.sortby')
const getRandom = require('random-seed')
const permutate = require('./permutate').permutate
const score = require('./score')
const normalize = require('./normalize')
const { SUFFIXES, HEADS, MODIFIERS } = require('./fixtures')
// const dataset = require('prefix-suffix')

function normalizeOptions (options) {
  let limit = (options.limit || 100) / 2
  let offset = (options.offset || 0)
  if (offset > 0) {
    offset = offset / 2
  }

  let modifiers = (options.modifiers || MODIFIERS).slice(offset, offset + limit)
  let heads = (options.heads || HEADS).slice(offset, offset + limit + 1)
  let suffixes = options.suffixes || SUFFIXES
  return {
    ...options,
    limit,
    offset,
    modifiers,
    heads,
    suffixes
  }
}

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
  options = normalizeOptions(options)
  // Random number generator
  let gen = getRandom(options.seed || Math.random())
  let rand = () => gen.floatBetween(0, 1)
  let list = permutate(words, options)
    .map((word) => ([
      normalize(word),
      score(word, { rand, suffixes: options.suffixes })
    ]))

  // Sort by score
  let data = sortBy(list, ([word, score]) => -1 * score)
    .map(r => r[0])

  return data
}

namer.SUFFIXES = SUFFIXES
namer.MODIFIERS = MODIFIERS
namer.HEADS = HEADS
module.exports = namer
