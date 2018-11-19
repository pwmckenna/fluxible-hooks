# fluxible-hooks

```js
import { useStores } from 'fluxible-hooks';

const User = ({ userId }) => {
    const { firstName, lastName } = useStores([UserStore], context => {
        context.getStore(UserStore).getUser(userId)
    });

    return <p>{firstName} {lastName}</p>;
}

...

<User userId={15}/>
```