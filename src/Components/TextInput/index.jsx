import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';

function TextInput({ type, value, onChange, onClear }) {
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    value.length > 0 ? setIsSearching(true) : setIsSearching(false);
  }, [value.length]);

  const config = {
    duration: 250,
  };

  const fade = useSpring({
    opacity: isSearching ? '1' : '0',
    config,
  });

  const iconOut = useSpring({
    opacity: !isSearching ? '1' : '0',
    config,
  });

  const iconIn = useSpring({
    transform: isSearching ? 'translateX(0)' : 'translateX(200%)',
    opacity: isSearching ? '1' : '0',
    right: isSearching ? '-5px' : '0',
    config,
  });

  const translateLabel = useSpring({
    transform: isSearching ? 'translateX(0)' : 'translateX(-100%)',
    config,
  });

  const translateInput = useSpring({
    marginLeft: isSearching ? 70 : 0,
    config,
  });

  const changeBackground = useSpring({
    backgroundColor: isSearching ? '#ffffffff' : '#f2f4f5',
    config,
  });

  return (
    <animated.label
      className="flex relative items-center w-full rounded p-2 overflow-hidden"
      style={changeBackground}
      htmlFor="book-search"
    >
      <animated.div
        className="text-gray-dark text-sm font-medium absolute"
        style={{
          width: 70,
          ...fade,
          ...translateLabel,
        }}
      >
        Searching:
      </animated.div>
      <animated.input
        id="book-search"
        className="input-text "
        type={type}
        placeholder="Search..."
        aria-label="book/author name"
        value={value}
        onChange={onChange}
        style={{
          width: !isSearching ? 'calc(70px + 100%)' : '100%',
          ...translateInput,
        }}
        autoFocus
      />
      <button
        type="button"
        className="relative w-5 h-5 focus:outline-none "
        onClick={onClear}
      >
        <animated.svg
          className="close-icon svg-icon absolute text-gray-dark"
          viewBox="0 0 28 28"
          fillOpacity="0.5"
          width="14"
          height="14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={iconIn}
        >
          <path d="M24 2.4L21.6 0 12 9.6 2.4 0 0 2.4 9.6 12 0 21.6 2.4 24l9.6-9.6 9.6 9.6 2.4-2.4-9.6-9.6L24 2.4z" />
        </animated.svg>
        <animated.svg
          className="search-icon svg-icon abslute text-gray-dark"
          viewBox="0 0 28 28"
          fillOpacity="0.5"
          fill="none"
          width="14"
          height="14"
          xmlns="http://www.w3.org/2000/svg"
          style={iconOut}
        >
          <path d="M17.143 15.086h-1.097l-.412-.412c1.372-1.508 2.195-3.565 2.195-5.76A8.897 8.897 0 0 0 8.914 0 8.897 8.897 0 0 0 0 8.914a8.897 8.897 0 0 0 8.914 8.915c2.195 0 4.252-.823 5.76-2.195l.412.412v1.097L21.943 24 24 21.943l-6.857-6.857zm-8.229 0a6.146 6.146 0 0 1-6.171-6.172 6.146 6.146 0 0 1 6.171-6.171 6.146 6.146 0 0 1 6.172 6.171 6.146 6.146 0 0 1-6.172 6.172z" />
        </animated.svg>
      </button>
    </animated.label>
  );
}

TextInput.propTypes = {
  type: PropTypes.string,
  onClear: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  type: 'text',
};

export default TextInput;
