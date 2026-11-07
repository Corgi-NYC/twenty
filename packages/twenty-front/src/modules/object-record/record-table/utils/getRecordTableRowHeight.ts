import { getIsEmbedded } from '@/app/utils/getIsEmbedded';
import { RECORD_TABLE_ROW_HEIGHT } from '@/object-record/record-table/constants/RecordTableRowHeight';

// The remaining pixel belongs to the row border, giving embedded rows a 44px pitch.
export const getRecordTableRowHeight = () =>
  getIsEmbedded() ? 43 : RECORD_TABLE_ROW_HEIGHT;
