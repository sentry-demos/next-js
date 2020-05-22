import * as Sentry from '@sentry/node'

export default (req, res) => {
  res.status(500).json({
  });
  if (res.statusCode === 500) {
    Sentry.captureMessage(res.statusMessage, 'fatal')
  }
};