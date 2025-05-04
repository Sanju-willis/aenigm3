# Aenigm3 Labs Website

A modern, responsive website for a digital marketing agency built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- Modern, responsive design
- SEO optimized
- Analytics integration (Google Analytics, Facebook Pixel, Google Tag Manager)
- Email marketing integration (Mailchimp)
- Contact form with validation
- TypeScript for type safety
- Tailwind CSS for styling
- Next.js App Router for optimal performance

## Prerequisites

- Node.js 18.17 or later
- npm or yarn

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd aenigm3labs
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id

# Facebook Pixel
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=your_pixel_id

# Google Tag Manager
NEXT_PUBLIC_GTM_ID=your_gtm_id

# Mailchimp
MAILCHIMP_API_KEY=your_mailchimp_api_key
MAILCHIMP_LIST_ID=your_mailchimp_list_id
MAILCHIMP_SERVER_PREFIX=your_mailchimp_server_prefix
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/            # React components
│   ├── forms/            # Form components
│   └── layout/           # Layout components
├── lib/                  # Utility functions and configurations
└── types/                # TypeScript type definitions
```

## Deployment

The website can be deployed to any platform that supports Next.js applications, such as:

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [AWS Amplify](https://aws.amazon.com/amplify/)

For the best experience, we recommend deploying to Vercel, the platform created by the creators of Next.js.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 