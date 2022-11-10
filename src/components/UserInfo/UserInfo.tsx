import React from 'react';
import { useLoginUserContext } from '../../providers/LoginUserProvider';
import { toDisplayTime } from '../../util';
import { BasicFrame, Typography } from '../Elements';
import { VirtualList } from '../VirtualList';

import styles from './UserInfo.module.scss';

export const UserInfo: React.VFC = React.memo(() => {
  const { userInfo } = useLoginUserContext();

  if (!userInfo) {
    return null;
  }

  return (
    <BasicFrame>
      <div className="auth-box">
        <Typography>Player Info</Typography>
        {Object.keys(userInfo.stages).map((key) => {
          const stage = userInfo.stages[key];
          return (
            <>
              <div className={styles.TableLabel}>
                <div>{key}</div>
              </div>
              <div className={styles.TableHead}>
                <div>Time</div>
                <div>Date</div>
              </div>
              <VirtualList
                size={stage.length}
                renderItem={(index) => (
                  <div className={styles.TableRow}>
                    <div>{toDisplayTime(stage[index].time)}</div>
                    <div>{stage[index].date}</div>
                  </div>
                )}
              />
            </>
          );
        })}
      </div>
    </BasicFrame>
  );
});
