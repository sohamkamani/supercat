'use strict';

import {expect} from 'chai';
import scopesToColor from '../source/scopes-to-color';

describe('Scopes to color', function(){
  it('converts unknown scopes to white ANSI color', ()=>{
    expect(scopesToColor(['source'])).to.equal('white');
  });

  it('converts one scope to its ANSI color', ()=>{
    expect(scopesToColor(['function'])).to.equal('yellow');
  });

  it('if there are two scopes, the first one will persist', ()=>{
    expect(scopesToColor(['function', 'comment'])).to.equal('yellow');
  });
});
