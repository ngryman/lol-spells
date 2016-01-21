import values from 'object-values'

import { IMAGES_URL } from 'lol-spells/constants'

let Sanitizers = {
  id(spell) {
    spell.id = spell.id.replace('summoner', '')
  },

  icon(spell) {
    spell.icon = `${IMAGES_URL}/${spell.image.full}`
    delete spell.image
  },

  cooldown(spell) {
    spell.cooldown = spell.cooldown[0]
    delete spell.cooldownBurn
  },

  omit(spell) {
    delete spell.cost
    delete spell.costBurn
    delete spell.costType
    delete spell.effect
    delete spell.effectBurn
    delete spell.key
    delete spell.leveltip
    delete spell.maxrank
    delete spell.modes
    delete spell.range
    delete spell.rangeBurn
    delete spell.resource
    delete spell.vars
  }
}

export default function(spell, baton) {
  for (let sanitize of values(Sanitizers)) {
    sanitize(spell, baton)
  }
}
