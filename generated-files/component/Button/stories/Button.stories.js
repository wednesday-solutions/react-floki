/**
 *
 * Stories for Button
 *
 * @see https://github.com/storybookjs/storybook
 *
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Button from '../index';

storiesOf('Button').add('simple', () => <Button id={text('id', 'Button')} />);
