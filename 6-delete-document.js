const es = require('elasticsearch');
const client = es.Client({ host: 'http://localhost:9200' });

client.delete({
  index: 'student',
  type: '_doc',
  id: '1'  
})
.then(res => console.log(JSON.stringify(res)))
.catch(err => console.error(err));