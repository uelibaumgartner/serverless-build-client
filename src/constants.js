module.exports.packagers = {
  yarn: "yarn",
  npm: "npm",
  pnpm: "pnpm"
};

module.exports.defaults = {
  packager: "yarn",
  command: {
    yarn: "build",
    npm: "run build",
    pnpm: "run build"
  }
};
