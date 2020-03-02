## Setup

1. Setup npm packages and docker-compose

```
make bootstrap
```
if you don't add docker group, you can add 'sudo' prefix `make bootstrap/make dev_up/make test_up`


## Run

1. Run

```
make dev_up
```

## Test
```
make test_up
```

## Swagger

Document: [http://localhost:3000/api](http://localhost:3000/api)

## Admin

Adminer: [http://localhost:9091](http://localhost:9091)

## Server IP:

`
http://139.162.18.20:3000
`
You can use postman to test. 

post    {
        "username":"Admin",
        "password":"123456"
        }
to `http://139.162.18.20:3000/api/auth/login`
to gen Token and then set Token into Postman to test another api.

server: use pm2 to start

## Front-end:
Because it does not work. So I didn't post it on github.

