import got from 'got'
import sanitize from 'lol-spells/sanitize'

import { SPELLS_URL } from 'lol-spells/constants'

export default function() {
  return got(SPELLS_URL).then((res) => {
    let spellsMap = JSON.parse(res.body).data
    let baton = { spellsMap }

    let spells = Object.keys(spellsMap)
    .map((id) => {
      spellsMap[id].id = id.toLowerCase()
      return spellsMap[id]
    })

    for (let spell of spells) {
      sanitize(spell, baton)
    }

    return spells
  })
}
