import React from 'react';
import PropTypes from 'prop-types';

import Image from '../Image';

function ListItem({ item }) {
  const {
    volumeInfo: { authors, imageLinks, title },
  } = item;

  const authorsList = authors ? authors.join(' - ').toLowerCase() : 'N/A';

  return (
    <li className="flex w-full pl-6 pr-4 my-2 py-2 truncate items-center justify-between">
      <Image
        src={
          imageLinks
            ? imageLinks.smallThumbnail
            : 'http://67.199.59.186/old/schedule-boston2009/nophoto.png'
        }
        alt={title}
      />
      <div className="flex flex-col justify-center mx-4 h-full w-7/10 truncate">
        <div className="text font-medium text-gray-darker truncate">
          {title}
        </div>
        <div className="text-sm text-gray-dark capitalize truncate">
          {`by ${authorsList}`}
        </div>
      </div>
      <div className="h-full flex items-center max-w-1/10">
        <svg
          className="svg-icon text-gray-dark width-sm "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 28"
          fillOpacity="0.5"
        >
          <path d="M4.6 21l9.2-9-9.2-9.2L7.4 0l12 12-12 12-2.8-3z" />
        </svg>
      </div>
    </li>
  );
}

ListItem.propTypes = {
  item: PropTypes.shape({}).isRequired,
};

export default ListItem;
