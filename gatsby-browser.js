const React = require('react');
const { ThemeProvider } = require('@material-ui/styles');
const { createMuiTheme } = require('@material-ui/core/styles');

const theme = createMuiTheme();

exports.wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    {element}
  </ThemeProvider>
)
