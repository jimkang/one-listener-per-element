var OLPE = require('./index');

var firstButton = document.getElementById('first-button');
var messageField = document.getElementById('message');

var { setListener, on } = OLPE();

for (let i = 0; i < 10; ++i) {
  addListenersToButtons(i);
}

function addListenersToButtons(listenerNumber) {
  setListener({
    eventName: 'click',
    listener: firstButtonListener,
    element: firstButton
  });
  on('#second-button', 'click', secondButtonListener);

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
