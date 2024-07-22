import React from 'react';
import classNames from 'classnames/bind';
import styles from './ItemSetting.module.css';

const cx = classNames.bind(styles);

interface ItemSettingProps {
  props: string;
}

const ItemSetting: React.FC<ItemSettingProps> = ({ props }) => {
  return (
    <button className={cx('setting')}>
      <img className={cx('icon-setting')} src={props} alt="" />
    </button>
  );
};

export default ItemSetting;