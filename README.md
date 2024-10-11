# 1byte-react-design

A React component library built with TypeScript, Antd, and Emotion. This library provides a set of reusable UI components that can be easily integrated into your React applications.

## Features

### React

A popular JavaScript library for building user interfaces. It allows developers to create reusable UI components and provides a declarative approach to rendering views.

### Antd

A UI design language and component library allowing developers to quickly create beautiful and functional user interfaces for web applications.

### TypeScript

A superset of JavaScript that adds optional static type checking and other features to the language. It helps catch errors earlier in the development process and improves code readability and maintainability.

### Emotion

A library designed for writing CSS styles with JavaScript. It provides powerful and flexible styling capabilities for your components.

## Installation

To install the library, you can use either npm or yarn:

```sh
npm install 1byte-react-design
```

or

```sh
yarn add 1byte-react-design
```

## Usage

To use the components from the library, you need to import them into your project. You can also configure the design tokens to customize the appearance of the components.

### Example

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { config, Button } from '1byte-react-design';
import { globalToken } from '@/assets/styles/customTheme';

const seedToken: Partial<AliasToken> = {
    borderRadius: 6,
    colorLink: generatedTheme.colorPrimary,

    colorPrimary: generatedTheme.colorPrimary,
    colorTextSecondary: generatedTheme.colorSecondary,
    colorTextTertiary: generatedTheme.colorTertiary,
    colorTextQuaternary: generatedTheme.colorQuaternary,

    fontFamily: "'Open Sans', sans-serif",
    fontSize: 14,
    controlHeight: 28,
};

const themeConfig: ThemeConfig = {
    token: seedToken,
};

const globalToken = theme.getDesignToken(themeConfig);

// Set the design token
config.designToken = globalToken;

const App = () => {
    return (
        <div>
            <ConfigProvider theme={customTheme}>
                <App1Byte>
                    <Button type="primary">Click Me</Button>
                </App1Byte>
            </ConfigProvider>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

### Note

If you do not provide a [`designToken`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkenneth_wise%2FWorkspace%2F1ByteSoftware%2FLibrary%2F1byte%3Areact-design%2Fsrc%2Findex.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A4%2C%22character%22%3A4%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkenneth_wise%2FWorkspace%2F1ByteSoftware%2FLibrary%2F1byte%3Areact-design%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A72%2C%22character%22%3A26%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkenneth_wise%2FWorkspace%2F1ByteSoftware%2FLibrary%2F1byte%3Areact-design%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A57%2C%22character%22%3A7%7D%7D%5D%2C%22cd97981e-fe0d-41e4-b8a7-f07d20b5fc41%22%5D 'Go to definition'), the library will use the default Antd tokens for the components.

## Getting Started

Before you start, make sure you have a fresh version of [Node.js](https://nodejs.org/en/) and Yarn installed. The current Long Term Support (LTS) release is an ideal starting point.

1. Fork this repository and clone your own fork to your computer:

    ```sh
    git clone https://github.com/1Byte-Software/1byte-react-design.git
    ```

2. From the project's root directory, install the required packages (dependencies):

    ```sh
    yarn install
    ```

3. To build/deploy the app, you can run:

    ```sh
    yarn build
    ```

    This will place all files needed for deployment for develop server into the [`/dist`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkenneth_wise%2FWorkspace%2F1ByteSoftware%2FLibrary%2F1byte%3Areact-design%2Fdist%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22cd97981e-fe0d-41e4-b8a7-f07d20b5fc41%22%5D '/Users/kenneth_wise/Workspace/1ByteSoftware/Library/1byte:react-design/dist') directory.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

We welcome contributions to improve this library. Please fork the repository and submit pull requests.

## Authors

-   [1byte dev](https://github.com/1Byte-Software/)

## Acknowledgments

-   [Ant Design](https://ant.design/)
-   [Emotion](https://emotion.sh/docs/introduction)
-   [TypeScript](https://www.typescriptlang.org/)

## About

This library is developed by 1Byte to unify the interface for the company, optimize component reuse, and ensure that our developers do not need to remember conventions. The library is based on the Atomic Design architecture.

```

```
