# chia-ploter

完全免配置的p图工具

使用其他语言阅读：[English](./README.md) | 简体中文



启动一个进程，指定临时目录和目标目录，源源不断的使用临时目录p图到目标目录

想要多线程跑就多开几个命令行运行`chiaP`命令


## 快速开p
首先你得安装好了官方的客户端吧，这就不说了。然后运行`npm install chiaP`就可以装上这个工具了`chiaP`,开P！
```
npm install chiaP
chiaP -t D:\temp\a -d E:\chia
```
![](https://github.com/binjie09/chia-ploter/blob/main/img/20210427002246.jpg)
## TODO List

- [x] 循环p盘
- [x] 显示当前进度，显示p盘次数、总时间和当前时间、显示临时目录和最终目录路径
- [] 如果临时目录满了自动结束当前盘的临时目录中进度最低的那个进程，然后删掉临时文件腾出空间。
