import { useEffect, useState } from 'react';
import useContext from './use-context';

export default (stores, getStateFromStores) => {
  const context = useContext();
  const [state, setState] = useState(getStateFromStores(context));
  const onChange = () => setState(getStateFromStores(context));

  useEffect(() => {
    stores.forEach((Store) => {
      context.getStore(Store).on('change', onChange);
    });
    return () => {
      stores.forEach((Store) => {
        context.getStore(Store).removeListener('change', onChange);
      });
    };
  }, stores);

  return state;
};
