const { Transform } = require('stream')

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString()
      .split(' ')
      .map((d, i) => i === 0 ? d.toLowerCase() : d.charAt(0).toUpperCase() + d.slice(1))
      .join('')
    );
    callback()
  }
})

process.stdin.pipe(transformStream).pipe(process.stdout)