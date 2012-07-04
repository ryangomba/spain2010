require 'rack'
require 'rack/contrib/try_static'

use ::Rack::TryStatic, 
    :root => "html",    # where middleman files are generated
    :urls => %w[/],     # match all requests
    :try => [           # try these postfixes sequentially
        '.html',
        'Overview.html',
        '/Overview.html'
        ]

# 404
run lambda {[
    404,
    {'Content-Type' => 'text/plain'},
    [' File not found.']
    ]}
