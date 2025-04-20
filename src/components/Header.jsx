export default function Header({ theme, selectedCategory, handleChange }) {
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
            <span><img src={theme === "light" ? "img/sun-light-icon.svg" : "img/dark-sun-icon.svg"} alt="Light Mode Icon" /></span>
            <input onChange={handleChange} className="switch" type="checkbox" defaultChecked={theme === "dark-mode"} />
            <span><img src={theme === "light" ? "img/moon-night-icon.svg" : "img/dark-moon-icon.svg"} alt="Dark Mode Icon" /></span>
          </label>
        </div>
      </div>
    </>
  )
}