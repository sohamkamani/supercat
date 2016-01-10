'use strict';
import {
  expect
}
from 'chai';
import getFileType from '../source/get-file-type';

describe('Get File type', function () {
  it('gets file type for json', () => {
    expect(getFileType('temp.json')).to.equal('js');
    expect(getFileType('temp.js')).to.equal('js');
  });

  it('gets file type for ruby', () => {
    expect(getFileType('temp.rb')).to.equal('ruby');
  });

  it('gets file type for python', () => {
    expect(getFileType('temp.py')).to.equal('python');
  });

  it('gets file type for markdown', () => {
    expect(getFileType('temp.md')).to.equal('gfm');
  });
});
