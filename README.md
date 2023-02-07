# MotorQ-Event-Management-Portal

This Repository consists of two parts, an API/Backend, client/FrontEnd for a simple Event management system.

## Table of Contents

- [MotorQ-Event-Management-Portal](#motorq-event-management-portal)
  - [Table of Contents](#table-of-contents)
  - [Install and Use](#install-and-use)
  - [Folder structure](#folder-structure)
  - [Controllers](#controllers)
    - [Create a Controller](#create-a-controller)
  - [Models](#models)
  - [Configuration](#configuration)
  - [Note](#note)

## Install and Use

Start by cloning this repository

then use [npm](https://www.npmjs.com/) to

```sh
# Enter Backend Folder
$ cd api
# Install dependencies
$ npm i
# Copy environment file
$ cp .example.env .env
# Fill .env file as given in the further procedures
# ...
# start development with nodemon
$ npm start
# ...
# come back
$ cd ..
# Enter Frontend Folder
$ cd client
# Install dependencies
$ npm i
# start development with react
$ npm start
#
```

## Folder structure

- Schemas for Events and Users sre placed inside `/api/models` directory;
- Routes are given in the folder `/api/routes` directory;
- Controllers for the main API is placed inside `/api/controller` directory;

## Controllers

Controllers in this boilerplate have a naming convention: `Modelname.js` for simplicity.

### Create a Controller

Example Controller for all **CRUD** oparations:

```js
const Model = require("#models/Model");

model.exports = function ModelController() {
  const _create = (req, res) => {
    // body is part of a form-data
    const { value } = req.body;

    Model.create({
      key: value,
    })
      .then((model) => {
        if (!model) {
          return res.status(400).json({ msg: "Bad Request: Model not found" });
        }

        return res.status(200).json({ model });
      })
      .catch((err) => {
        // better save it to log file
        console.error(err);

        return res.status(500).json({ msg: "Internal server error" });
      });
  };

  const _getAll = (req, res) => {
    Model.findAll()
      .then((models) => {
        if (!models) {
          return res.status(400).json({ msg: "Bad Request: Models not found" });
        }

        return res.status(200).json({ models });
      })
      .catch((err) => {
        // better save it to log file
        console.error(err);

        return res.status(500).json({ msg: "Internal server error" });
      });
  };

  const _get = (req, res) => {
    // params is part of an url
    const { id } = req.params;

    Model.findOne({
      where: {
        id,
      },
    })
      .then((model) => {
        if (!model) {
          return res.status(400).json({ msg: "Bad Request: Model not found" });
        }

        return res.status(200).json({ model });
      })
      .catch((err) => {
        // better save it to log file
        console.error(err);

        return res.status(500).json({ msg: "Internal server error" });
      });
  };

  const _update = (req, res) => {
    // params is part of an url
    const { id } = req.params;

    // body is part of form-data
    const { value } = req.body;

    Model.findByPk(id)
      .then((model) => {
        if (!model) {
          return res.status(400).json({ msg: "Bad Request: Model not found" });
        }

        return model
          .update({
            key: value,
          })
          .then((updatedModel) => {
            return res.status(200).json({ updatedModel });
          });
      })
      .catch((err) => {
        // better save it to log file
        console.error(err);

        return res.status(500).json({ msg: "Internal server error" });
      });
  };

  const _destroy = (req, res) => {
    // params is part of an url
    const { id } = req.params;

    Model.findByPk(id)
      .then((model) => {
        if (!model) {
          return res.status(400).json({ msg: "Bad Request: Model not found" });
        }

        model
          .destroy()
          .then(() => {
            return res
              .status(200)
              .json({ msg: "Successfully destroyed model" });
          })
          .catch((err) => {
            // better save it to log file
            console.error(err);

            return res.status(500).json({ msg: "Internal server error" });
          });
      })
      .catch((err) => {
        // better save it to log file
        console.error(err);

        return res.status(500).json({ msg: "Internal server error" });
      });
  };

  // !IMPORTANT!
  // don't forget to return the functions:
  return {
    create: _create,
    getAll: _getAll,
    get: _get,
    update: _update,
    destroy: _destroy,
  };
};
```

## Models

Models in this boilerplate have a naming convention: `<modelname>Schema.js` and uses [Sequelize](http://docs.sequelizejs.com/) to define Models, if you want further information read the [Docs](http://docs.sequelizejs.com/).

## Configuration

Configure the keys with your credentials in `.env` file.

```
 MONGO =
JWT =
```

## Note

Please use two different browsers for admin and user, or even admin in incognito mode and user in normal mode is also preferred.
