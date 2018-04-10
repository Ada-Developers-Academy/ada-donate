require 'dotenv'

ENVS = {
  dev: :development,
  prod: :production
}

namespace :deploy do
  ENVS.each do |short, long|
    task long do
      puts "Deploying to #{long}"

      # Load the environment configs
      Dotenv.load('.env', ".env.#{long}")

      # Setup the S3 config
      s3_config = "\
        -k #{ENV['AWS_ACCESS_KEY_ID']} \
        -s #{ENV['AWS_ACCESS_KEY_SECRET']} \
        --bucket #{ENV['AWS_S3_BUCKET']} \
      "

      # Actually start the sync
      system("bundle exec middleman s3_sync -e #{long} -B #{s3_config}", [:out,:err] => :out)
    end

    task short => [long]
  end
end
