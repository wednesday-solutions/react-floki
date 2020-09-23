<img align="left" src="https://github.com/wednesday-solutions/react-floki/blob/master/react_floki_github.svg" width="480" height="520" />

<div>
  <a href="https://www.wednesday.is?utm_source=gthb&utm_medium=repo&utm_campaign=serverless" align="left" style="margin-left: 0;">
    <img src="https://uploads-ssl.webflow.com/5ee36ce1473112550f1e1739/5f5879492fafecdb3e5b0e75_wednesday_logo.svg">
  </a>
  <p>
    <h1 align="left">React Floki
    </h1>
  </p>

  <p>
A CLI tool that works with the react template and allows you to scaffold tests, containers, components and stitches them all together preventing wastage of time in setup and boilerplate code.
  </p>

  ___


  <p>
    <h4>
      Expert teams of digital product strategists, developers, and designers.
    </h4>
  </p>

  <div>
    <a href="https://www.wednesday.is/contact-us?utm_source=gthb&utm_medium=repo&utm_campaign=serverless" target="_blank">
      <img src="https://uploads-ssl.webflow.com/5ee36ce1473112550f1e1739/5f6ae88b9005f9ed382fb2a5_button_get_in_touch.svg" width="121" height="34">
    </a>
    <a href="https://github.com/wednesday-solutions/" target="_blank">
      <img src="https://uploads-ssl.webflow.com/5ee36ce1473112550f1e1739/5f6ae88bb1958c3253756c39_button_follow_on_github.svg" width="168" height="34">
    </a>
  </div>

  ___

  <span>We’re always looking for people who value their work, so come and join us. <a href="https://www.wednesday.is/hiring">We are hiring!</a></span>
</div>

## Installation

### Globally install react-generate

`npm install -g react-floki`

**OR**

`yarn global add react-floki`

## Examples of generated files

- [Container](generated-files/container)
- [Component](generated-files/component)
- [Loadable](generated-files/loadable)
- [InjectSaga utils](generated-files/inject-saga)
- [Test-util](generated-files/test-util)

## Generating containers with tests and stories

![](screenshots/gcon.png)

## Generate components with tests and stories

![](screenshots/gcom.png)

## Documentation

### Help

To get a list of commands and usage hints use

```
react-generate --help
```

### Creating a new React Application

```
react-generate init movie-rating
```

### Generating tests for all existing components and containers

**Creating a test for a container or component:** `react-generate gt`

**Creating a test for an existing component:** `react-generate gtcom`

**Creating a test for an existing container:** `react-generate gtcon`

### Forcefully generating tests for all existing components and containers

**Forcefully creating a test for a container or component:** `react-generate gtf`

**Forcefully creating a test for an existing component:** `react-generate gtcomf`

**Forcefully creating a test for an existing container:** `react-generate gtconf`

### Generating components and containers

**Creating a container or component:** `react-generate g`

**Creating a component:** `react-generate gcom`

**Creating a container:** `react-generate gcon`

### Forcefully generating components and containers

**Forcefully creating a container or component:** `react-generate gf`

**Forcefully creating a component:** `react-generate gcomf`

**Forcefully creating a container:** `react-generate gconf`

### Generating tests for all existing components and containers

**Generate test for all components in directory:** `react-generate --all component <path-to-components>`

**Generate test for all containers in directory:** `react-generate --all containers <path-to-containers>`

### Generating a testUtils file with some utility functions for tests

**Generate a test util file:** `react-generate gtutil`

### Generating a utility for a loadable file using React 16 lazy and Suspense

**Generating a utility for a loadable file :** `react-generate gloadable`

# Advanced

## Example Usages

**Creating a test by specifying type, path and name:** `react-generate gt component src/app Button`

**Creating a test for an existing component by specifying path and name:** `react-generate gtcom src/app Button`

**Creating a test for an existing container by specifying path and name:** `react-generate gtcon src/app HomePage`

**Creating a component/container by specifying type, path and name:** `react-generate g component src/app Button`

**Creating a component by specifying path and name:** `react-generate gcom src/app Button`

**Creating a container by specifying path and name:** `react-generate gcon src/app HomePage`

**Generate test for all components in directory:** `react-generate --all component src/app/components`

**Generate test for all containers in directory:** `react-generate --all container src/app/containers`

# Projects using it

- [React Template](https://github.com/wednesday-solutions/react-template)
