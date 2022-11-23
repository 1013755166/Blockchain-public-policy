# 智能合约-公共政策

## 准备

进入remix网址

开启挖矿

开启挖矿有两种方式：

1. 打开*Ganache*，登录本地挖矿账户（建议使用这种方法，快捷便利）
2. 打开*cmd*，开启挖矿

将合约导入到remix中，用编辑器打开项目（建议使用*VScode*）

## 步骤

### 代码编译 Compile

选中remix页面中的合约，点击*Compile*

### 部署上链 Deploy

*environment* 选择 *Injected Provider – MetaMask*

value 单位选中 wei

点击*Deploy* 部署上链

跳出 *MetaMask* 后，确认燃料，生成合约地址就说明部署成功了

### 调用

复制部署成功后的合约地址

打开项目中的js文件中的*abi.js*，替换掉里面的*address*

点击 *contact.html* 右键点击 *Open with Live Server*

### 执行

打开网页后，输入相关信息，跳出*MetaMask*，确认燃料，提示成功就完成了

##  truffle 测试

1. *truffle compile*
2. *truffle migrate –reset*
3. *truffle test* (测试文件在Dapp中的test文件中)

## 注意事项

可在js文件中的*schedule.js*中修改政府地址（不是政府地址不能进入政府查询界面）