// function to generate markdown for README
function renderBadge(license) {
  if (license === "Apache License 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === "MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === "Boost Software License") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  } else if (license === "Eclipse Public License") {
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  } else if (license === "Creative Commons Zero 1.0") {
    return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
  }
    else if (license === "Other") {
      return "No License Selected"
    }
  
}

function generateMarkdown(data) {
  return `
  ${renderBadge(data.license)}
  # ${data.title}

  ## Table of Contents

  [Description](#description)\n
  [Installation](#installation)\n
  [Usage](#usage)\n
  [License](#license)\n
  [Contributors](#contributors)\n
  [Testing](#testing)\n
  [Questions](#questions)\n

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}  ${renderBadge(data.license)}

  ## Contributors
  ${data.contributing}

  ## Testing
  ${data.tests}

  ## Questions
  
  For any questions, please get in touch by email: ${data.email}, or via Github
  ${data.github}
`
}

module.exports = generateMarkdown
