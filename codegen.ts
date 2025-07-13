import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://chibella-metreat-staging-635a46f4c95f.herokuapp.com/graphql",

  generates: {
    "src/interfaces/graphql/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "graphql",
      },
      hooks: {
        afterAllFileWrite: async (fileName) => {
          const fs = require("fs");
          const content = fs.readFileSync(fileName, "utf8");
          if (!content.includes("@ts-nocheck")) {
            fs.writeFileSync(fileName, `// @ts-nocheck\n${content}`);
          }
        },
      },
    },
  },
};

export default config;
