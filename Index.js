const fs = require('fs');
const inquirer = require('inquirer');

const questions = ({ProjectName, UserStory, UserAcceptance, Description, InstalInstruction, Usage, License, Contributing, Test, QuestionName, QuestionEmail})=>
`
# ${ProjectName}

${UserStory}

${UserAcceptance}

## DESCRIPTION:

${Description}

## CONTENT:

* [DESCRIPTION](#description)
* [INSTALLATION](#installation)
* [USAGE](#usage)
* [LICENSE](#license)
* [CONTRIBUTING](#contributing)
* [TEST](#test)
* [QUESTIONS](#questions)

## INSTALLATION:

${InstalInstruction}

## USAGE:

${Usage}

## LICENSE:

${License}

## CONTRIBUTING:

### GitHub User ID - ${Contributing}

## TEST:

${Test}

## QUESTIONS:

### User ID - ${QuestionName}
### User Email - ${QuestionEmail}


`;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'ProjectName',
            message: 'Project Title?'
        },
        {
            type: 'input',
            name: 'UserStory',
            message: 'User Story?'
        },
        {
            type: 'input',
            name: 'UserAcceptance',
            message: 'User Acceptance?'
        },
        {
            type: 'input',
            name: 'Description',
            message: 'What is the purpose of this site?'
        },
        {
            type: 'input',
            name: 'InstalInstruction',
            message: 'What do I need to install to run the site?'
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'How does a user use the site?'
        },
        {
            type: 'checkbox',
            name: 'License',
            message: 'Any software licenses needed to run the site?',
            choices: ['ISC license', 'MIT License', 'N/A']
        },
        {
            type: 'input',
            name: 'Contributing',
            message: 'Who worked on this site, GitHub User ID?'
        },
        {
            type: 'input',
            name: 'Test',
            message: 'How do we check to make sure site is working right?'
        },
        {
            type: 'input',
            name: 'QuestionName',
            message: 'What is your Github user name?'
        },
        {
            type: 'input',
            name: 'QuestionEmail',
            message: 'What is your Email Address?'
        },
    ])
    .then((answers) => {
        const mdContent = questions(answers);
    
        fs.writeFile('README.md', mdContent, (err) =>
          err ? console.log(err) : console.log('Successfully created README.MD!')
        );
      });
