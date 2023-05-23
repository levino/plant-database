import request from 'superagent'
import { PlantData, extractPlantData } from './extractPlantData.js'
import * as R from 'ramda'
import { parser, htmlToDocument, querySelectorAll } from './tools.js'
import Bluebird from 'bluebird'

const agent = request.agent().parse(parser).buffer(true)

const getListOfAllPlants = (amount: number): Promise<string[]> =>
  agent
    .get(
      `https://www.baumschule-horstmann.de/shop/exec/search?mid=1&amount=${amount}&sid=0&st=6`
    )
    .then(R.prop('text'))
    .then(htmlToDocument)
    .then(querySelectorAll('#plist-table .plist-row .plist-2 a'))
    .then(R.map(R.prop('href') as (element: Element) => string))

const getPlantData = (url: string): Promise<PlantData> =>
  agent.get(url).then(R.prop('text')).then(extractPlantData)

export const getPlantsFromHorstmann = async (
  amount: number
): Promise<PlantData[]> =>
  getListOfAllPlants(amount).then((urls: string[]) =>
    Bluebird.map(urls, getPlantData)
  )
