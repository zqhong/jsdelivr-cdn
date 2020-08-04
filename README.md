# jsdelivr-cdn

使用 Nginx 的 rewrite 功能，将静态文件请求重定向到 jsdelivr，达到加速或者减少服务器带宽资源的作用。

## Nginx 示例配置

```
server {
    listen 12345;
    server_name your.domain.com;
    root /usr/local/grafana/public;
    index index.html index.htm index.php;
    access_log off;
    autoindex   off;

    location /public {
        rewrite ^/(.*) https://cdn.jsdelivr.net/gh/zqhong/jsdelivr-cdn@7.0.6/$1 permanent;
    }

    location / {
        proxy_http_version 1.1;
        proxy_set_header Connection "keep-alive";
        proxy_pass http://grafana:3000;
    }
}
```


## jsdelivr 链接说明：

参考 [jsdelivr Features](https://www.jsdelivr.com/features)