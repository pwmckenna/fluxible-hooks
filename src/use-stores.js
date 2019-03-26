const React = require('react');
const useContext = require('./use-context');

module.exports = function useStores(stores, getStateFromStores) {
  const context = useContext();
  const s = React.useState(getStateFromStores(context));
  const state = s[0];
  const setState = s[1];
  function onChange() {
    setState(getStateFromStores(context));
  }
  function subscribe() {
    stores.forEach((Store) => {
      context.getStore(Store).on('change', onChange);
    });
  }
  function unsubscribe() {
    stores.forEach((Store) => {
      context.getStore(Store).removeListener('change', onChange);
    });
  }
  React.useEffect(() => {
    subscribe();
    return unsubscribe;
  });

  return state;
};
