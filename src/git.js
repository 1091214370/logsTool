/**
 * 与git相关功能：
 * 打印提交记录、便捷提交代码
 */
const color = require('colors');
const { exec } = require('child_process');


/**
 * 打印提交记录
 * @param {number} days 需要打印近几天的天数，为空或为0时，打印近4天
 */
function logs (days) {
  let author, logs;
  // 获取author
  const getAuthor = exec('git config user.name', (err, stdout, stderr) => {
    if (err) {
      console.log(color.red(err));
      return;
    };
    if (stderr) {
      console.log(color.red(stderr));
      return;
    }
    author = stdout;
    getAuthor.kill();
    // 获取4天之内[author]提交的所有记录
    const getLogs = exec(`git log --pretty=format:"%h - %an, %cd : %s" --since="${days || 4} day ago" --author="${author}"`, (err, stdout, stderr) => {
      if (err) {
        console.log(color.red(err));
        return;
      };
      if (stderr) {
        console.log(color.red(stderr));
        return;
      }
      logs = stdout;
      console.log(logs);
      getLogs.kill();
    });
  });
}

/**
 * 便捷提交代码
 * @param {string} msg git commit -m 的填写内容
 */
function commit(msg) {
  if (!msg) {
    console.log(color.red('请输入此次提交记录！'));
    return;
  }
  const add = exec('git add *', (err, stdout, stderr) => {
    if (err) {
      console.log(color.red(err));
      return;
    }
    if (stderr) {
      console.log(color.red(stderr));
      return;
    }
    console.log(stdout);
    add.kill();
    const commitFun = exec(`git commit -m ${msg}`, (err, stdout, stderr) => {
      if (err) {
        console.log(color.red(err));
        return;
      }
      if (stderr) {
        console.log(color.red(stderr));
        return;
      }
      console.log(stdout);
      commitFun.kill();
      const pull = exec('git pull', (err, stdout, stderr) => {
        if (err) {
          console.log(color.red(err));
          return;
        }
        if (stderr) {
          console.log(color.red(stderr));
          return;
        }
        console.log(stdout);
        pull.kill();
        const push = exec('git push', (err, stdout, stderr) => {
          if (err) {
            console.log(color.red(err));
            return;
          }
          if (stderr) {
            console.log(color.red(stderr));
            return;
          }
          console.log(stdout);
          push.kill();
        });
      });
    });
  });
  
}
module.exports = {
  logs,
  commit,
}
