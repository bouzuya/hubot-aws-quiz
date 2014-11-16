# hubot-aws-quiz

A Hubot script that questions the AWS quiz.

## Installation

    $ npm install https://github.com/bouzuya/hubot-aws-quiz/archive/master.tar.gz

or

    $ npm install https://github.com/bouzuya/hubot-aws-quiz/archive/{VERSION}.tar.gz

## Example

    bouzuya> hubot aws-quiz
      hubot> http://localhost:8080/aws-quiz/1.svg
    bouzuya> SES
      hubot> http://localhost:8080/aws-quiz/1.svg
             X:EC2

## Configuration

See [`src/scripts/aws-quiz.coffee`](src/scripts/aws-quiz.coffee).

## Development

`npm run`

## License

### `logos/`

Licensed by Amazon.

### Others

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][mail]&gt; ([http://bouzuya.net][url])

## Badges

[![Build Status][travis-badge]][travis]
[![Dependencies status][david-dm-badge]][david-dm]
[![Coverage Status][coveralls-badge]][coveralls]

[travis]: https://travis-ci.org/bouzuya/hubot-aws-quiz
[travis-badge]: https://travis-ci.org/bouzuya/hubot-aws-quiz.svg?branch=master
[david-dm]: https://david-dm.org/bouzuya/hubot-aws-quiz
[david-dm-badge]: https://david-dm.org/bouzuya/hubot-aws-quiz.png
[coveralls]: https://coveralls.io/r/bouzuya/hubot-aws-quiz
[coveralls-badge]: https://img.shields.io/coveralls/bouzuya/hubot-aws-quiz.svg
[user]: https://github.com/bouzuya
[mail]: mailto:m@bouzuya.net
[url]: http://bouzuya.net
