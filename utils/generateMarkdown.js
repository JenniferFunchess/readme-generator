// function to generate markdown for README
function generateMarkdown(data) {
  return `
# Project Title: ${data.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Project Description:
*${data.description}

## Installation:
* Link to live URL below.
  *${data.installation}

## Usage:
* Provided instructions and examples listed below.
  *${data.usage}

## Contributions:
*All contributors below.
  *${data.contributing}

## Tests Used:
* Provided tests used for your application below.
  *${data.tests}

## License:
* Chosen license below.
  *${data.license}


## Contact
[GitHub](http://github.com/${data.username})
${data.email}

`;
}

module.exports = generateMarkdown;
