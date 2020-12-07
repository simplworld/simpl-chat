# simpl-chat

A small but flexible chat UI components for use with the [Simpl framework](https://simpl.world).

### Installation and setup

To use this library you will need to install it into your Simpl project's UI with:

```shell
$ npm install simpl-chat
```

**NOTE:** This may require a newer version of [simpl-react](https://github.com/simplworld/simpl-react) than
you are currently using.

### Screenshots / Examples

This library tries not to assume much about *how* you want your chat user interface to work or function and
aims to make it as easy as possible to include chat like functionality into Simpl Framework games.

For example, you may want a popup style chat like this which is the default:

![popup screenshot](https://github.com/simplworld/simpl-chat/blob/master/images/popup.png?raw=true)

Or you may want the UI provided by simpl-chat to expand to fill it's container like this:

![fullwidth screenshot](https://github.com/simplworld/simpl-chat/blob/master/images/fullwidth.png?raw=true)

This is enabled by passing the property `fixedPosition` to `<Widget />`.

### Start development server

Clone this repository, move into the repository and install the NPM dependencies:

```shell
$ npm install
```

And then start the local development server which includes livereload:

```shell
$ npm run start
```

You can then browse to `http://localhost:3000` and view the project.
