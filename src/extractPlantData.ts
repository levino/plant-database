import * as R from 'ramda'
import { htmlToDocument, querySelectorAll, getTextContent } from './tools.js'

type Details = Record<string, Record<string, unknown>>

interface Names {
  name: string
  latin: string
}

export type PlantData = Names & Record<string, Record<string, unknown>>

const getQuickValue = getTextContent('.pbody-quickvalue')
const getQuickKey = getTextContent('.pbody-quickkey')

const getRows = (quickblock: Element) =>
  Array.from(quickblock.querySelectorAll('.pbody-quicktable tr'))

const getSectionData = R.pipe(
  getRows,
  R.map<Element, [string, Record<string, unknown>]>(
    R.applySpec([getQuickKey, getQuickValue])
  ),
  R.fromPairs
)

const getSectionTitle = getTextContent('.pbody-section-title')

const getQuickBlocks = querySelectorAll('#pbody-quickinfo .pbody-quickblock')

const getDetails: (element: Document) => Details = R.pipe(
  getQuickBlocks,
  R.map<Element, [string, Record<string, unknown>]>(
    R.applySpec([getSectionTitle, getSectionData])
  ),
  R.fromPairs
)

const getNames: (element: Document) => Names = R.applySpec({
  name: getTextContent('h1[itemprop="name"]'),
  latin: getTextContent('h2[itemprop="alternateName"]'),
})

const combine: (
  fns: [(element: Document) => Details, (element: Document) => Names]
) => (document: Document) => PlantData = R.partial(R.converge, [R.mergeLeft])

export const extractPlantData: (plantPage: string) => PlantData = R.pipe(
  htmlToDocument,
  combine([getDetails, getNames])
)
