<h2>A backend with a counter to a recognition and counting of people by their faces project</h2>

<h4>Resources used</h4>

- MongoDB
- Nest JS
- Jest

<h4>How To Run</h4>

Create a .env file in repository root.

```
PORT=3000
URL='your mongodb url here'
```


```npm i``` to install all depedencies
```npm run start:dev``` to run the project and that will be listening at `localhost:3000` port.

### MongoDB
[x] create connection with MongoDB

[x] create counter model

### Routes
[x] GET /counter/:id

[x] POST /counter:
```
{
  persons: 0
}
```
[x] PUT /counter/:id
