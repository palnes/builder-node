# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "static/css"
sass_dir = "app/scss"
images_dir = "static/img"
http_images_path = http_path + "static/img"
enviroment = "production"
add_import_path "bower_components"
sprite_load_path = ["app/img/sprites"]

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style = :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass

# Generate cache busters using the MD5 digest of files rather than the default
# `mtime`.
asset_cache_buster do |_, file|
    Digest::MD5.hexdigest(File.read(file.path)).slice(0,5)
end