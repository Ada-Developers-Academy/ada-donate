# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

# helpers do
#   def some_helper
#     'Helping'
#   end
# end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

# configure :build do
#   activate :minify_css
#   activate :minify_javascript
# end

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
