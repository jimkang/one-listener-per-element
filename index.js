function OneListenerPerElement() {
  var oldListeners = {};

  return {
    setListener,
    on
  };

  // Makes sure there is one listener per element-event combination.
  // Depends on elements with ids and listener functions with names.
  function setListener({ eventName, listener, element }) {
    const listenerKey = `${element.id}|${eventName}`;
    var oldListener = oldListeners[listenerKey];
    if (oldListener) {
      element.removeEventListener(eventName, oldListener);
    }
    element.addEventListener(eventName, listener);
    oldListeners[listenerKey] = listener;
  }

  // Shorthand for setListener
  function on(selector, eventName, listener) {
    setListener({ eventName, listener, element: document.querySelector(selector) });
  }
}

module.exports = OneListenerPerElement;
