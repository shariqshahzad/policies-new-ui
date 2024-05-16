import React from 'react';
import { ButtonGroup, Button, FilledBadge } from '@takamol/qiwa-design-system/components';

type ButtonData = {
  label: string;
  badgeVariant: string;
  badgeCount: number;
  buttonVariant: string;
};

type Props = {
  buttonsData: ButtonData[];
};

const FilterButtonComponent = ({ buttonsData }: Props) => {
  return (
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
  );
};

export default FilterButtonComponent;
