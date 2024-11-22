# crawler-api

## Instructions to run the service locally
- install dependencies -> npm i
- install mongodb locally -> https://www.mongodb.com/docs/v4.4/tutorial/install-mongodb-on-os-x/
- run mongodb as service (MacOS)-> brew services start mongodb-community@4.4  OR  brew services start  mongodb/brew/mongodb-community@4.4
- start the api service -> npm run start
- .env file is attached. It has config details

## Endpoints
- Healthcheck
http://localhost:3001/api/v1/products/healthcheck

- Get all products
http://localhost:3001/api/v1/products/browse?sortMode=desc

query string sortMode can take value 'asc' for to get sorted list of products in ascending order, and value 'desc' for descending order.

- Get one product by id
http://localhost:3001/api/v1/products/:id
