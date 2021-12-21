const express = require('express');
const Layout = require('@podium/layout');
const layout = new Layout({
  name: 'myLayout',
  pathname: '/',
});
const podletA = layout.client.register({
  name: 'myPodletA',
  uri: 'http://localhost:3000/manifest.json',
});
const app = express();
app.use(layout.middleware());
app.get(layout.pathname(), async (req, res, next) => {
  const incoming = res.locals.podium;
  const [a] = await Promise.all([
    podletA.fetch(incoming),
  ]);
  res.podiumSend(`
        <section>${a.content}</section>
    `);
});
app.listen(7000);
console.log('listening on port 7000')
