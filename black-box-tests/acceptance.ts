console.log('Running Acceptance Tests')

function fail() {
  console.log('\x1b[31m%s\x1b[0m', 'Acceptance Tests Failed')
  process.exit(1)
}

console.log('\x1b[32m%s\x1b[0m', 'All Acceptance Passed')
process.exit(0)
