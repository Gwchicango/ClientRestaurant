const path = require('path');

module.exports = {
  default: {
    paths: [path.join(__dirname, 'src/tests/CrudPlatos.feature')],
    require: [path.join(__dirname, 'src/tests/steps.jsx')],
    format: [
      'progress-bar',
      'html:test-results/cucumber-report.html',
      'json:test-results/cucumber-report.json'
    ]
  }
}
