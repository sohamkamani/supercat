'use strict';
import {expect} from 'chai';
import assignWords from '../source/assign-words';

describe('Assign words', ()=>{
  it('Outputs formatted string', ()=>{
    expect(assignWords('var i = "9"', 'js')).to.equal('\u001b[34mvar\u001b[39m\u001b[37m i \u001b[39m\u001b[36m=\u001b[39m\u001b[37m \u001b[39m\u001b[36m"\u001b[39m\u001b[32m9\u001b[39m\u001b[36m"\u001b[39m');
  });

  it('Outputs formatted string plus line numbers', ()=>{
    expect(assignWords('var i = "9"', 'js', {linenos : true})).to.equal('\u001b[47m\u001b[30m 1 \t\u001b[39m\u001b[49m\u001b[34mvar\u001b[39m\u001b[37m i \u001b[39m\u001b[36m=\u001b[39m\u001b[37m \u001b[39m\u001b[36m"\u001b[39m\u001b[32m9\u001b[39m\u001b[36m"\u001b[39m');
  });

  it('Outputs plain string', ()=>{
    expect(assignWords('var i = "9"')).to.equal('\u001b[37mvar i = "9"\u001b[39m\u001b[37m\n\u001b[39m');
  });
});
