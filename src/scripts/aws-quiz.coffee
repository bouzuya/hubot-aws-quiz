# Description
#   A Hubot script that DESCRIPTION
#
# Configuration:
#   None
#
# Commands:
#   hubot XXX [<args>] - DESCRIPTION
#
# Author:
#   bouzuya <m@bouzuya.net>
#
module.exports = (robot) ->
  path = require 'path'

  BASE_URL = process.env.HUBOT_AWS_QUIZ_BASE_URL
  QUIZ = [
    { id: 1,  name: 'EC2' }
    { id: 2,  name: 'S3' }
    { id: 3,  name: 'Storage Gateway' }
    { id: 4,  name: 'Glacier' }
    { id: 5,  name: 'CloudFront' }
    { id: 6,  name: 'RDS' }
    { id: 7,  name: 'DynamoDB' }
    { id: 8,  name: 'ElastiCache' }
    { id: 9,  name: 'RedShift' }
    { id: 10, name: 'VPC' }
    { id: 11, name: 'Direct Connect' }
    { id: 12, name: 'Route 53' }
    { id: 13, name: 'IAM' }
    { id: 14, name: 'CloudTrail' }
    { id: 15, name: 'CloudWatch' }
    { id: 16, name: 'Elastic Beanstalk' }
    { id: 17, name: 'OpsWorks' }
    { id: 18, name: 'CloudFormation' }
    { id: 19, name: 'EMR' }
    { id: 20, name: 'SQS' }
    { id: 21, name: 'SWF' }
    { id: 22, name: 'Elastic Transcoder' }
    { id: 23, name: 'SES' }
    { id: 24, name: 'CloudSearch' }
    { id: 25, name: 'SNS' }
    { id: 26, name: 'WorkSpaces' }
  ]

  q = {}

  robot.router.get '/aws-quiz/:id', (req, res) ->
    res.file req.params.id + '.svg'

  robot.respond /aws-quiz$/i, (res) ->
    quiz = res.random QUIZ
    q[res.envelope.user.id] = quiz
    setTimeout ->
      q[res.envelope.user.id] = null
      res.send BASE_URL + '/aws-quiz/' + quiz.id + '.svg\nX:' + quiz.name
    , 30000
    res.send BASE_URL + '/aws-quiz/' + quiz.id + '.svg'

  robot.respond /(.+)/, (res) ->
    quiz = q[res.envelope.user.id]
    return unless quiz
    name = res.match[1]
    if quiz.name.match(new RegExp(name, 'i'))
      res.send BASE_URL + '/aws-quiz/' + quiz.id + '.svg\nO:' + quiz.name
    else
      res.send BASE_URL + '/aws-quiz/' + quiz.id + '.svg\nX:' + quiz.name
