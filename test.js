import ellipsis from './index';
import { equal, notEqual } from 'assert';

it('should fix single cases', ()=> {
  equal(ellipsis('foo...bar'), 'foo…bar');
});

it('should fix multiple cases', ()=> {
  equal(ellipsis('foo...bar...moo'), 'foo…bar…moo');
});

it('should not fix two periods', ()=> {
  equal(ellipsis('foo..bar'), 'foo..bar');
});

it('should not replace all the things', ()=> {
  notEqual(ellipsis('foo'), '…');
});
