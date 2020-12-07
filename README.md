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

There is also included an emoji browser for a better user experience:

![emoji browser screenshot](https://github.com/simplworld/simpl-chat/blob/master/images/emoji-browser.png?raw=true)

### Example Usage

Example usage assuming you are passing in a title and data in the expected format:

```jsx
import { Widget } from 'simpl-chat';

const ChatUI = (props) => {
    const {title, data} = props;

    return(
        <Widget
            title={title}
            data={data}
        />
    );
};
```

### Properties

- `title` Title to use in the `<Header />`
- `readOnly` default `false`, set this if you wish to only display the chat and not allow the user to submit new messages
- `handleSubmit` the function you with to have called when a user submits a message to send it to the Simpl modelservice or for other processing
- `data` the data in the expected format
- `fixedPosition` default `false`, used when you want simpl-chat to fill the container
- `className` class to pass to the outer div
- `headerClassName` class to pass only to the `<Header />` component
- `footerClassName` class to pass only to the `<Footer />` component

### Data format

In the `data` property we expect an Array or objects with certain properties.
You can however add ANY additional properties you like to customize the experience.

These object keys are required:
```
let data = [
    {
        id: 1,                      // some unique ID
        date: Date.now(),           // A Date object
        sender: 'Some User',        // A string to display for the sender, could be name, email, etc.
        message: 'Some message',    // Textual representation of the message
    }
];
```

Other keys which are optional:

- `avatarURL` URL to use as the sender's avatar for display purposes

Keep in mind you can add whatever you want to these message objects as long as
you write your own `<ListeItem />` component to take advantage of them.

### Components

- `<Widget />` the main easy to use example
- `<Header />` component to display the header
- `<Footer />` component to display the footer, message sending form, and emoji browser
- `<List />` component to handle the listing of messages
- `<ListItem />` component to handle displaying a single message
- `<Avatar />` component used to display the user's avatar or initials

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
