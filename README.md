# Simple Tailwind Template

A template app for tailwind based Figma plugins.

## Configuration
Some important configuration settings to be aware of which enable a tailwind html plugin to be compiled.

- `manifest.json`
    - output location needs to be set `dist/ui.html`
- `tailwind.config.js`
    - `content`: describes which files may contain tailwind classes
    - `plugins`: additional opt in tailwind styling like `@tailwindcss/forms`
- `postcss.config.js`
    - scaffold a `postcss` config file
- `webpack.config.js`
    - entry location needs to be set `ui: './src/ui.js'`
    - ui related module loaders need to be set
        - `html-loader` for `html` files
        - `ts-loader` for `.ts` files
        - `style-loader` to inline `css` into the DOM
        - `postcss-loader` to transform styles with JS plugins (required for tailwind)
    - inject bundled modules into an `html` file
        - `HtmlWebpackPlugin` to generate a shell html file with a script file injected into the body
        - `InlineChunkHtmlPlugin` inline the bundle output into the html script tag
- `tsconfig.json`
    - `lib` includes `DOM` types
    - `jsx` includes `react-jsx` types