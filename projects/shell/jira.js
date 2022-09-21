const cypress = require('cypress')

const fse = require('fs-extra')

const { mergeFilesAndSendToJira } = require('tm4j-cypress-integration')



const runOptions = cypress.cli.parseRunArguments(process.argv.slice(2))



async function runTests() {

    await fse.remove('tm4j_results')

    const { totalFailed } = await cypress.run(await runOptions)

    await mergeFilesAndSendToJira();

    process.exit(totalFailed)

}



runTests()
