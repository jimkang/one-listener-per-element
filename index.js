function OneListenerPerElement() {
  var oldListeners = {};

  return {
    setListener
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
}

module.exports = OneListenerPerElement;
