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
