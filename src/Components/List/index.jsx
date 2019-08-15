import React from 'react';
import PropTypes from 'prop-types';
import { useTransition, animated } from 'react-spring';

import ListItem from '../ListItem';

function List({ list }) {
  const transition = useTransition(list, items => items.id, {
    enter: item => [
      { opacity: 1, transform: 'translateY(0)' },
      { life: '100%' },
    ],
    leave: item => async (next, cancel) => {
      await next({ life: '0%' });
      await next({ opacity: 0, transform: 'translateY(100%)' });
    },
    from: { life: '0%', opacity: 0, transform: 'translateY(100px)' },
  });

  const items = transition.map(({ item, key, props }) => {
    return (
      <animated.div
        key={item.id}
        style={{
          ...props,
          padding: 0,
        }}
        className="w-full border-b-2 border-gray-light last-child:border-b-0 hover:bg-gray-light"
      >
        <ListItem item={item} />
      </animated.div>
    );
  });

  return (
    <ul className="flex flex-col items-start justify-center w-full md:w-4/5 lg:w-1/2">
      {items}
    </ul>
  );
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default List;
