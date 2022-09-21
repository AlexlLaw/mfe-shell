FROM harbor.sicredi.net/hub-mirror/nginxinc/nginx-unprivileged:stable-alpine

## Alterar para super usuario para execucao dos comandos
USER root

## Remover arquivos e configuracoes default
RUN rm -rf /usr/share/nginx/html/* /etc/nginx/conf.d/* /etc/nginx/nginx.conf

## Copiar configuracao do nginx
COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf

## Copiar configuracao do site default
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf

## Copiar conteudo da aplicacao
COPY ./dist/ /usr/share/nginx/html

## Copiar arquivo de inicializacao do nginx
COPY ./docker/startNginx.sh /

## Remover environment usado no desenvolvimento
RUN rm -fv /usr/share/nginx/html/mfe/shell/assets/config/environment.json

RUN chown nginx. -R /var/cache/nginx/ /var/run /var/log/nginx /usr/share/nginx/html/

## Ajustar permissao de execucao dos arquivos
RUN chmod -R 755 /var/cache/nginx/ /var/run /var/log/nginx /usr/share/nginx/html/

## Forcar horario America/Sao_Paulo
ENV TZ=America/Sao_Paulo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

## Alterar para usuario sem privilegios
USER nginx

## Iniciar servico do Nginx
CMD ["sh","startNginx.sh"]
EXPOSE 8080
