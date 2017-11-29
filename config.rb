activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

configure :development do
  activate :dotenv, env: '.env.development'
end

configure :production do
  activate :dotenv, env: '.env.production'
end

# Deployment to AWS S3
activate :s3_sync do |s3_sync|
  s3_sync.bucket = ENV['AWS_S3_BUCKET']
  s3_sync.region = ENV['AWS_S3_REGION']

  s3_sync.aws_access_key_id = ENV['AWS_ACCESS_KEY_ID']
  s3_sync.aws_secret_access_key = ENV['AWS_ACCESS_KEY_SECRET']
end
