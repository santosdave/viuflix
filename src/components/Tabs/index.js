import React, { useEffect, memo, useState } from 'react'
import clsx from "clsx";
import styles from "./styles.module.scss";
import Cast from '../Cast';
import Videos from '../Videos';
import Photos from '../Photos';
import Reviews from '../Reviews';

const title = ["Cast", "Videos", "Photos", "Reviews"];
function TabNavItem({ title, tab, tabName, setTabName }) {
  return (
    <button
      className={clsx(styles.tab, { [styles.active]: tabName === tab })}
      onClick={() => setTabName(tab)}
    >
      {title}
    </button>
  );
}

function TabContent({ tab, tabName, children }) {
  return tabName === tab ? <>{children}</> : null;
}

function Tabs({ id }) {
  const [tabName, setTabName] = useState('Cast')
  return (
    <>
      <div className={styles.tab_nav}>
        {title.map((item, i) => {
          return (
            <TabNavItem
              key={i}
              title={item}
              tab={item}
              tabName={tabName}
              setTabName={setTabName}
            />
          );
        })}
      </div>
      <div>
        <TabContent tab='Cast' tabName={tabName}>
          <Cast id={id} />
        </TabContent>
        <TabContent tab='Videos' tabName={tabName}>
          <Videos id={id} />
        </TabContent>
        <TabContent tab='Photos' tabName={tabName}>
          <Photos id={id} />
        </TabContent>
        <TabContent tab='Reviews' tabName={tabName}>
          <Reviews id={id} />
        </TabContent>
      </div>
    </>
  )
}

export default memo(Tabs)