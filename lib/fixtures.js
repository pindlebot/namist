const MODIFIERS = [
  'air', // airtable
  'active',
  'arc',
  'auto',
  'app',
  'avi', // aviato
  'base', // basecamp
  'co',
  'con',
  'core',
  'clear', // clearleft
  'en', // envato
  'echo', // echoplex
  'even',
  'ever', // note
  'fair', // fairlight
  'go', // gopro
  'high', // highrise
  'hyper',
  'in',
  'inter',
  'iso',
  'jump',
  'live', // livejournal
  'make',
  'mass', // massdrop
  'meta', // metalab
  'matter', // mattermost
  'omni', // omniture
  'on',
  'one', // onenote
  'open',
  'over', // overwatch
  'out',
  're',
  'real',
  'peak',
  'pure',
  'shift',
  'silver', // silverstripe
  'solid',
  'spark',
  'start',
  'true', // truecrypt
  'up', // upwork
  'vibe', // vibewrite
  'stack', // stackoverflow
  'brain' // braintree
]

const HEADS = [
  'arc', // luminarc
  'atlas',
  'base', // crunchbase
  'bay', // ebay
  'boost',
  'capsule', // time capsule
  'case',
  'center',
  'cast', // shoutcast
  'click',
  'dash',
  'deck',
  'dock', // flowdock, stardock, apidock
  'dot', // slashdot
  'drop', // massdrop
  'engine',
  'flow', // eventflow
  'glow', // afterglow
  'grid', // sendgrid
  'gram', // instagram
  'graph',
  'hub', // github
  'focus',
  'kit',
  'lab', // gitlab
  'level',
  'layer', // softlayer
  'light', // fairlight
  'line',
  'logic', // authlogic
  'load',
  'loop',
  'ment',
  'method',
  'mode',
  'mark', // zipmark
  'ness',
  'now',
  'pass',
  'port',
  'post',
  'press', // wordpress
  'prime', // pushprime
  'push',
  'rise', // highrise
  'scape', // netscape
  'scale',
  'scan', // skyscanner
  'scout',
  'sense',
  'set',
  'shift', // redshift, infoshift
  'ship', // codeship
  'side',
  'signal', // appsignal
  'snap',
  'scope', // periscope
  'space', // squarespace
  'span',
  'spark',
  'spot', // blogspot
  'start',
  'storm', // packetstorm
  'stripe', // silverstripe
  'sync',
  'tap', // healthtap
  'tilt',
  'ture', // omniture
  'type',
  'view',
  'verge', // converge
  'vibe',
  'ware',
  'yard', // engineyard, shipyard
  'up', // squareup,
  'book', // facebook,
  'stream', // wordstream
  'table', // airtable
  'floss', // mentalfloss
  'kit',
  'hunt', // producthunt
  'leaf',
  'tree',
  'tool',
  'journal',
  'rabbit', // taskrabbit
  'wallet',
  'karma', // creditkarma
  'byte', // triplebyte
  'query', // bigquery
  'whisk', // openwhisk
  'brite',
  'ref',
  'hero'
]

// Actual suffixes (not just words); ranks lower
const SUFFIXES = [
  'ary', // apiary
  'able', // mashable
  'ance',
  'ible',
  'ice',
  'ite', // graphite
  'er',
  'eon', // vaporeon :p
  'ent',
  'ful',
  'gent',
  'tion',
  'sion',
]

module.exports = {
  MODIFIERS,
  HEADS: HEADS.concat(SUFFIXES),
  SUFFIXES
}
