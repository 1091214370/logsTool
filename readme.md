## weekly reports周报生成工具（git）git便捷工具

### 更新记录
#### v1.0.3
1. 优化git便捷提交内报错规则
#### v1.0.2
1. 支持打印自定义时间内的本人提交记录
2. 支持git代码便捷提交命令 提交git ignore之外的所有更改
#### v1.0.0 
1. 支持4天以内的当前项目的所有自己的提交记录

### 使用方法
#### 目前仅支持git项目，使用前需要安装。
```
npm i cwr -g
```
#### 打印提交日志
安装完成后，在自己本地的git项目内执行`cwr -d [number]`或者`cwr --days [number]`，控制台内会打印出来近[number]的提交记录，默认为4天，打印格式为：
```
[提交对象的简短哈希字串] - [author（你自己）], [提交日期]：[提交说明]
```

#### 快捷提交代码到远程仓库
执行`cwr -c [message]`或`cwr --commit [message]`,例如`cwr -m 提交代码内容`,即可完成`git add * => git commit => git pull => git push`。message为必填项。

