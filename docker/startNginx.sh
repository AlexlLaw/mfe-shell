#!/bin/sh
echo "Running with env: $ENVNAME"
echo "Running with user:" $(id)
## Copia arquivo environment de acordo com a variavel informada na da devconsole
cp -fv /usr/share/nginx/html/mfe/shell/assets/config/environment.$ENVNAME.json /usr/share/nginx/html/mfe/shell/assets/config/environment.json
nginx -g 'daemon off;'
