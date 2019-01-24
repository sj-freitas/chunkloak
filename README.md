HEY

To test this, please build first
```npm run build```

Afterwards run the express-server
```npm run start```

You can change whether the route is blocked on the `server/route-blocker/routeBlocker` file. If the blocked option is on, the secret component won't be rendered nor fetched, preserving the secret.

`HELLO I AM NOT SUPPOSED TO SHOW UP -> ` this message should only be visible in the files if the blocked option is off.