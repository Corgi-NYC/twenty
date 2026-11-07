import { getRecordTableRowHeight } from '@/object-record/record-table/utils/getRecordTableRowHeight';

export const getRowIndexAtViewportMiddle = ({
  scrollTop,
  viewportHeight,
}: {
  scrollTop: number;
  viewportHeight: number;
}): number => {
  const rowHeight = getRecordTableRowHeight() + 1;

  return (
    Math.floor(scrollTop / rowHeight) +
    Math.floor(viewportHeight / rowHeight / 2)
  );
};
