import { getPlantsFromHorstmann } from './getPlantsFromHorstmann.js'
import nock from 'nock'

const nockBack = nock.back
nockBack.fixtures = `__nockFixtures__`
describe('getPlantsFromHorstmann', () => {
  test('downloads the plants from Horstmann', async () => {
    const { nockDone } = await nockBack('getPlantsFromHorstmann.json')
    try {
      expect(await getPlantsFromHorstmann(10))
        .toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              name: 'Abendländischer Lebensbaum',
            }),
          ])
        )
        .toHaveLength(10)
    } finally {
      nockDone()
    }
  }, 30000)
})
