
# Personal Portfolio Website

This is a personal portfolio website for Sheriffapon, a full-stack developer. It's built with Next.js and features a modern, responsive design.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Connecting the Contact Form

The contact form is currently a simulation. To connect it to a real email service, you can use a serverless function (e.g., with Vercel or Netlify) or an email service provider like SendGrid or Nodemailer.

Here's an example of how you could modify the `pages/api/contact.js` file to send emails using Nodemailer:

```javascript
// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.example.com', // Your SMTP host
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Your email user
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    try {
      // Send mail with defined transport object
      let info = await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: 'your-email@example.com', // Your email address
        subject: 'New Contact Form Submission',
        text: message,
        html: `<b>${message}</b>`,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
```

Remember to install `nodemailer` (`npm install nodemailer`) and set up your environment variables (`EMAIL_USER`, `EMAIL_PASS`) in a `.env.local` file.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Deploying to Vercel or Netlify

1.  Push your code to a GitHub repository.
2.  Create a new project on Vercel or Netlify and connect it to your GitHub repository.
3.  Set up your environment variables (e.g., for your email service) in the project settings.
4.  Deploy!

## GitHub Token (Optional)

To avoid hitting the GitHub API rate limit for unauthenticated requests, you can create a personal access token and use it when fetching your repositories.

1.  Go to your [GitHub Developer settings](https://github.com/settings/tokens) and create a new personal access token with the `public_repo` scope.
2.  Store the token as an environment variable (e.g., `GITHUB_TOKEN`) in a `.env.local` file.
3.  Modify the `components/Projects.js` file to use the token:

```javascript
const response = await fetch('https://api.github.com/users/sheriffapon/repos?sort=stars&per_page=6', {
  headers: {
    Authorization: `token ${process.env.GITHUB_TOKEN}`,
  },
});
```
