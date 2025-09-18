# Select-User-bg-color

This project demonstrates a simple web page where a user can select a background color from a dropdown, and the selected color persists even after refreshing the page.

## Features

- **Background Color Selection:** Users can choose from a predefined list of colors to change the background of the `home.html` page.
- **Color Persistence:** The selected background color is saved using `localStorage` and is automatically applied when the page is reloaded.
- **User Welcome Message:** Displays a personalized welcome message to the user on the home page.

## Technologies Used

- HTML5
- CSS3 (with `style.css`)
- JavaScript (with `script.js`)
- Bootstrap 5.3.8 (for basic styling and components)
- Google Fonts (for various font styles)

## Project Structure

- `home.html`: The main home page where the color selection functionality is implemented.
- `index.html`: (Presumed to be a landing or initial page, not directly modified in this task)
- `login.html`: (Presumed to be a login page, not directly modified in this task)
- `script.js`: Contains the JavaScript logic for user login/registration (sessionStorage), background color change, and persistence (localStorage).
- `style.css`: Custom CSS for styling the pages.
- `assets/`: Directory containing images (`bg.jpg`, `bg1.jpg`).

## Setup and Usage

To run this project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/varunkrishnan1/User-Select-bg-color.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd User-Select-bg-color
   ```
3. **Open `home.html` in your web browser.**
   You can simply double-click the `home.html` file, or use a command like:
   ```bash
   open home.html
   ```

### How to use the color selection:

1. On the `home.html` page, you will see a dropdown menu labeled "Choose a Background color".
2. Select any color from the dropdown (e.g., Red, Blue, Green, Yellow, Black).
3. The background color of the page will immediately change to your selection.
4. Refresh the page. The background color will remain the one you selected, demonstrating persistence.

## Login Details (if applicable)

The `script.js` file contains logic for user registration and login using `sessionStorage`. If you are using `login.html` and `index.html`, you would typically:

1. Register a new user through `index.html` (if it's a registration page).
2. Log in through `login.html`.
3. Upon successful login, you would be redirected to `home.html`.

**Note:** The login details are stored in `sessionStorage`, meaning they will be cleared when the browser session ends (e.g., closing the browser tab/window). The background color preference is stored in `localStorage` and will persist across browser sessions.

## Contributing

Feel free to fork the repository, make improvements, and submit pull requests.
