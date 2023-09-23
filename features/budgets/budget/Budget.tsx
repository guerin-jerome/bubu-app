import React from 'react';
import {TBudget} from '../../../types/TBudget';
import {Text} from 'react-native';

export const Budget = ({name, type, base, current}: TBudget) => {
  const formatType = () => {
    switch (type) {
      case 'saved':
        return 'EPARGNE';
      case 'variable':
        return 'VARIABLE';
      case 'fixed':
        return 'FIXE';
    }
  };

  return (
    <>
      <Text>{name}</Text>
      <Text>{formatType()}</Text>
      <Text>
        {current}€/{base}€
      </Text>
    </>
  );
};
