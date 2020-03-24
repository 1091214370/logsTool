#!/usr/bin/env node
const program = require('commander');
const { logs, commit } = require('./src/git');
const package = require('./package.json');

program
  .version(package.version,  '-v, --version')
  .option('-d, --days', '查看[days]天之内的提交记录')
  .option('-c, --commit', '填写git commit -m 的内容')
  .parse(process.argv);

  let message;
  if (process.argv.length > 4) {
    const messageArr = process.argv.slice(3);
    message = messageArr.join(' ');
  } else {
    message = process.argv[3];
  }
// 打印git 提交日志
if (program.days) logs(process.argv[3]);

// git 便捷提交
if (program.commit) commit(message)

