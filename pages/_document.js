import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="bg-white dark:bg-black text-black dark:text-gray-300 leading-normal antialiased transition duration-300 ease-in-out dark:transition dark:duration-300 dark:ease-in-out">
          <script dangerouslySetInnerHTML={{
            __html: `
(function() {
    // Change these if you use something different in your hook.
    var storageKey = 'darkMode';
    var classNameDark = 'dark-mode';
    var classNameLight = 'light-mode';
  
    function setClassOnDocumentBody(darkMode) {
      console.log(darkMode);
      globalThis.darkMode = darkMode;
      document.body.classList.add(darkMode ? classNameDark : classNameLight);
      document.body.classList.remove(darkMode ? classNameLight : classNameDark);
    }
    
    var preferDarkQuery = '(prefers-color-scheme: dark)';
    var mql = window.matchMedia(preferDarkQuery);
    var supportsColorSchemeQuery = mql.media === preferDarkQuery;
    var localStorageTheme = null;
    try {
      localStorageTheme = localStorage.getItem(storageKey);
    } catch (err) {}
    var localStorageExists = localStorageTheme !== null;
    if (localStorageExists) {
      localStorageTheme = JSON.parse(localStorageTheme);
    }
  
    // Determine the source of truth
    if (localStorageExists) {
      // source of truth from localStorage
      setClassOnDocumentBody(localStorageTheme);
      
    } else if (supportsColorSchemeQuery) {
      // source of truth from system
      setClassOnDocumentBody(mql.matches);
      localStorage.setItem(storageKey, mql.matches);
    } else {
      // source of truth from document.body
      var isDarkMode = document.body.classList.contains(classNameDark);
      localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
    }
  })();`}}></script>
          <Main />
          <NextScript />
          <script type="module" src="https://unpkg.com/ionicons@5.1.2/dist/ionicons/ionicons.esm.js"></script>
          <script noModule="" src="https://unpkg.com/ionicons@5.1.2/dist/ionicons/ionicons.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument