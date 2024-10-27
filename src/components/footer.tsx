import React from 'react'

  const Footer = () => {
    return (
    <footer className="bg-black py-6">
    <div className="container mx-auto text-center text-zinc-200">
      <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="#" className="text-zinc-200 hover:text-white">Privacy Policy</a>
        <a href="#" className="text-zinc-200 hover:text-white">Terms of Service</a>
        <a href="#" className="text-zinc-200 hover:text-white">Contact Us</a>
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-white">
          <TwitterIcon className="h-6 w-6" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-white">
          <LinkedInIcon className="h-6 w-6" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-white">
          <InstagramIcon className="h-6 w-6" />
        </a>
      </div>
    </div>
  </footer>
  )
}


function TwitterIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43 2a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.5 2.01-4.5 4.5 0 .35.04.7.11 1.03A12.94 12.94 0 0 1 1.64 1.15a4.48 4.48 0 0 0-.61 2.27c0 1.57.8 2.95 2.02 3.76A4.48 4.48 0 0 1 .96 6.6v.06c0 2.2 1.56 4.03 3.63 4.45a4.52 4.52 0 0 1-2.04.08 4.5 4.5 0 0 0 4.2 3.12A9.05 9.05 0 0 1 0 19.54a12.8 12.8 0 0 0 6.95 2.04c8.34 0 12.9-6.92 12.9-12.9 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 23 3z" />
      </svg>
    );
  }
  
  function LinkedInIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }
  
  function InstagramIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
      </svg>
    );
  }

export default Footer