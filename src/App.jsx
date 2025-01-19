import { useEffect, useState } from 'react'
import "./assets/css/darkMode.css";

function App() {
  const [quizData, setQuizData] = useState(null); // tüm quiz sorularının tutulduğu state
  const [selectedCategory, setSelectedCategory] = useState(null); // seçilen kategorinin tutulduğu state
  const [isDarkMode, setIsDarkMode] = useState(false); // dark mode için olan state

  // soruları data.json dosyasından çekmek için
  useEffect(() => {
    async function getData() {
      const { quizzes } = await fetch("/data/data.json").then((x) => x.json());
      setQuizData(quizzes);
    }
    getData();
  }, []);

  // dark temayı localstorage'a kaydedebilmek için
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    } else {
      setIsDarkMode(false);
      document.body.classList.remove('dark-mode');
    }
  }, []);

  // eğer quizler yüklenmezse loading yazısnın çıkması için
  if (!quizData) {
    return <div className="loading">Loading...</div>;
  }

  // temanın çalışmasını sağlayan fonksiyon
  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      document.body.classList.toggle('dark-mode', newMode);
      return newMode;
    });
  };

  return (
    <>
      <div className="container">
        {!selectedCategory ? (
          <>
            <Header selectedCategory={selectedCategory}
              isDarkMode={isDarkMode}
              toggleTheme={toggleTheme} />
            <WelcomePage quizData={quizData} setSelectedCategory={setSelectedCategory} />
          </>
        ) :

          (<>
            <Header selectedCategory={selectedCategory}
              isDarkMode={isDarkMode}
              toggleTheme={toggleTheme} />
            <Questions quizData={quizData} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} /></>)}
      </div>
    </>
  )
}

function Header({ isDarkMode, selectedCategory, toggleTheme }) {
  return (
    <>
      <div className="header">
        {selectedCategory ?
          <div className="headerSubject">
            <img
              src={`/img/${selectedCategory.toLowerCase()}-icon.svg`}
              alt={`${selectedCategory} icon`}
            />
            {selectedCategory}</div> :
          <div className="headerSubject"></div>
        }
        <div className="themeOptions">
          <label className="lightDark">
            <span><img src={isDarkMode ? "img/dark-sun-icon.svg" : "img/sun-light-icon.svg"} alt="Light Mode Icon" /></span>
            <input onChange={toggleTheme} className="switch" type="checkbox" checked={isDarkMode} />
            <span><img src={isDarkMode ? "img/dark-moon-icon.svg" : "img/moon-night-icon.svg"} alt="Dark Mode Icon" /></span>
          </label>
        </div>
      </div>
    </>
  )
}

