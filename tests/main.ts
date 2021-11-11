import { parseBumpversion, parsePackage, version } from '../src/main';

import { expect } from 'chai';
import path from 'path';

const fixtures = path.join(__dirname, 'fixtures');

const valid = path.join(fixtures, 'valid');
const invalid = path.join(fixtures, 'invalid');
const missing = path.join(fixtures, 'missing');

describe('parsePackage', () => {
  it('parses the version number from a package.json file.', () => {
    expect(parsePackage(valid)).to.equal('0.1.0');
  });
  it('returns null for an missing package.json file.', () => {
    expect(parsePackage('_')).to.equal(null);
  });
  it('returns null for an invalid package.json file.', () => {
    expect(parsePackage(invalid)).to.equal(null);
  });
  it('returns null for a package.json file without a version field.', () => {
    expect(parsePackage(missing)).to.equal(null);
  });
});

describe('parseBumpversion', () => {
  it('parses the version number from a .bumpversion.cfg file.', () => {
    expect(parseBumpversion(valid)).to.equal('0.2.0');
  });
  it('returns null for an missing .bumpversion.cfg file.', () => {
    expect(parseBumpversion('_')).to.equal(null);
  });
  it('returns null for an invalid .bumpversion.cfg file.', () => {
    expect(parseBumpversion(invalid)).to.equal(null);
  });
  it('returns null for a .bumpversion.cfg file without a version field.', () => {
    expect(parseBumpversion(missing)).to.equal(null);
  });
});

describe('version', () => {
  it('parses version numbers in priority order.', () => {
    expect(version(valid)).to.equal('0.2.0');
  });
  it('raises an exception if no version number can be found.', () => {
    expect(() => version('_')).to.throw(
      'Could not determine the version of the project at _'
    );
  });
});
