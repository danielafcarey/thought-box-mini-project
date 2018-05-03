import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import { ThoughtList } from './thoughtList.js';

describe('ThoughtList', () => {

  it('should match the snapshot with no thoughts', () => {
    const mockThoughts = [];
    const thoughtList = renderer.create(<ThoughtList thoughtList={ mockThoughts }/>);

    expect(thoughtList).toMatchSnapshot();
  });

  it('should match the snapshot with thoughts', () => {
    const mockThoughts = [{ id: 'thought0', title: 'title', body: 'body' }];
    const thoughtList = renderer.create(<ThoughtList thoughtList={ mockThoughts }/>);

    expect(thoughtList).toMatchSnapshot();
  });

});
