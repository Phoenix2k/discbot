# # Discbot

> Discord bot based on [Discord.js](https://discord.js.org/) and [TypeScript](https://www.typescriptlang.org/).

[![Workflow status][workflow-status]][workflow-summary] ![Current version][current-version]

## Requirements

* [Discord account](https://discord.com/login)
* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/en/)
* [Node Version Manager](https://github.com/nvm-sh/nvm)

## Optional

* [Personal access token][personal-access-token] from GitHub for creating new releases

## Discord application

Start by creating a new [Discord application](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot):

1. [Sign-in to Discord](https://discord.com/login?redirect_to=%2Fdevelopers%2Fapplications)
2. [Create an application](https://discord.com/developers/applications)
3. Build a bot by going to `Bot > Add Bot`
4. Once the bot is built, click the `Copy` button to store the token in your clipboard
5. Start the installation process and paste the token in your terminal when asked

## Installation

Clone the repository and install dependencies:

```sh
$ git clone https://github.com/Phoenix2k/discbot.git
$ cd discbot
$ nvm use
$ npm install
```

This will ask you to give your bot a name of your choosing and to enter the token from your Discord app.

> If you need to replace these later, you can run `npm run generate:env` to regenerate the `.env` file.

## Development

Source files are located in the `src` folder.

Start a local development instance:

```sh
$ npm run dev
```

> This will start a local instance at [`http://localhost:3000`](http://localhost:3000). The server will restart automatically when you make changes to the source files and let you know of any errors while you develop.

Debugging mode:

```sh
$ npm run dev:debug
```

> This is similar to dev, but will emit more log messages to give you a better understanding of what's going on behind the scenes.

## Testing

### Lint files

Check for coding and styling errors:

```
$ npm run lint
```

### Unit tests

Tests are found in the `src` folder. Look for files ending with `.spec.ts`.

Run tests:

```
$ npm test
```

Should your tests fail, you can try clearing the cache with `npm run test:clear-cache` and running the tests again.

> This will also generate a coverage report, which you can browse by opening [`coverage/lcov-report/index.html`](./coverage/lcov-report/index.html) in your browser once it has been created.

## Production

Build for production:

```sh
$ npm run build
```

Start an instance:

```sh
$ npm start
```

## Release

Create a new release:

```sh
$ npm run release
```

> You will need a [personal access token][personal-access-token] from GitHub in order for the the script to be able to create a release on your behalf.

Follow the instructions and use common sense when choosing the version number.

## Links

* [Discord.js guide](https://discordjs.guide/)
* [How To Build a Discord Bot with Node.js](https://www.digitalocean.com/community/tutorials/how-to-build-a-discord-bot-with-node-js)

## License

[![MIT](https://img.shields.io/github/license/Phoenix2k/discbot)](LICENSE.md)

[current-version]: https://img.shields.io/badge/dynamic/json?color=informational&label=Version&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2FPhoenix2k%2Fdiscbot%2Fmain%2Fpackage.json
[personal-access-token]: https://github.com/settings/tokens/new?scopes=repo&description=discbot
[workflow-status]: https://github.com/Phoenix2k/discbot/actions/workflows/default.yml/badge.svg
[workflow-summary]: https://github.com/Phoenix2k/discbot/actions/workflows/default.yml
