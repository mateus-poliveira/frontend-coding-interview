# Clever's Frontend Coding Interview

## Implementation Details
The project began with the initial setup of a Next.js application configured with Jest for testing. I proceeded to create the PhotoInfoGrid and PhotoList components and defined the Photo type to ensure proper type safety when handling API data. After setting up supporting files, I implemented the logic to load photos, established a context to manage photo state, and added the toggle functionality for liking photos. Finally, I built the login form and authentication flow, applied responsive styles to both the photo page and login page using Tailwind CSS, and configured the redirect to the photo list after sign-in.

## Tests
For this project, I implemented basic unit tests focused on individual components. The goal was to validate rendering logic and isolated behavior, ensuring that each component behaves correctly given different props and states. I used Jest and React Testing Library to write and run the tests.
No integration or end-to-end tests were included due to the scope and time constraints, but the project is structured in a way that makes it easy to extend the test coverage in the future.

## Next steps
If I had more time or were preparing this for production, the next steps would include implementing real authentication with JWT. I would also configure support for importing SVG files properly, which I chose to skip during the test to avoid spending time on custom Next.js and Jest setup. Test coverage could be expanded with integration tests and additional unit tests across hooks and contexts. Additionally, I’d improve the login form by adding proper input validation and error handling. Feature-wise, I’d add photo pagination or infinite scrolling, and persist the "liked" state for each photo—either using local storage or syncing with a backend.

## How to Log In
Authentication in this app is mocked for the purpose of the coding challenge.
To log in, simply enter the email `testing@testing`, no password is required. Upon submitting the form with this value, you'll be redirected to the photo gallery page.
 