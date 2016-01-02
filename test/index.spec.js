'use strict';
import {expect} from 'chai';
import hello from '../source';

describe('Hello World', ()=>{
  it('Outputs hello world', ()=>{
    expect(hello('world')).to.equal('Hello world!');
  });
});
