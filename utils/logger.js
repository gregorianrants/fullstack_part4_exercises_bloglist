const info = (...params) => {
  console.log(...params)
}

const error = (...params) => {
  console.error(...params)
}

const forExport = {
  info, error
}

module.exports = forExport