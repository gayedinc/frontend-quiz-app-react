# 🧠 Frontend Quiz App – React

> A modern React-based quiz application that allows users to test their knowledge on frontend topics with category-based questions, instant feedback, and theme support.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5)

## 🔍 Project Overview

**Frontend Quiz App** is a web application that allows users to solve quizzes in various frontend categories like HTML, CSS, JavaScript, and Accessibility.  
After the initial version built with Vanilla JS, this React-based version offers a more modular, manageable, and user-friendly experience through its component-based architecture.

![image](https://github.com/user-attachments/assets/858825dc-7076-4467-94f6-dde0c6c1e55f)

## 🚀 Key Features

### 📂 Dynamic Question Categories
- On the welcome screen, users can select from category options such as **HTML**, **CSS**, **JavaScript**, and **Accessibility**.
- Each category loads questions from different JSON data files dynamically.

![image](https://github.com/user-attachments/assets/27469877-adec-4fa0-a210-be9b1dcba4f5)

### 🌗 Theme Toggle (Dark/Light)
- Users can switch between light and dark modes.
- The selected theme is stored in `localStorage` and remains persistent even after page reloads.

![image](https://github.com/user-attachments/assets/c081bed1-7bc0-490f-93bc-b84dc9121462)

### 📊 Instant Feedback, Animations & Result Screen
- The app instantly shows whether the selected answer is **correct or incorrect**.

![image](https://github.com/user-attachments/assets/f30c6e4a-59f1-460c-9d93-18dbb0482031)

- When the user selects the **wrong answer**, the choice visually shakes using a `shake` animation.  
- The **correct answer** is highlighted with a `pulse` animation (scaling up and down) for emphasis.
This enhances user interaction and visual clarity.

![image](https://github.com/user-attachments/assets/9747aa79-ece8-4059-bdbd-e37d565affb2)

- At the end of the quiz, the total number of correct answers is displayed with visual feedback.

- Additionally, when the result screen appears, a **celebration confetti animation** begins using the `react-confetti` library 🎉  
This confetti continues **until the user returns to the main screen**.

![image](https://github.com/user-attachments/assets/495d3f64-3a0f-4cf1-b395-c02980ec4c30)

### ⚛️ Component-Based Structure
- The app is fully built using **React components**.
- Categories, questions, choices, and the result screen are each handled in separate components.
- State management and event handling are implemented in a clean and effective way.

### 💾 Persistent Settings
- User preferences like selected theme are stored in `localStorage`.

### 📱 Responsive Design
- Works flawlessly across all devices: mobile, tablet, and desktop.
- Responsive layout ensures consistent user experience on every screen.

## 💡 UX Goals & Development Focus

- Delivering a **fast and fluid quiz experience**  
- Supporting **category-based question navigation**  
- Making **theme preferences persistent**  
- Providing **immediate visual feedback** for each answer  
- Offering a **celebratory result screen** with confetti animation  
- Keeping the codebase **clean, readable, and maintainable**

## 🛠️ Technologies Used

- React  
- JavaScript (ES6+)  
- CSS3  
- localStorage  
- react-confetti  
- CSS Animations (`shake`, `pulse`)  
- Responsive Design (Media Queries, Flexbox)

🟢 **Live Demo:**  
🔗 [https://frontend-quiz-app-react.vercel.app](https://frontend-quiz-app-react.vercel.app)

## 📂 Project Structure

```bash
📁 public  
📁 src  
 ┣ 📁 assets  
 ┃ ┗ 📁 css  
 ┃    ┣ 📄 darkMode.css         # Dark mode styles  
 ┃    ┣ 📄 main.css             # General styles  
 ┃    ┗ 📄 reset.css            # CSS reset rules  
 ┣ 📁 components                # All React components  
 ┃ ┣ 📄 Header.jsx             # Header and theme toggle component  
 ┃ ┣ 📄 Questions.jsx          # Question-answer flow and result screen  
 ┃ ┗ 📄 WelcomePage.jsx        # Category selection and welcome screen  
 ┣ 📄 App.jsx                  # Main application component  
 ┣ 📄 main.jsx                 # React DOM entry point  
┗ 📄 index.html                # Application HTML template  
