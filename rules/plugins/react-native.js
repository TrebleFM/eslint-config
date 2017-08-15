// Rules from eslint-plugin-react-native
module.exports = {
    "plugins": ["react-native"],
    "rules": {
        // Detect StyleSheet rules which are not used in your React components
        "react-native/no-unused-styles": 2,
        // Enforce using platform specific filenames when necessary
        "react-native/split-platform-components": 2,
        // Detect JSX components with inline styles that contain literal values
        "react-native/no-inline-styles": 2,
        // Detect StyleSheet rules and inline styles containing color literals instead of variables
        "react-native/no-color-literals": 2
    }
};
