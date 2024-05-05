import { type SegmentVariant } from '@takamol/qiwa-design-system/utils';

import { type ApiTranslation } from 'src/app/exampleDashboard/models/ApiTranslation';

export type TodoMessagesVariants = SegmentVariant | 'danger';
export type TodoMessagesActions = 'renew' | 'noaction';

export interface TodoMessage {
  variant: 'danger' | 'info_business';
  buttonsVariant: TodoMessagesVariants;
  content: string;
  primaryAction: ApiTranslation;
  secondaryAction: ApiTranslation;
}
