const es = require('elasticsearch');
const client = es.Client({ host: 'http://localhost:9200' });

client.update({
  index: 'student',
  type: '_doc',
  id: '1',
  body: {
    doc: {
      hobby: 'swimming'
    }
  }
})
.then(res => console.log(JSON.stringify(res)))
.catch(err => console.error(err));