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
* ${data.description}

## Installation:
* Link to live URL below.
<br />
  *${data.installation}

## Usage:
* Provided instructions and examples listed below.
<br />
  *${data.usage}

## Contributions:
*All contributors below.
<br />
  * ${data.contributing}

## Tests Used:
* Provided tests used for your application below.
<br />
  * ${data.tests}

## License:
* Chosen license below.
<br />
  * ${data.license}


## Contact :telephone_receiver:
*For any questions, please contact me with the information below:
<br />
 *Github: [GitHub](http://github.com/${data.username})
 <br />
 *Email: ${data.email}

`;
}

module.exports = generateMarkdown;
