import { useEffect, useState } from 'react'
import Header from './components/Header';
import Questions from './components/Questions';
import WelcomePage from './components/WelcomePage';
import "./assets/css/darkMode.css";

function App() {
  const [quizData, setQuizData] = useState(null); // tüm quiz sorularının tutulduğu state
  const [selectedCategory, setSelectedCategory] = useState(null); // seçilen kategorinin tutulduğu state
  const [isLoading, setIsLoading] = useState(true); // loading durumu için olan state

  // soruları data.json dosyasından çekmek için
  useEffect(() => {
    async function getData() {
      const { quizzes } = await fetch("/data/data.json").then((x) => x.json());
      setQuizData(quizzes);
      setIsLoading(false);
    }
    getData();
  }, []);

  function getSystemThemePref() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark-mode' : 'light';
  }

  const [theme, setTheme] = useState(localStorage.theme || getSystemThemePref()); // dark mode için olan state

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  function handleChange(e) {
    const changedTheme = e.target.checked ? 'dark-mode' : 'light';
    setTheme(changedTheme);
    localStorage.theme = changedTheme;
  }

  return (
    <>
      {isLoading && <div className="loading">Loading...</div>}
      <div className="container">
        {!selectedCategory ? (
          <>
            <Header selectedCategory={selectedCategory}
              theme={theme}
              handleChange={handleChange} />
            <WelcomePage quizData={quizData} setSelectedCategory={setSelectedCategory} />
          </>
        ) :

          (<>
            <Header selectedCategory={selectedCategory}
              theme={theme}
              handleChange={handleChange} />
            <Questions quizData={quizData} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} /></>)}
      </div>
    </>
  )
}

export default App;