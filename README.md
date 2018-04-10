# Ada Developers Academy donation website

## Developing
### Setup
* Fork and clone repo
* `bundle install`

### Local development
* `bundle exec middleman`

### Dev Deployment (AWS S3)
* Setup `.env.development` with all environment variables specified in `.env.example`.
* `bundle exec rake deploy:dev`

### Production Deployment (AWS S3)
* Setup `.env.production` with all environment variables specified in `.env.example`.
* `bundle exec rake deploy:prod`
