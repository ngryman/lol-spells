import fetch from './fetch'
import got from 'got'
import test from 'blue-tape'

const res = fetch()

test('Fetches spells list from League of Legends API', (t) => res.then((spells) => {
  t.assert(Array.isArray(spells), 'spells is an array')
}))

test('Adds "id"', (t) => res.then((spells) => {
  let spell = spells[0]
  t.assert(/[a-z ]/.test(spell.id), 'id property is a lower cased string')
}))

test('Transmutes "image" object into an valid URL', (t) => res
.then((spells) => {
  let spell = spells[0]
  t.assert(!spell.image, 'image property is gone')
  return spell
})
.then((spell) => got(spell.icon)))

test('Simplifies cooldowns', (t) => res.then((spells) => {
  let spell = spells[0]
  t.assert('number' === typeof spell.cooldown, 'colldown is a number')
  t.assert(!spell.cooldownBurn, 'cooldownBurn property is gone')
}))

test('Keeps a set of properties', (t) => res.then((spells) => {
  let spell = spells[0]
  t.assert(!spell.cost, 'cost property is gone')
  t.assert(!spell.costBurn, 'costBurn property is gone')
  t.assert(!spell.costType, 'costType property is gone')
  t.assert(!spell.effect, 'effect property is gone')
  t.assert(!spell.effectBurn, 'effectBurn property is gone')
  t.assert(!spell.key, 'key property is gone')
  t.assert(!spell.leveltip, 'leveltip property is gone')
  t.assert(!spell.maxrank, 'maxrank property is gone')
  t.assert(!spell.modes, 'modes property is gone')
  t.assert(!spell.range, 'range property is gone')
  t.assert(!spell.rangeBurn, 'rangeBurn property is gone')
  t.assert(!spell.resource, 'resource property is gone')
  t.assert(!spell.vars, 'vars property is gone')
}))
