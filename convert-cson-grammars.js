'use strict';
import fs from 'fs';
import CSON from 'cson';
const grammars = fs.readdirSync('./csonGrammars').map( gr => gr.split('.')[0]);

grammars.forEach(grammar => {
  const grCson = fs.readFileSync(`./csonGrammars/${grammar}.cson`, 'utf-8');
  const grJson = JSON.stringify(CSON.parse(grCson));
  fs.writeFileSync(`./grammars/${grammar}.json`, grJson);
});
