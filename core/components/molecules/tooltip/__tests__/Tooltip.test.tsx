import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Tooltip, Button } from '@/index';
import { TooltipProps as Props } from '@/index.type';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const Position = ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'right'];
const StringValue = 'Sample string';

const mapper = {
  position: valueHelper(Position, { required: true, iterate: true }),
  tooltip: valueHelper(StringValue, { required: true }),
};

describe('Tooltip component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;
    const { children, ...rest } = attr;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Tooltip {...rest}>
          <Button>Button</Button>
        </Tooltip>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);

  it('should not render tooltip when showTooltip is false', () => {
    const { baseElement, getByRole, queryByText } = render(
      <Tooltip showTooltip={false} tooltip="A tooltip">
        <Button>Button</Button>
      </Tooltip>
    );
    const button = getByRole('button');
    fireEvent.mouseOver(button);
    const tooltipText = queryByText('A tooltip');
    expect(tooltipText).not.toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });
});
