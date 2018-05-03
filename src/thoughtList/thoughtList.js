import React from 'react';
import { ThoughtCard } from '../thoughtCard/thoughtCard.js';

export const ThoughtList = ({ thoughtList }) => {
  const thoughts = thoughtList.map((thought, index) => {
    return <ThoughtCard key={ `thought${index}` }
                    title={ thought.title }
                    body={ thought.body }
           />
  })

  return (
    <div className='thought-list'>
      { thoughts }
    </div>
  );
}
