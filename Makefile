# Must have `sentry-cli` installed globally
# Following variable must be passed in
SENTRY_AUTH_TOKEN=

SENTRY_ORG=
SENTRY_PROJECT=
VERSION=`sentry-cli releases propose-version`

setup_release: create_release upload_sourcemaps

create_release:
	sentry-cli releases -o $(SENTRY_ORG) new -p $(SENTRY_PROJECT) $(VERSION)

associate_commits:
	sentry-cli releases -o $(SENTRY_ORG) -p $(SENTRY_PROJECT) set-commits --auto $(VERSION)

upload_sourcemaps:
	sentry-cli releases files $(VERSION) upload-sourcemaps .next --rewrite --url-prefix '~/_next'