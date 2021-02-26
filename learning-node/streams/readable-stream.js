const { Readable} = require('stream')

const readableStrem = new Readable()

readableStrem.push(`${0/0} `.repeat(10).concat("Batman, Batman!"))
readableStrem.push(null);

readableStrem.pipe(process.stdout)