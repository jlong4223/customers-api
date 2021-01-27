// home welcome controller
exports.welcome = (req, res) => {
  res.json({
    message: "Welcome to the application",
    routes: "/customers",
    createdBy: "Jared Long",
  });
};
