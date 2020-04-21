import * as Sentry from '@sentry/node'

export default (req, res) => {
  try {
    let obj = {};
    obj.doesNotExist();
    res.send('Success');
  } catch (error) {
    Sentry.captureException(error);
    res.status(500).send("Something broke");
  }
};