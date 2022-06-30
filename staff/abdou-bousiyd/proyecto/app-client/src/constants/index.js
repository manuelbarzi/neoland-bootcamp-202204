export const EXTENSIONS = ["html", "css", "js"];

export const FILE_NAME = {
  html: "index",
  css: "styles",
  js: "main",
};

export const DEFAULT_VALUES = {
  html: `<main>
  <button id="button">Show my bootcamp</button>
  <a id="link" href="https://www.neoland.es/" target="_blank">Neoland</a>
</main>`,
  css: `
  *{
      padding: 0;
      margin: 0;
  }
  
  body {
    height: 100vh;
    padding: 0;
    margin: 0;
    background-color: whitesmoke;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  main {
    background-color: white;
    width: 400px;
    height: 200px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  a {
    display: none;
    font-size: 20px;
    text-decoration: none;
    color: blueviolet;
    font-weight: bold;
  }
  
  button {
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
  }`,
  js: `const button = document.getElementById('button');
  const neoland = document.getElementById('link');
  
  button.addEventListener('click', () => {
    neoland.style.display = 'block'
    button.style.display = 'none'
  });
  `,
};