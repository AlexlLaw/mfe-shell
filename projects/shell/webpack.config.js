// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const mf = require("@angular-architects/module-federation/webpack");
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  // eslint-disable-next-line no-undef
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

// eslint-disable-next-line no-undef
module.exports = {
  output: {
    uniqueName: "shell",
    publicPath: "http://localhost:4200/"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "shell",
      library: { type: "module" },
      remoteType: "var",
      remotes: {
        usuario: "http://localhost:4100/remoteEntry.js",
        auth: "http://localhost:4300/remoteEntry.js"
      },

        // For remotes (please adjust)
        // name: "usuario",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './projects/usuario/src/app/app.component.ts',
        // },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "mfe1": "http://localhost:3000/remoteEntry.js",

        // },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

          ...sharedMappings.getDescriptors()
        })
        
    }),
    sharedMappings.getPlugin()
  ],
};
