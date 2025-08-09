# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![Interactive Card Form Screenshot](./screenshot.jpg)

### Links

- Solution URL: [GitHub Repository](https://github.com/jhenniifer/interactive-card)
- Live Site URL: [Live Demo](https://interactive-card-project.pipeops.net/)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS - For styling and responsive design
- Flexbox and CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library with hooks (useState, useEffect)
- [Vite](https://vitejs.dev/) - Build tool and development server
- Google Fonts - Space Grotesk typography

### What I learned

This project helped me strengthen my understanding of React state management and form validation. I learned how to implement real-time validation that provides immediate feedback to users:

```jsx
const handleInputChange = (e) => {
  const { id, value } = e.target;
  setFormData((prev) => ({ ...prev, [id]: value }));

  // Real-time validation for card number
  if (id === "cardNumber") {
    if (value && !/^[0-9\s]*$/.test(value)) {
      setErrors((prev) => ({
        ...prev,
        cardNumber: "Wrong format, numbers only",
      }));
    }
  }
};
```

I also improved my skills with responsive design using Tailwind CSS and dynamic background images:

```jsx
useEffect(() => {
  const handleSizeChange = () => {
    if (window.innerWidth >= 1024) {
      setBackground(bgDesktop);
    } else {
      setBackground(bgMobile);
    }
  };

  handleSizeChange();
  window.addEventListener("resize", handleSizeChange);
  return () => window.removeEventListener("resize", handleSizeChange);
}, []);
```

### Continued development

In future projects, I want to focus on:

- Advanced form validation patterns and accessibility
- More complex state management with useReducer or Context API
- Animation and micro-interactions to enhance user experience
- Testing strategies for React components

### Useful resources

- [React Hook Form Documentation](https://react-hook-form.com/) - Helped me understand form validation patterns
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Essential for responsive design and utility classes
- [MDN Web Docs - Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - Great resource for understanding form validation concepts

## Author

- GitHub - [@jhenniifer](https://github.com/jhenniifer)
- Frontend Mentor - [@jhenniifer](https://www.frontendmentor.io/profile/jhenniifer)
