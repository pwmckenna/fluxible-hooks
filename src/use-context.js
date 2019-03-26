const React = require('react');
const FluxibleContext = require('fluxible-context');

module.exports = function() {
    return React.useContext(FluxibleContext);
};
