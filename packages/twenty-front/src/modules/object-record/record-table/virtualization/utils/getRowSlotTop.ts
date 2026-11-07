import { getRecordTableRowHeight } from '@/object-record/record-table/utils/getRecordTableRowHeight';

export const getRowSlotTop = (rowIndex: number) =>
  (rowIndex + 1) * (getRecordTableRowHeight() + 1);
