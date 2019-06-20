var OLPE = require('./index');

var firstButton = document.getElementById('first-button');
var secondButton = document.getElementById('second-button');
var messageField = document.getElementById('message');

var { setListener } = OLPE();

for (let i = 0; i < 10; ++i) {
  addListenersToButtons(i);
}

function addListenersToButtons(listenerNumber) {
  setListener({
    eventName: 'click',
    listener: firstButtonListener,
    element: firstButton
  });
  setListener({
    eventName: 'click',
    listener: secondButtonListener,
    element: secondButton
  });

  function firstButtonListener() {
    messageField.textContent =
      messageField.textContent +
      `listener ${listenerNumber} is responding to a click on the first button.\n`;
  }

  function secondButtonListener() {
    messageField.textContent =
      messageField.textContent +
      `listener ${listenerNumber} is responding to a click on the second button.\n`;
  }
}
