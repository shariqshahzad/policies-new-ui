import React from 'react';
import { ButtonGroup, Button, FilledBadge } from '@takamol/qiwa-design-system/components';
import { useWindowUtils } from '@takamol/qiwa-design-system/utils';

type ButtonData = {
  label: string;
  badgeVariant: string;
  badgeCount: number;
  buttonVariant: string;
};

type Props = {
  buttonsData: ButtonData[];
};

const FilterHeader = ({ buttonsData }: Props) => {
  const { isMobileWidth } = useWindowUtils();

  return !isMobileWidth ? (
    <>
      <ButtonGroup direction="row" size="small">
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
    ''
  );
};

export default FilterHeader;
