// classes are exported as array since the game typically stores class as integer
import archer from './classes/archer.js'
import mage from './classes/mage.js'
import monster from './classes/monster.js'
import npc from './classes/npc.js'
import shaman from './classes/shaman.js'
import warrior from './classes/warrior.js'
const classes = [
  warrior,
  mage,
  archer,
  shaman,
  npc,
  monster]

// Items
import amulet from './items/amulet.js'
import armlet from './items/armlet.js'
import armor from './items/armor.js'
import bag from './items/bag.js'
import book from './items/book.js'
import boot from './items/boot.js'
import bow from './items/bow.js'
import box from './items/box.js'
import charm from './items/charm.js'
import glove from './items/glove.js'
import hammer from './items/hammer.js'
import material from './items/material.js'
import misc from './items/misc.js'
import mount from './items/mount.js'
import orb from './items/orb.js'
import pet from './items/pet.js'
import quiver from './items/quiver.js'
import ring from './items/ring.js'
import rune from './items/rune.js'
import shield from './items/shield.js'
import staff from './items/staff.js'
import sword from './items/sword.js'
import totem from './items/totem.js'
const items = {
  amulet,
  armlet,
  bag,
  book,
  boot,
  bow,
  armor,
  glove,
  hammer,
  misc,
  orb,
  quiver,
  ring,
  rune,
  shield,
  staff,
  sword,
  mount,
  totem,
  box,
  charm,
  pet,
  material
}

// Factions
import bloodlust from './factions/bloodlust.js'
import vanguard from './factions/vanguard.js'
const factions = [
  vanguard,
  bloodlust,
  { name: {$$: 'Neutral'} }]

// Npcs
import blacksmith from './npcs/blacksmith.js'
import conjurer from './npcs/conjurer.js'
import merchant from './npcs/merchant.js'
import sage from './npcs/sage.js'
import stash from './npcs/stash.js'
import trader from './npcs/trader.js'
const npcs = {
  conjurer,
  trader,
  sage,
  merchant,
  stash,
  blacksmith
}

// User interface
import * as merchantui from './ui/merchant.js'
import * as stashui from './ui/stash.js'
import charmenu from './ui/charmenu.js'
import charpanel from './ui/charpanel.js'
import chat from './ui/chat.js'
import clan from './ui/clan.js'
import death from './ui/death.js'
import elixir from './ui/elixir.js'
import general from './ui/general.js'
import headers from './ui/headers.js'
import hiddenskills from './ui/hiddenskills.js'
import inventory from './ui/inventory.js'
import itemdescription from './ui/itemdescription.js'
import messages from './ui/messages.js'
import party from './ui/party.js'
import pvpmenu from './ui/pvpmenu.js'
import report from './ui/report.js'
import settings from './ui/settings.js'
import skilldescription from './ui/skilldescription.js'
import stats from './ui/stats.js'
import title from './ui/title.js'
import tutorial from './ui/tutorial.js'
import war from './ui/war.js'
const ui = {
  charmenu,
  charpanel,
  chat,
  clan,
  pvpmenu,
  inventory,
  merchant: merchantui.default,
  settings,
  party,
  stash   : stashui.default,
  stats,
  death,
  tutorial,
  title,
  messages,
  headers,
  hiddenskills,
  report,
  elixir,
  skilldescription,
  itemdescription,
  war,
  ...general }

export default {
  classes,
  items,
  factions,
  npcs,
  ui
}
