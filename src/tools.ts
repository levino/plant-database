import { JSDOM } from 'jsdom'
import * as R from 'ramda'
import { Response } from 'superagent'

export const htmlToDocument = (html: string): Document =>
  new JSDOM(html, { url: 'https://example.com' }).window.document

export const querySelectorAll: (
  selector: string
) => (document: Document) => Element[] = R.invoker(1, 'querySelectorAll')

type NodeParser = (
  res: Response,
  callback: (err: Error | null, body: unknown) => void
) => void

export const parser: NodeParser = (response, done) => {
  response.text = ''
  response.setEncoding('binary')
  response.on('data', function (chunk) {
    response.text += chunk
  })

  response.on('end', done)
}

export const getTextContent =
  (selector: string) =>
  (row: Document): string =>
    row.querySelector(selector)?.textContent?.trim() ?? ''
