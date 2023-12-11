const inquirer = require('inquirer');
const colors = require('colors');
const CmdManager = require('../lib/CmdManager');
const { isRequired } = require('../utils/validation');

const cmd = {
  async set() {
    const cmdManager = new CmdManager();
    const input = await inquirer.prompt([
      {
        type: 'input',
        name: 'cmdName',
        message: 'Enter Command Name '.yellow,
        validate: isRequired
      },
      {
        type: 'input',
        name: 'cmdValue',
        message: 'Enter Command Value '.blue,
        validate: isRequired
      }
    ]);

    const key = cmdManager.setCmd(input.cmdName, input.cmdValue);

    if (key) {
      console.log('Command Saved!'.green);
    }
  },
  async get() {
    try {
    const cmdManager = new CmdManager();
    const input = await inquirer.prompt([
        {
        type: 'input',
        name: 'cmdName',
        message: 'Enter Command Name'.yellow,
        validate: isRequired
        }
    ]);
      const cmd = cmdManager.getCmd(input.cmdName);

      console.log('Command Value: ', cmd.blue);

      return cmd;
    } catch (err) {
      console.error(err.message.red);
    }
  },
  async remove() {
    try {
        const cmdManager = new CmdManager();
        const input = await inquirer.prompt([
            {
            type: 'input',
            name: 'cmdName',
            message: 'Enter Command Name'.yellow,
            validate: isRequired
            }
        ]);
        cmdManager.deleteCmd(input.cmdName);

        console.log('Command Removed'.blue);

        return;
    } catch (err) {
      console.error(err.message.red);
    }
  }
};

module.exports = cmd;