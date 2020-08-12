import React from 'react';
import { render } from '@testing-library/react';
import Input from '../components/UI/Input/Input';

describe('<input />', () => {

    it('Renders successfully without error', () => {
        const InputComponent = render(<Input />);
        expect(InputComponent.container).toBeTruthy();
      });

})