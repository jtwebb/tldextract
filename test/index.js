const tldExtract = require('../');
const assert = require('assert');

const test1 = tldExtract('foo.bar.co.uk');
assert.deepStrictEqual(test1, { subdomain: 'foo', domain: 'bar', tld: 'co.uk' });

const test2 = tldExtract('foo.bar.com');
assert.deepStrictEqual(test2, { subdomain: 'foo', domain: 'bar', tld: 'com' });

const test3 = tldExtract('a.b.c.d.foo.ye.ye');
assert.deepStrictEqual(test3, { subdomain: 'a.b.c.d', domain: 'foo', tld: 'ye.ye' });

const test4 = tldExtract('dali.portlligat.museum');
assert.deepStrictEqual(test4, { subdomain: '', domain: 'dali', tld: 'portlligat.museum' });

assert.throws(() => tldExtract('123456'), { name: 'Error', message: 'No domain/IP detected' });

console.log('Finished!');
