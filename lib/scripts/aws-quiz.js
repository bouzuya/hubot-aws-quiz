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
    path = require('path');
    return res.sendfile(path.resolve(__dirname, '../../logos/', req.params.id));
  });
  robot.hear(/(.+)/i, function(res) {
    var name, quiz, timerId, _ref, _ref1;
    _ref1 = (_ref = q[res.envelope.user.id]) != null ? _ref : {}, quiz = _ref1.quiz, timerId = _ref1.timerId;
    if (!quiz) {
      return;
    }
    name = res.match[1];
    if (name == null) {
      return;
    }
    clearTimeout(timerId);
    if (quiz.name.match(new RegExp(name, 'i'))) {
      return res.send(BASE_URL + '/aws-quiz/' + quiz.id + '.svg\nO:' + quiz.name);
    } else {
      return res.send(BASE_URL + '/aws-quiz/' + quiz.id + '.svg\nX:' + quiz.name);
    }
  });
  return robot.respond(/aws-quiz$/i, function(res) {
    var quiz, timerId;
    quiz = res.random(QUIZ);
    timerId = setTimeout(function() {
      q[res.envelope.user.id] = null;
      return res.send(BASE_URL + '/aws-quiz/' + quiz.id + '.svg\nX:' + quiz.name);
    }, 30000);
    q[res.envelope.user.id] = {
      quiz: quiz,
      timerId: timerId
    };
    return res.send(BASE_URL + '/aws-quiz/' + quiz.id + '.svg');
  });
};
