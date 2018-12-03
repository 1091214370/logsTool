#!/usr/bin/env node
const color = require('colors');
const { exec } = require('child_process');
// const moment = require('moment');
var argv = require('yargs')
  .option('C', {
    alias : 'cmt',
    demand: false,
    default: 'tom',
    describe: 'git [add -> commit -> pull -> push]',
    type: 'string'
  })
  .argv;


let author, logs;
// 获取author
const getAuthor = exec('git config user.name', (err, stdout, stderr) => {
  if (err) {
    console.log(color.red(err));
    return;
  };
  author = stdout;
  getAuthor.kill();
  // 获取4天之内[author]提交的所有记录
  const getLogs = exec(`git log --pretty=format:"%h - %an, %cd : %s" --since="4 day ago" --author="${author}"`, (err, stdout, stderr) => {
    if (err) {
      console.log(color.red(err));
      return;
    };
    logs = stdout;
    console.log(logs);
    getLogs.kill();
  });
});


