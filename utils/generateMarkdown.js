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
- [Contact](#contact)

## Project Description:
<br />
*${data.description}

## Installation:
<br />
* Link to live URL below.
  *${data.installation}

## Usage:
<br />
* Provided instructions and examples listed below.
  *${data.usage}

## Contributions:
<br />
*All contributors below.
  *${data.contributing}

## Tests Used:
<br />
* Provided tests used for your application below.
  *${data.tests}

## License:
<br />
* Chosen license below.
  *${data.license}


## Contact :telephone_receiver:
<br />
*For any questions, please contact me with the information below:
<br />
 *Github: [GitHub](http://github.com/${data.username})
 *Email: ${data.email}

`;
}

module.exports = generateMarkdown;
