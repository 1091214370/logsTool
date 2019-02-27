#!/usr/bin/env node
const program = require('commander');
const { logs, commit } = require('./src/git');

program
  .version('1.0.2',  '-v, --version')
  .option('-d, --days', '查看[days]天之内的提交记录')
  .option('-c, --commit', '填写git commit -m 的内容')
  .parse(process.argv);

// 打印git 提交日志
if (program.days) logs(process.argv[3]);

// git 便捷提交
if (program.commit) commit(process.argv[3])



