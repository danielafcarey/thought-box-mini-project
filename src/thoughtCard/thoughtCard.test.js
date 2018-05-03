import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { ThoughtCard } from './thoughtCard.js';

describe('ThoughtCard', () => {

  it('should match the snapshot', () => {
    const mockProps = { title: 'title', body: 'body' }
    const thoughtCard = renderer.create(
      <ThoughtCard title={ mockProps.title } 
                   body={ mockProps.body }
      />);

    expect(thoughtCard).toMatchSnapshot();
  });

});
