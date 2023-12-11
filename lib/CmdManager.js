const Configstore = require('configstore');
const pkg = require('../package.json');

class CmdManager {
  constructor() {
    this.conf = new Configstore(pkg.name);
  }

  setCmd(cmdName, cmdValue) {
    this.conf.set(cmdName, cmdValue);
    return cmdValue;
  }

  getCmd(cmdName) {
    const cmd = this.conf.get(cmdName);

    if (!cmd) {
      throw new Error(`No Command with name ${cmdName}`);
    }

    return cmd;
  }

  deleteCmd(cmdName) {
    const cmd = this.conf.get(cmdName);

    if (!cmd) {
      throw new Error(`No Command with name ${cmdName}`);
    }

    this.conf.delete(cmdName);

    return;
  }
}

module.exports = CmdManager;