import * as React from 'react';
import { ChoiceList } from '@/index';

// CSF format story
export const horizontal = () => {
  return (
    <ChoiceList
      alignment="horizontal"
      choices={[
        { label: 'Male', name: 'gender', value: 'Male' },
        { label: 'Female', name: 'gender', value: 'Female' },
        { label: 'Other', name: 'gender', value: 'Other' },
      ]}
      title="Gender"
    />
  );
};

export default {
  title: 'Components/Radio/RadioGroup/Horizontal',
  component: ChoiceList,
  parameters: {
    docs: {
      docPage: {
        props: { exclude: ['key'] },
      },
    },
  },
};
