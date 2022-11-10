import React from 'react';
import { useVirtual } from '@ishikawa-masashi/react-virtual';

import styles from './VirtualList.module.scss';

type Props = {
  size: number;
  renderItem: (index: number) => JSX.Element;
  index?: number;
};

export const VirtualList: React.VFC<Props> = (props) => {
  const { size, renderItem, index } = props;
  const parentRef = React.useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtual({
    size,
    parentRef,
    estimateSize: React.useCallback(() => 35, []),
    overscan: 5,
  });

  React.useEffect(() => {
    if (index) {
      rowVirtualizer.scrollToIndex(index, 'center');
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      ref={parentRef}
      className={styles.List}
      style={{
        height: `200px`,
        width: `400px`,
        overflow: 'auto',
      }}
    >
      <div
        style={{
          height: `${rowVirtualizer.totalSize}px`,
          width: '100%',
          position: 'relative',
        }}
      >
        {rowVirtualizer.virtualItems.map((virtualRow) => (
          <div
            key={virtualRow.index}
            className={
              virtualRow.index % 2 ? styles.ListItemOdd : styles.ListItemEven
            }
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${virtualRow.size}px`,
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            {renderItem(virtualRow.index)}
          </div>
        ))}
      </div>
    </div>
  );
};
