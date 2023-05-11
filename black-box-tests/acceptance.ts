import fetch from 'node-fetch'
;(async function () {
  console.log('Running Acceptance Tests')

  await test('it should create a file full of pokemon names', async () => {
    console.log('My first acceptance test')

    await triggerWebhook()
  })

  console.log('\x1b[32m%s\x1b[0m', 'All Acceptance Passed')
  process.exit(0)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function fail() {
    console.log('\x1b[31m%s\x1b[0m', 'Acceptance Tests Failed')
    process.exit(1)
  }

  type TestFunction = () => Promise<void>
  async function test(msg: string, t: TestFunction) {
    console.log('Running', msg)

    try {
      await t()
    } catch (e) {
      console.log(e)

      fail()
    }
  }

  async function triggerWebhook() {
    fetch('/api/webhook')
  }
})()