function WelcomePage({ quizData, setSelectedCategory }) {

  function handleCategory(category) {
    setSelectedCategory(category)
  }

  return (
    <div className="welcome-page">
      <div className="welcome-header">
        <div className="head-text">
          <h2>Welcome to the</h2>
          <h3>Frontend Quiz!</h3>
        </div>
        <p>Pick a subject to get started.</p>
      </div>
      <div className="welcome-quiz-btns">
        {quizData && quizData.map((x) => (
          <button onClick={() => handleCategory(x.title)} key={x.title}>
            <img src={x.icon} />
            <span>{x.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function Questions({ quizData, selectedCategory, setSelectedCategory }) {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // o anda hangi sorudaysak o sorunun indexi
  const [selectedChoice, setSelectedChoice] = useState(null); // seçilen şıkkı tıtan state
  const [isSubmitted, setIsSubmitted] = useState(false); // submit butonuna basılma durumunu tutan state
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0); // doğru cevapları tutan state
  const [showWarning, setShowWarning] = useState(false); // uyarı mesajının gösterilmesi için state

  // seçilen kategoriye ait soruları getiren değişken
  const selectedQuiz = quizData?.find(
    (quiz) => quiz.title === selectedCategory
  );

  // doğru cevabın tespiti
  const correctAnswer = selectedQuiz.questions[currentQuestionIndex].answer;

  // her bir şık için
  const selections = ["A", "B", "C", "D"];

  // yeni soruya geçişi sağlayan fonksiyon
  function handleNextQuestion() {
    if (currentQuestionIndex < selectedQuiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedChoice(null);
      setIsSubmitted(false);
    }
  }

  // butonların seçilebilmesini sağlayan fonksiyon
  const handleOptionClick = (option) => {
    if (!isSubmitted) {
      setSelectedChoice(option);
    }
  };

  // seçilen sorunun submit edilmesini sağlayan fonksiyon
  function handleSubmit() {
    if (!selectedChoice) { // eğer seçilen şık yoksa
      setShowWarning(true); // uyarı mesajını göster
    } else {
      if (selectedChoice === correctAnswer) {
        setCorrectAnswerCount((prev) => prev + 1)
      }
      setIsSubmitted(true); // submit olayını çalıştır
      setShowWarning(false); // uyarı mesajını gizle
    }
  }

  // progress bar hesaplaması
  const progressPercentage =
    ((currentQuestionIndex + 1) / selectedQuiz.questions.length) * 100;

  return (
    <>
      <div className="question-area">
        {isSubmitted && currentQuestionIndex === selectedQuiz.questions.length - 1 ?

          (<ResultPage
            correctAnswerCount={correctAnswerCount}
            selectedQuiz={selectedQuiz}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory} />) : (
            <>
              <div className="question-info">
                <span>Question {currentQuestionIndex + 1} of {selectedQuiz.questions.length}</span>
                <p>{selectedQuiz.questions[currentQuestionIndex].question}</p>
                <ProgressBar progressPercentage={progressPercentage} />
              </div>
              <div className="option-btns">
                {selectedQuiz.questions[currentQuestionIndex].options.map((x, i) => (
                  <button
                    onClick={() => handleOptionClick(x)}
                    key={i}
                    className={`optionBtn ${isSubmitted
                      ? (x === correctAnswer
                        ? (selectedChoice === correctAnswer
                          ? "correct selected"
                          : "correct")
                        : (x === selectedChoice
                          ? "wrong"
                          : "")
                      )
                      : (selectedChoice === x
                        ? "selected"
                        : "")
                      }`}
                  ><span className={`choiceBtn ${isSubmitted
                    ? (x === correctAnswer
                      ? (selectedChoice === correctAnswer
                        ? "correct selected"
                        : "correct")
                      : (x === selectedChoice
                        ? "wrong"
                        : "")
                    )
                    : (selectedChoice === x
                      ? "selected"
                      : "")
                    }`}>{selections[i]}</span>
                    <p>{x}</p>
                  </button>
                ))}
                <div className="submit-next-btns">
                  {isSubmitted ?
                    (<button onClick={handleNextQuestion}>Next Question</button>)
                    :
                    (<button onClick={handleSubmit}>Submit</button>)
                  }
                </div>
                {showWarning &&
                  <div className="warn-text">
                    <img src="img/false-icon.svg" alt="Warn Icon" />
                    <p>Please select an answer</p>
                  </div>
                }
              </div>
            </>
          )
        }
      </div>

    </>
  )
}

function ResultPage({ correctAnswerCount, selectedQuiz, selectedCategory, setSelectedCategory }) {

  // yeniden quizin başlaması için fonksiyon
  function handleRestart() {
    setSelectedCategory(null); // kategoriyi seçilmemiş hale getir
  }
  return (
    <>
      <div className="result-text">
        <h2>Quiz completed</h2>
        <h3>You scored...</h3>
      </div>
      <div className="result-info">
        <div className="score-content">
          <div className="scoreSubject">
            <img
              src={`/img/${selectedCategory.toLowerCase()}-icon.svg`}
              alt={`${selectedCategory} icon`}
            />
            {selectedCategory}</div>
          <p>{correctAnswerCount}</p>
          <span>out of {selectedQuiz.questions.length}</span>
        </div>
        <div className="playBtn">
          <button onClick={handleRestart}>Play Again</button>
        </div>
      </div>
    </>
  )
}

function ProgressBar({ progressPercentage }) {
  return (
    <div className="progressBarOuter">
      <div
        className="progressBarInner"
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
}

export default App;