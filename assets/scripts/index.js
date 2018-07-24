'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('../..example')

// use require without a reference to ensure a file is bundled
// require('./example')
//
// use require without a reference to ensure a file is bundled
// use require without a reference to ensure a file is bundled
'use strict'

const events = require('./events')

$(() => {
  events.addHandlers()
})
