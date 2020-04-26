export default ({
  Vue, // the version of Vue being used in the VuePress app
  // options, // the options for the root Vue instance
  // router // the router instance for the app
  // siteData // site metadata
}) => {
  // import styles
  require('./styles/index.scss');

  /* Excluding ion-icons from Vue template parser */
  Vue.config.ignoredElements = [/ion\-icon/];
}