#!/usr/bin/env node
const shell = require('shelljs');
const color = require('colors');
const { exec } = require('child_process');
const moment = require('moment');

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


