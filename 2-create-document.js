const es = require('elasticsearch');
const client = es.Client({ host: 'http://localhost:9200' });

client.index({
  index: 'student',
  type: '_doc',
  body: {
    name: 'John Doe',
    age: 17,
    hobby: 'basketball'
  }
})
.catch(err => console.error(err));