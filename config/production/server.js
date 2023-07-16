modbrew uninstall postgresule.exports = ({ env }) => ({
  url: env("https://groove-guide.onrender.com/"),
  dirs: {
    public: "/data/public"
  },
});
