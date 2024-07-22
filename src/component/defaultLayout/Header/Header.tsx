import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.css';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Search from '../../Search/Search';
import ItemSetting from '../../ItemSetting/ItemSetting';

import icon_topic from '../../../assets/icon/header/topic.png'
import icon_upgrade from '../../../assets/icon/header/upgrade.png'
import icon_upload from '../../../assets/icon/header/upload.png'
import icon_setting from '../../../assets/icon/header/setting.png'
import avatar from '../../../assets/img/avatarAn.jpg'



const cx = classNames.bind(styles);

const Header: React.FC = () => {
  return (
    <div className={cx('header')}>
      <Search />

      <div className={cx('menu-item')}>
        <Tippy delay={[0, 10]} content={'Chủ đề'} placement='bottom'>
          <div className={cx('btn-item')}>
            <ItemSetting props={icon_topic} />
          </div>
        </Tippy>
        <Tippy delay={[0, 10]} content={'Nâng cấp VIP'} placement='bottom'>
          <div className={cx('btn-item')}>
            <ItemSetting props={icon_upgrade} />
          </div>
        </Tippy>
        <Tippy delay={[0, 10]} content={'Tải lên'} placement='bottom'>
          <div className={cx('btn-item')}>
            <ItemSetting props={icon_upload} />
          </div>
        </Tippy>
        <Tippy delay={[0, 10]} content={'Cài đặt'} placement='bottom'>
          <div className={cx('btn-item')}>
            <ItemSetting props={icon_setting} />
          </div>
        </Tippy>
        <button className={cx('avarta')}>
            <img className={cx('img-avarta')} src={avatar} alt="avatar" ></img>
        </button>
      </div>
    </div>
  );
};

export default Header;