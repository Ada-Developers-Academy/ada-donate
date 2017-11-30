activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# Deployment to AWS S3
activate :s3_sync do |s3_sync|
  # This has to be set, even though we're overriding it in Rakefile
  s3_sync.bucket = '---not-a-real-bucket---'
  s3_sync.region = 'us-west-2'
end
