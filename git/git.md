# git

### 添加

* 使用命令`git add <file>` 注意，可反复多次使用，添加多个文件；

* 使用命令`git commit -m '注释'`完成。

### 分支
* `$ git checkout -b dev` 创建并切换分支dev
* `$ git branch` 查看当前分支
* `$ git branch <name>` 创建分支  
***`$ git checkout -b <name>` = `$ git branch <name>` + `$ git checkout <name>`***
* `$ git checkout <name>` 切换分支
* `$ git merge <name>` 合并某分支到当前分支 
* `$ git branch -d dev` 删除分支dev
* `git branch -a `查看所有的分支
* `git branch -r` 查看远程所有分支

### 查看
* `git status` 查看当前状态，是否有修改

* `git diff` 查看修改内容。

* `git log` 查看提交日志,以便确定要回退到哪个版本。

* `git reflog`查看命令历史，以便确定要回到***未来***的哪个版本。(从后往前退)

* `git remote` 查看所有远程仓库的名字

* `git remote -v` 查看远程仓库的地址

### 版本回退
* `$ git reset --hard HEAD^` 版本回退到上一版本

***上一个版本就是`HEAD^`，上上一个版本就是`HEAD^^`，当然往上100个版本写100个^比较容易数不过来，所以写成`HEAD~100`。***

* `$ git reset --hard <版本号>` 回退到指定版本

### 修改
* `$ git checkout -- <flie>` 撤销修改

>命令`git checkout -- readme.txt`意思就是，把`readme.txt`文件在工作区的修改全部撤销，这里有两种情况：

>一种是`readme.txt`自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；

>一种是`readme.txt`已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。

>总之，就是让这个文件回到最近一次`git commit`或`git add`时的状态。


* `git reset HEAD <file>` 把已经提交到暂存区的修改撤销，并重新放回工作区

### 远程仓库修改 本地合并
* `git fetch origin master` 把远程仓库的最新代码下载下来，以便进行合并(不可缺少)

* `git log -p master origin/master` 比较远程仓库和本地仓库的区别

* `git merge origin/master` 远程仓库和本地仓库合并
