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
`
