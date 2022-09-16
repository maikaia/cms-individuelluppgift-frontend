# Frontend for headless wordpress

## Getting started locally

1. Clone this repository
2. Run `npm install` to install node modules
3. Create `.env.local` and pass in the api url for your wordpress instance, an example of the right format is provided in the file `.env.example`
4. Run `npm start`

## Live deploy

1. Log in to Vercel or create a account if you dont have a account
2. Connect your GitHub account to Vercel so you can access your GitHub repositories from Vercel
3. Click the `Add New` button and choose Project.
4. Import your project 
5. In the Configure Project section in the next screen, toggle the Environment Variables to open and create an environment variable by adding `REACT_APP_API_URL` in the NAME field and the url to your wordpress.com API
6. Click the Deploy button.
7. Your website should now be deployed online, showing the contents of your WordPress.com website.

## Contact
Administrator: Nils-Olov Olsson

Github: [Maikaia](https://github.com/Maikaia)
