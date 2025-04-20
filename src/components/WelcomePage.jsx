export default function WelcomePage({ quizData, setSelectedCategory }) {

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