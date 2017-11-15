[git教程](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/)

## 常用命令
`git init`:创建版本库  
`git add`:把文件添加到仓库,把文件提交到暂存区
`git commit -m "xxx"`:把文件提交到仓库,注意最好每次添加详细的注释,以便以后查找  
`git status`:查看仓库当前的状态  
`git log`:查看历史记录  
`git diff`:可以查看修改内容  
`git reset --hard HEAD^`:版本回退到上一个版本      
`git reset --hard 3628164`:会退到指定版本, git的版本回退非常快,这是因为版本回退时仅仅只是将指针指向了不同的版本  
`git reflog`:查看命令历史,以便确定回到未来哪个版本  
`git checkout -- file`:撤销修改,就是让这个文件回到最近一次`git commit`或`git add`时的状态,命令中的`--`很重要，没有--，就变成了“切换到另一个分支”的命令。`git checkout`其实是用版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以“一键还原”。

#### 小结
>场景1：当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令`git checkout -- file`。

>场景2：当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令`git reset HEAD file`，就回到了场景1，第二步按场景1操作。

>场景3：已经提交了不合适的修改到版本库时，想要撤销本次提交，参考版本回退一节，不过前提是没有推送到远程库。


`git rm file`:删除文件
`git remote add origin git@github.com:michaelliao/learngit.git`:关联本地仓库和远程仓库  
`git push -u origin master`:把本地仓库的内容推送到远程仓库上(第一次)  
`git push origin master`:以后提交时的建华命令  
`git clone git@github.com:michaelliao/gitskills.git`:把远程库克隆到本地

### 分支管理(待续)