module.exports = function(plop) {
    /* welcome messag that will display in CLI */
    plop.setWelcomeMessage(
      'Welcome to plop! What type of file would you like to generate?'
    ),
      /* name and description of our template */
      plop.setGenerator('generate blog post ✏️', {
        description: 'Template for generating blog posts',
  
        prompts: [
            /* inquirer prompts */
            /* questions we want to ask in CLI and save questions for*/
            {
                type: 'input',
                name: 'module',
                message: 'Name of the module:',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Description of the module:',
            },
            {
                type: 'list',
                name: 'category',
                message: 'Category:',
                choices: ['Atoms', 'Widgets'],
                filter: function(val) {
                    return val.toLowerCase()
                }
            },
            {
                type: 'confirm',
                name: 'isInput',
                message: 'Do you want an input Element?'
            }
        ],
  
        actions: [
            /* what should be generated based off of the above prompts */
            {
                type: 'add',
                path: `src/{{category}}/{{dashCase module}}/main.config.js`,
                templateFile: 'scaffolding/templates/config.hbs',
            },
            {
                type: 'add',
                path: `src/{{category}}/{{dashCase module}}/main.style.js`,
                templateFile: 'scaffolding/templates/style.hbs',
            },
            {
                type: 'add',
                path: `src/{{category}}/{{dashCase module}}/main.template.js`,
                templateFile: 'scaffolding/templates/template.hbs',
            },
            {
                type: 'add',
                path: `src/{{category}}/{{dashCase module}}/main.js`,
                templateFile: 'scaffolding/templates/main.hbs',
            },
            {
                type: 'add',
                path: `src/{{category}}/{{dashCase module}}/main.stories.js`,
                templateFile: 'scaffolding/templates/stories.hbs',
            }
        ]
      })
  }