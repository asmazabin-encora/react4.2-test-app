import React from 'react';
import { render } from '@testing-library/react';
import Button from '../components/UI/Button/Button';

describe('<Button />', () => {

    it('Renders successfully without error', () => {
        const buttonComponent = render(<Button />);
        expect(buttonComponent.container).toBeTruthy();
    });

})