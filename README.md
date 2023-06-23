# Do Something!

![Logo](./src/assets/logo.png)

Do Something! is a purely frontend application that emulates backend functionality in many aspects. It was developed using React Vite, the latest version of the framework, along with Headless UI, Tailwind CSS, and form validations with Formik and Yup.

The application's environment and configuration are meticulously handled. Session storage is implemented by emulating token generation and encryption. The app follows a "clean" architecture design pattern.

## Features

- Account creation and authentication.
- Theme selector for personalization.
- Dynamic and composite filters.
- View, save, and modify the state of random tasks.

## Installation

Before running the project, make sure you have Node.js installed on your machine. Then follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/IlCabezon/do-something.git
   ```

2. Navigate to the project's directory:

   ```bash
   cd do-something
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

To start the application, use the following command:

```bash
npm run dev
```

This will launch the application and make it accessible in your web browser.

## Configuration

To configure the application, create a `.env` file in the project's root directory and add the following keys:

```dotenv
VITE_ENV
VITE_HASH_ROUNDS
VITE_TOKEN_ALG=HS256
VITE_PRIVATE_KEY
VITE_AUX_TOKEN
```

Make sure to provide appropriate values for each key.

## Contributing

Contributions are welcome! If you would like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or feedback, feel free to reach out:

Francisco Agustin Castro
dev.francisco.castro@gmail.com
