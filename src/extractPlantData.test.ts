import { extractPlantData } from './extractPlantData.js'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

describe('extractPlantData', () => {
  it('should extract plant data from the html', async () => {
    const roseHtml = await fs.readFile(
      `${__dirname}/testData/Glanzblaettrige-Rose.html`,
      {
        encoding: 'utf8',
      }
    )
    expect(extractPlantData(roseHtml))
      .toHaveProperty(['Wuchs', 'Wuchsbreite'], '40 - 50 cm')
      .toHaveProperty(['name'], 'Glanzblättrige Rose')
      .toHaveProperty(['latin'], 'Rosa nitida')
  })
})
