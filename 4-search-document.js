const es = require('elasticsearch');
const client = es.Client({ host: 'http://localhost:9200' });

client.search({
  index: 'student',
  type: '_doc',  
  body: {
    query: {
      match: { name: 'John' }
    }
  }
})
.then(res => console.log(JSON.stringify(res)))
.catch(err => console.error(err));