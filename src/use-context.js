const React = require('react');
const FluxibleContext = require('fluxible-context');

module.exports = function useContext() {
  return React.useContext(FluxibleContext);
};
