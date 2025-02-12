This is a base nodeJs project template,which anyone can use it and it has been prepared by keeping some of the most important code principles adn project management recommendations. Feel free to change anything.

`src` -> Inside the src folder all the actual source code regarding the project will reside,this will not include any kind of tests.
(You might want to make seperate tests folder)


Lets take a look inside the `src` folder

- `config` -> In this folder anything and everything regarding any configuration or setup of a library or module will be done.
For example : setting up `dotenv` so that we can use the environment variables anywhere in the cleaner fashion , this is done in the `server-config.js`.

- `routes` -> In this routes folder , we register a route and the corresponding middelware and controllers to it.

- `middelwares` -> They are just going to intercept the incoming requests where we can write our validators , authenticators etc.

- `controllers` -> They are kind of the last middelwares as post them you can call you bussiness layers to execute the bussiness logic. In controllers we just receive the incoming requests and data and then pass it to the bussiness layer and once business layer returns an output , we structure the API response in controllers and send the output.

- `repositories` -> In this folder it contains all the logic using which we can interact with the DB by writing queries, all the raw or ORM queries will go there.

- `services` -> It contains the business logic and interact with repos for data from DB's.

- `utils` -> It contains helper methods and error classes.

 
### Setup the project

 - Download this template into a text editor.
 - In the root directiory create a `.env`    file and add the following variables.

 ```
    PORT=<port number of your choice>

 ```

  ex:
  ```
      PORT=3000
  ```

  - Inside the `src/config` folder  create a file named as `config.json` and add this code:

  ```

  {
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
  
}
```

  - If you are setting up your dev env then write your username of your db and password of your db and in dilect mention whatever db you are using for ex: mysql,mariadb etc

  - If you are setting up test or prod env then adjust username and password accordingly.
