// function to generate markdown for README


function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents

  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributors](#contributing)
  [Testing](#tests)
  [Questions](#email)

  ## Description
  ${data.description}

  ## Installation
  ${data.usage}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributors
  ${data.contributing}

  ## Testing
  ${data.tests}

  ## Questions
  
  For any questions, please get in touch by email: ${data.email}, or via Github
  ${data.github}
`;
}


module.exports = generateMarkdown;
