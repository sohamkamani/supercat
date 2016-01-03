'use strict';
import {expect} from 'chai';
import assignWords from '../source/assign-words';

describe('Hello World', ()=>{
  it('Outputs hello world', ()=>{
    expect(assignWords('var i = "9"')).to.equal('Hello world!');
  });
});
