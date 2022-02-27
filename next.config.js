module.exports = {
  images: {
    domains: [
      "larbs.xyz",
      "auzziejay.com",
      "search.melonking.net",
      "landchad.net",
      "openbooks.neocities.org",
    ],
  },
  future: {
    webpack5: true, // by default, if you customize webpack config, they switch back to version 4.
    // Looks like backward compatibility approach.
  },
  webpack(config) {
    config.resolve.fallback = {
      // by next.js will be dropped. Doesn't make much sense, but how it is
      fs: false, // the solution
    };
    return config;
  },
};
