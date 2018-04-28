const es = require('elasticsearch');
const client = es.Client({ host: 'http://localhost:9200' });

client.index({
  index: 'student',
  type: '_doc',
  id: 1,  
  body: {
    name: 'C. Ronaldo',
    age: 33,
    hobby: 'football'
  }
})
.catch(err => console.error(err));