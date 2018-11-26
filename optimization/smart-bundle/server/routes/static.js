const path = require('path');
const express = require('express');
const { matchesUA } = require('browserslist-useragent');

const router = express.Router();

router.get('/*', (req, res) => {
  const userAgent = req.get('User-Agent');
  const resource = req.path === '/' ? '/index.html' : req.path;

  const isModernUser = matchesUA(userAgent, {
    env: 'modern',
    allowHigherVersions: true,
  });

  const asset = isModernUser 
    ? require.resolve(path.join('../../client/dist/modern', resource))
    : require.resolve(path.join('../../client/dist/legacy', resource))
  res.sendFile(asset);

  console.log(`served asset: ${asset}`);
});

module.exports = router;
