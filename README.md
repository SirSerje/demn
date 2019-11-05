# Demnest

docker express mongo node nest

## How to start

 - ensure you have running Docker
 - `yarn dev` start NestJS locally (port 3000 by default)
 - `docker-compose up` to build and run images
 
### Inside container: 

- `3517` - frontend on ejs
- `28018` - mongo DB (can be accessible with robo3T or mongo-express)
- `8054` - mongo express (UI for mongo)

### Nest auth:

```
 # GET /profile
 curl http://localhost:3000/profile
 # result -> {"statusCode":401,"error":"Unauthorized"}

 # POST /auth/login
 curl -X POST http://localhost:3000/auth/login -d '{"username": "john", "password": "changeme"}' -H "Content-Type: application/json"
 # result -> {"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vybm... }

 # GET /profile using access_token returned from previous step as bearer code
 curl http://localhost:3000/profile -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vybm..."
 # result -> {"userId":1,"username":"john"}
```
