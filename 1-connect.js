const es = require('elasticsearch');
const client = es.Client({ host: 'http://localhost:9200' });

client.ping()
  .then(res => console.log('connection success', res))
  .catch(err => console.error('wrong connection', err));
