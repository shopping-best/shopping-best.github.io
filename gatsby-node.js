const { readdirSync, readFileSync } = require('fs');
const { parse } = require('path');

exports.sourceNodes = ({ actions: { createNode }, createContentDigest }) => {
  const DIR = './content';

  files = readdirSync(DIR);

  files.forEach((file, index) => {
    // ignore files starting with a dot
    if (!/^\..*/.test(file)) {
      let data = JSON.parse(readFileSync(`${DIR}/${file}`));
      createNode({
        ...data,
        id: `post-${index}`,
        slug: parse(file).name,
        internal: {
          type: `post`,
          contentDigest: createContentDigest(data),
        },
      });
    }
  });
};
