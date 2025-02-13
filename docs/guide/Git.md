官方文档：[Git - Reference](https://git-scm.com/docs)

其他文档：[GitCheatSheet_byGeekHour_v1.0.0.pdf](https://www.yuque.com/attachments/yuque/0/2024/pdf/21775509/1717141980509-47fd658b-b4c0-418c-83a8-c53136573984.pdf)	|  [Git 教程-极客教程](https://geek-docs.com/git/git-top-articles/1000100_git_index.html)

视频教程：[【GeekHour】一小时Git教程_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1HM411377j/?vd_source=4e033e2553922b4629a4bffe95234d29)

本文档为 Git 的日常使用，其他高级用法请参考 [官方文档](https://git-scm.com/docs)

# 安装 Git
前往 [Git 官网](https://git-scm.com/downloads)，根据操作系统下载对应的 Git 即可

若想使用可视化界面操作 Git，请根据自己的操作系统下载对应的 [GUI Client](https://git-scm.com/downloads/guis)



以 Windows 为例，鼠标右击选择`Open Git Bash Here`，输入`git -v`,查看 Git 版本号。如果查到版本号，表示 Git 安装成功。

```bash
# 查看 Git 版本号
git -v
```

# 初始化配置
在使用 Git 之前，请进行 Git 的全局配置

```bash
# 全局配置用户姓名，修改姓名也为此命令
git config --global user.name "LingYi"

# 全局配置用户邮箱，修改邮箱也为此命令
git config --global user.email "lingyi@gmail.com"

# 保存用户名和密码,避免每次都要输入用户名和密码
git config --global credential.helper store

# 查看Git的配置信息
git config --global --list
```

> `--global`：全局配置，对所有仓库生效
>

# 创建仓库
创建 1 个空目录，并`cd`到空目录中，然后执行指令`git init`或`git clone`

```bash
# 创建1个新的本地仓库，省略project_name则在当前目录创建
git init [project_name]

# 克隆1个远程仓库
git clone <url>
```

创建完毕，会在此目录下生成 1 个`.git`的隐藏目录，表示此目录可以由`Git`管理。

如果删除`.git`隐藏目录，此目录不再由 Git 管理。

# 工作区域和文件状态
[Git详解 --- 本地电脑的工作区、暂存区、本地仓与远程仓](https://blog.csdn.net/weixin_65775770/article/details/135421020)

[Git 快速入门](https://www.cnblogs.com/polk6/p/git-introduce.html)

## <font style="color:rgb(37, 37, 37);">工作区域</font>
<font style="color:rgb(37, 37, 37);">按照本地计算机与远程计算机划分，工作区域有以下几种：</font>

**<font style="color:black;">本地计算机</font>**

**<font style="color:rgb(37, 37, 37);">Working Directory（工作目录）</font>**<font style="color:rgb(37, 37, 37);">：</font><font style="color:rgb(77, 77, 77);">工作区，就是你平时存放项目代码的地方</font><font style="color:rgb(37, 37, 37);">。文件状态为未跟踪（untrack）和已修改（modified）在此区域内。</font>

**<font style="color:rgb(37, 37, 37);">Staging Area（暂存区）</font>**<font style="color:rgb(37, 37, 37);">：</font><font style="color:rgb(77, 77, 77);">暂存区也叫索引，用于临时存放未提交的内容，一般在</font><u><font style="color:rgb(77, 77, 77);"> </font></u>`<u><font style="color:rgb(77, 77, 77);">.git</font></u>`<u><font style="color:rgb(77, 77, 77);"> 目录下的</font></u>`<u><font style="color:rgb(77, 77, 77);"> index </font></u>`<u><font style="color:rgb(77, 77, 77);">文件（</font></u>`<u><font style="color:rgb(77, 77, 77);">.git/index</font></u>`<u><font style="color:rgb(77, 77, 77);">）</font></u><font style="color:rgb(77, 77, 77);">中</font><font style="color:rgb(37, 37, 37);">。文件状态为已暂存（staged）在此区域内。</font>

**<font style="color:rgb(37, 37, 37);">Repository（本地仓库）</font>**<font style="color:rgb(37, 37, 37);">：</font><font style="color:rgb(77, 77, 77);">Git 在本地的版本库，仓库信息存储在</font>`<font style="color:rgb(77, 77, 77);">.git</font>`<font style="color:rgb(77, 77, 77);">隐藏目录中。其中</font>`<font style="color:rgb(77, 77, 77);">HEAD</font>`<font style="color:rgb(77, 77, 77);">指向最新版本</font>

**<font style="color:black;">远程计算机</font>**

**<font style="color:rgb(37, 37, 37);">Remote Repository（远程仓库）</font>**<font style="color:rgb(37, 37, 37);">：托管在远程服务器上的仓库。常用的有 GitHub、GitLab、Gitee。</font>

## 文件状态
不同的文件状态存储在不同的工作区域中

**<font style="color:rgb(37, 37, 37);">未跟踪（untrack）</font>**<font style="color:rgb(37, 37, 37);">：新创建的文件。</font>

**<font style="color:rgb(37, 37, 37);">已修改（modified）</font>**<font style="color:rgb(37, 37, 37);">：修改了但没有保存到暂存区的文件。</font>

**<font style="color:rgb(37, 37, 37);">已暂存（staged）</font>**<font style="color:rgb(37, 37, 37);">：修改后已经保存到暂存区的文件 。</font>

**<font style="color:rgb(37, 37, 37);">已提交（committed）</font>**<font style="color:rgb(37, 37, 37);">：把暂存区的文件提交到本地仓库后的状态。</font>

## <font style="color:rgb(37, 37, 37);">示例图</font>
![](https://cdn.nlark.com/yuque/0/2024/png/21775509/1717055849237-2501d27a-bd86-4af6-ba0b-ea743ea8bfe7.png)

# 添加和提交文件
```bash
# 添加1个文件到暂存区
git add <file>
```

> `git add **<font style="color:#DF2A3F;">.</font>**`：添加当前目录下的所有文件到暂存区。`.`表示当前目录
>

```bash
# 提交暂存区中的所有文件到本地仓库
git commit -m "message"

# 提交所有已修改的文件到本地仓库。
git commit -am "message"
```

```bash
# 查看仓库状态,列出还未提交的新的或修改的文件。
git status

# 查看提交日志。--oneline表示简介模式。
git log [--oneline]
```

# git reset 回退版本
```bash
# 重置当前分支的HEAD为之前的某次提交，并且删除所有之后的提交
git reset --mixed <commit-id>
```

> `--hard`：表示重置工作区和暂存区
>
> `--soft`：不清除工作区和暂存区的内容
>
> `--mixed`：默认值，不清除工作区中的内容，清除暂存区中的内容。
>
> `HEAD^`：表示上一个版本
>

```bash
# 查看工作区中的目录和文件【Linux本身的指令】
ls

# 查看暂存区中的目录和文件
git ls-files
```

Git 中的所有操作都是可以回溯的

```bash
# 查看操作历史记录
git reflog

# 回退版本。不写参数，默认为 --mixed
git reset <commit-id>
```

# git diff 查看差异
`git diff`指令用于查看文件在工作区、暂存区以及版本库之间的差异。还可以查看文件在两个特定版本之间的差异。或者文件在两个分支之间的差异

![](https://cdn.nlark.com/yuque/0/2024/png/21775509/1717240956925-9d779332-dc72-426c-b34f-c109277789aa.png)



```bash
# 不加参数，默认比较工作区和暂存区之间的差异内容
git diff

# 比较工作区和版本库之间的差异内容
git diff HEAD

# 比较暂存区和版本库之间的差异
git diff cached

# 比较上1个版本和当前版本的差异。HEAD~ 表示上一个版本。HEAD~2 表示上2个版本
git diff HEAD~ HEAD

# 比较上1个版本和当前版本指定文件的差异
git diff HEAD~ HEAD [file]
```

# git ref 删除文件
`rm file``git add file`：先从工作区删除文件，然后再删除暂存区文件，较为麻烦。采取`git rm`

```bash
# 把文件从工作区和暂存区同时删除
git rm <file>

# 递归删除某个目录下的所有目录和文件
git rm -r*
```

> 删除后不要忘记提交
>

# .gitignore 忽略文件
这个文件的作用：忽略一些不应该加入到版本库中的文件

# GitHub 添加 SSH 公钥
```bash
# 进入用户根目录
cd ~

# 进入.ssh目录
cd .ssh

生成公钥和私钥文件
ssh-keygen -t rsa -b 4096
```

`.ssh/id_rsa`：私钥文件

`.ssh/id_rsa.pub`：公钥文件

> 将公钥文件中的内容添加到远程仓库的 SSH 配置
>

# 关联本地仓库和远程仓库
下图为 GitHub 的教程：如何关联本地仓库和远程仓库

![](https://cdn.nlark.com/yuque/0/2024/png/21775509/1717127919489-b0408140-82c2-4037-9905-f2df07eeca6e.png)

```bash
### 本地Git仓库未存在【远程仓库没有文件】
# 创建1个README.md文件【非必须】
echo "# SpringBoot-Demo" >> README.md
git init
git add README.md
git commit -m "first commit"
# 重命名当前所在的分支名称
git branch -M main
# 将本地仓库与远程仓库关联。origin为远程仓库别名
git remote add origin git@github.com:lovesqiang/SpringBoot-Demo.git
git push -u origin main

########################################################################

### 本地Git仓库已经存在
git remote add origin git@github.com:lovesqiang/SpringBoot-Demo.git
# 重命名当前所在的分支名称
git branch -M main
git push -u origin main
```

```bash
创建1个空目录

# 此指令已经能够将本地仓库与远程仓库关联
git clone <url>

# 本地仓库推送到远程仓库
git push
```

同步更新本地仓库和远程仓库的两个指令：

```bash
# 推送更新内容
git push

# 拉取更新内容
git pull
```

查看当前本地仓库相关联的远程仓库地址

```bash
git remote -v

# 查看某个远程仓库的详情
git remote show origin
```

# 分支和基本操作
```bash
# 查看当前仓库所有分支。当前分支前面会有1个*号
git branch

# 创建1个新分支
git branch <branch_name>

# 切换分支
git checkout <branch_name>

# 切换分支【Git V2.23】,语义更加明确
git switch <branch_name>
```

```bash
# 合并分支。分支名为将要被合并的分支【合并分支前请切换到 main 上】
git merge <branch_name>
```

> 警告：必须在 main 分支上执行合并操作
>

![](https://cdn.nlark.com/yuque/0/2024/png/21775509/1717241905971-408fb4dc-4d76-4f47-9955-8c59c60c105e.png)

```bash
# 查看分支合并图
 git log --graph --oneline --decorate --all

*   9826851 (HEAD -> master) Merge branch 'dev'
|\
| * 80f2313 (dev) dev:2
| * 394da52 dev:1
* | b4965b3 main:5
* | 88d484c main:4
|/
* df4be7a main3
* 26d8846 main:2
* 0d470d3 main:1

```

```bash
# 强制重命名当前分支
git branch -M <new_branch_name>
```

> <font style="color:rgb(44, 44, 54);">这里的</font>`<font style="color:rgb(44, 44, 54);">-M</font>`<font style="color:rgb(44, 44, 54);">选项是一个强制（force）标志，表示在重命名分支时，如果目标名称已经存在，Git会直接覆盖原有的分支，而不会询问或报错。这与</font>`<font style="color:rgb(44, 44, 54);">-m</font>`<font style="color:rgb(44, 44, 54);">选项相似，但</font>`<font style="color:rgb(44, 44, 54);">-m</font>`<font style="color:rgb(44, 44, 54);">在目标分支已存在时不会覆盖，而是会报错。</font>
>

```bash
# 删除分支
git branch -d <branch_name>

# 强制删除分支
git branch -D <branch_name>
```

# git rebase
变基。除了使用`git merge`来合并分支。还可以使用`git rebase`来合并分支

![](https://cdn.nlark.com/yuque/0/2024/png/21775509/1717241260124-31bfb7ad-3b78-42d7-a479-72a77d7860e4.png)

> 提示：可以在任意分支执行合并操作
>

```bash
# 切换分支到 master
git switch master

# 找到 master 与 dev 的共同节点，以 dev 分支为基，将 非公共部分嫁接到dev上。
git rebase dev
```

