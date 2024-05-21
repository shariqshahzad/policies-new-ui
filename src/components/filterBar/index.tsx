import React from 'react';
import { ButtonGroup, Button, FilledBadge } from '@takamol/qiwa-design-system/components';
import { useWindowUtils } from '@takamol/qiwa-design-system/utils';
import { TonalAndFilledBadgeVariant } from '@takamol/qiwa-design-system/components/Badge/types';
import { ButtonVariant } from '@takamol/qiwa-design-system/components/Button/types';

type ButtonData = {
  label: string;
  badgeVariant: TonalAndFilledBadgeVariant;
  badgeCount: number;
  buttonVariant: ButtonVariant;
};

type Props = {
  buttonsData: ButtonData[];
};

const FilterHeader = ({ buttonsData }: Props) => {
  const { isMobileWidth } = useWindowUtils();

  return !isMobileWidth ? (
    <>
      <ButtonGroup direction={['column', 'row']} size="small">
        {buttonsData.map((button, index) => (
          <Button
            key={index}
            badge={<FilledBadge variant={button.badgeVariant}>{button.badgeCount}</FilledBadge>}
            variant={button.buttonVariant}
          >
            {button.label}
          </Button>
        ))}
      </ButtonGroup>
    </>
  ) : (
    null
  );
};

export default FilterHeader;
