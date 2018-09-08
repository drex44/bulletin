module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/about": { page: "/page", query: { id: "about" } },
      "/terms": { page: "/page", query: { id: "terms" } },
      "/privacy": { page: "/page", query: { id: "privacy" } }
    };
  }
};
