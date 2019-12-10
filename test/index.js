const expect = require('expect.js');
const requirize = require('../');

describe('Requirize', function() {
  it('should require a directory and construct hash', function() {
    let object = requirize(__dirname+'/fixtures');
    expect(object['file1']).to.equal('file1');
    expect(object['file.2']).to.equal('file2');
    expect(object['testCamelize']).to.equal('testCamelize');
    expect(object['index']).to.equal(undefined);
  });

  it('should require a nested dir', function() {
    let object = requirize(__dirname+'/fixtures');
    expect(object['dir']).to.eql({ file3: 'file3' });
  });

  it('should require a directory and construct hash in classify mode', function() {
    let object = requirize(__dirname+'/fixtures', 'classify');
    expect(object['File1']).to.equal('file1');
    expect(object['File2']).to.equal('file2');
    expect(object['TestCamelize']).to.equal('testCamelize');
    expect(object['Index']).to.equal(undefined);
  });
})
