function MastodonIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M21.327 8.566c0-4.339-2.843-5.61-2.843-5.61-1.433-.658-3.894-.935-6.451-.956h-.063c-2.557.021-5.016.298-6.45.956 0 0-2.843 1.272-2.843 5.61 0 .993-.019 2.181.012 3.441.103 4.243.778 8.425 4.701 9.463 1.809.479 3.362.579 4.612.51 2.268-.126 3.541-.809 3.541-.809l-.075-1.646s-1.621.511-3.441.449c-1.804-.062-3.707-.194-3.999-2.409a4.523 4.523 0 0 1-.04-.621s1.77.433 4.014.536c1.372.063 2.658-.08 3.965-.236 2.506-.299 4.688-1.843 4.962-3.254.433-2.22.397-5.424.397-5.424Zm-3.748 5.58h-2.069V9.926c0-1.147-.482-1.729-1.447-1.729-1.066 0-1.6.691-1.6 2.056v2.299h-2.056v-2.3c0-1.364-.534-2.055-1.6-2.055-.964 0-1.447.582-1.447 1.729v4.219H5.292c0-4.64-.019-5.607.236-6.247.538-1.358 1.907-2.058 3.574-2.058 1.457 0 2.559.56 3.24 1.68l.698 1.17.699-1.17c.681-1.12 1.783-1.68 3.24-1.68 1.667 0 3.036.7 3.574 2.058.255.64.236 1.607.236 6.247h-.01Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

export function SocialFooter() {
  return (
    <footer className="flex items-center justify-center gap-6 pb-2 pt-6">
      <a
        href="https://mastodon.social/@coachfaris"
        target="_blank"
        rel="noopener noreferrer me"
        className="text-primary/70 transition-colors duration-200 hover:text-primary"
        aria-label="Follow on Mastodon"
      >
        <MastodonIcon className="h-5 w-5" />
      </a>
      <a
        href="https://linkedin.com/in/fsamawi"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary/70 transition-colors duration-200 hover:text-primary"
        aria-label="Connect on LinkedIn"
      >
        <LinkedInIcon className="h-5 w-5" />
      </a>
    </footer>
  );
}
