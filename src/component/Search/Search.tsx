import React from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.css';

const cx = classNames.bind(styles);

const Search: React.FC = () => {
  return (
    <div className={cx('search')}>
      <div className={cx('inputt')}>
        <input
          type='text'
          className={cx('inputt-text')}
          placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
        />
      </div>
    </div>
  );
};

export default Search;