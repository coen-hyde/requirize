var expect = require('expect.js');
var requirize = require('../');

describe('Requirize', function() {
  it('should require a directory and construct hash', function() {
    var object = requirize(__dirname+'/fixtures');
    expect(object['file1']).to.equal('file1');
    expect(object['file.2']).to.equal('file2');
    expect(object['testCamelize']).to.equal('testCamelize');
    expect(object['index']).to.equal(undefined);
  });

  it('should require a directory and construct hash in classify mode', function() {
    var object = requirize(__dirname+'/fixtures', 'classify');
    expect(object['File1']).to.equal('file1');
    expect(object['File2']).to.equal('file2');
    expect(object['TestCamelize']).to.equal('testCamelize');
    expect(object['Index']).to.equal(undefined);
  });
})
