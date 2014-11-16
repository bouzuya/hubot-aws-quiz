// Description
//   A Hubot script that DESCRIPTION
//
// Configuration:
//   None
//
// Commands:
//   hubot XXX [<args>] - DESCRIPTION
//
// Author:
//   bouzuya <m@bouzuya.net>
//
module.exports = function(robot) {
  var BASE_URL, QUIZ, path, q;
  path = require('path');
  BASE_URL = process.env.HUBOT_AWS_QUIZ_BASE_URL;
  QUIZ = [
    {
      id: 1,
      name: 'EC2'
    }, {
      id: 2,
      name: 'S3'
    }, {
      id: 3,
      name: 'Storage Gateway'
    }, {
      id: 4,
      name: 'Glacier'
    }, {
      id: 5,
      name: 'CloudFront'
    }, {
      id: 6,
      name: 'RDS'
    }, {
      id: 7,
      name: 'DynamoDB'
    }, {
      id: 8,
      name: 'ElastiCache'
    }, {
      id: 9,
      name: 'RedShift'
    }, {
      id: 10,
      name: 'VPC'
    }, {
      id: 11,
      name: 'Direct Connect'
    }, {
      id: 12,
      name: 'Route 53'
    }, {
      id: 13,
      name: 'IAM'
    }, {
      id: 14,
      name: 'CloudTrail'
    }, {
      id: 15,
      name: 'CloudWatch'
    }, {
      id: 16,
      name: 'Elastic Beanstalk'
    }, {
      id: 17,
      name: 'OpsWorks'
    }, {
      id: 18,
      name: 'CloudFormation'
    }, {
      id: 19,
      name: 'EMR'
    }, {
      id: 20,
      name: 'SQS'
    }, {
      id: 21,
      name: 'SWF'
    }, {
      id: 22,
      name: 'Elastic Transcoder'
    }, {
      id: 23,
      name: 'SES'
    }, {
      id: 24,
      name: 'CloudSearch'
    }, {
      id: 25,
      name: 'SNS'
    }, {
      id: 26,
      name: 'WorkSpaces'
    }
  ];
  q = {};
  robot.router.get('/aws-quiz/:id', function(req, res) {
    return res.file(req.params.id + '.svg');
  });
  robot.respond(/aws-quiz$/i, function(res) {
    var quiz;
    quiz = res.random(QUIZ);
    q[res.envelope.user.id] = quiz;
    setTimeout(function() {
      q[res.envelope.user.id] = null;
      return res.send(BASE_URL + '/aws-quiz/' + quiz.id + '.svg\nX:' + quiz.name);
    }, 30000);
    return res.send(BASE_URL + '/aws-quiz/' + quiz.id + '.svg');
  });
  return robot.respond(/(.+)/, function(res) {
    var name, quiz;
    quiz = q[res.envelope.user.id];
    if (!quiz) {
      return;
    }
    name = res.match[1];
    if (quiz.name.match(new RegExp(name, 'i'))) {
      return res.send(BASE_URL + '/aws-quiz/' + quiz.id + '.svg\nO:' + quiz.name);
    } else {
      return res.send(BASE_URL + '/aws-quiz/' + quiz.id + '.svg\nX:' + quiz.name);
    }
  });
};