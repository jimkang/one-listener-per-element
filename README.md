one-listener-per-element
==================

Single-purpose module for ensuring that DOM elements have only one event listener per element.

[Here's a demo.](https://jimkang.com/one-listener-per-element)

Why
---

The reason you'd want one event listener per element (per event) is to prevent the awkward scenario in which the user clicks on a thing and 20 functions respond, creating chaos.

There are a bunch of libraries and frameworks that help you avoid this. [d3-selection](http://github.com/d3/d3-selection) is my favorite of them, as it's focused and relatively lightweight. Still, I've come across multiple situations in which I don't need anything from it or any DOM abstraction *except* making sure there's only one click handler per element. It's easy to write a thing that does that; I just don't want to repeat that [bit of code](index.js).

Installation
------------

    npm install one-listener-per-element

Usage
-----

    var OLPE = require('one-listener-per-element');

    var { setListener, on } = OLPE();
    var el = document.getElementById('clickable-thing');
    setListener({ eventName: 'click', listener: onThingClick, element: el });

Or if you want to use a selector instead of a element, there's this shorthand method:

    on('#cool-button', 'click', onThingClick2);

License
-------

The MIT License (MIT)

Copyright (c) 2019 Jim Kang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
