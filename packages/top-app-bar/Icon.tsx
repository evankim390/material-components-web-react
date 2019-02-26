// The MIT License
//
// Copyright (c) 2019 Google, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import * as React from 'react';
import * as classnames from 'classnames';
import {cssClasses} from './constants';


interface IconProps<T> extends React.HTMLProps<T> {
  actionItem?: boolean;
  className?: string;
  children: React.ReactElement<any>;
  navIcon?: boolean;
}


const Icon: <T extends {} = Element>(props: IconProps<T> ) =>
  React.ReactElement<HTMLElement> = ({
    /* eslint-disable react/prop-types */
    actionItem = false,
    navIcon = false,
    className,
    children,
    ...otherProps
    /* eslint-enable react/prop-types */
  }) =>
    React.cloneElement(children, {
      ...otherProps,
      className: classnames(className, children.props.className, {
        [cssClasses.ACTION_ITEM]: actionItem,
        [cssClasses.NAV_ICON]: navIcon,
      }),
    });

export default Icon;