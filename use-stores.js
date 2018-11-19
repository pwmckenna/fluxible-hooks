const React = require('react');
const FluxibleContext = require('fluxible-context');

module.exports = function useStores(stores, getStateFromStores) {
  const context = React.useContext(FluxibleContext);
  const [state, setState] = React.useState(getStateFromStores(context));
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
