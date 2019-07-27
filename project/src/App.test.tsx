import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Component from './App';

describe('App', () => {
  test('should match with snapshot', () => {
    // @ts-ignore
    const renderer = new ShallowRenderer();
    expect(
      renderer.render(
        <Component />
      )
    ).toMatchSnapshot();
    
  });
});
