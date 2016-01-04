'use strict';
import {expect} from 'chai';
import assignWords from '../source/assign-words';

describe('Hello World', ()=>{
  it('Outputs hello world', ()=>{
    expect(assignWords('var i = "9"')).to.equal('\u001b[33mvar\u001b[39m\u001b[33m i \u001b[39m\u001b[33m=\u001b[39m\u001b[33m \u001b[39m\u001b[33m"\u001b[39m\u001b[33m9\u001b[39m\u001b[33m"\u001b[39m');
  });
});
