# 設定開發環境
[.devcontainer/docker-compose.yml](./.devcontainer/docker-compose.yml) 裡面可以設定開發環境，如：nodejs / mysql 的版本和 mysql 的起動設定

# 啟動方式
**準備**
1. 安裝 [docker desktop](https://www.docker.com/) 後，執行 docker desktop
2. 安裝vs code 的 [Extension- Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

**安裝到自己專案**
1. 下載本專案的 [.devcontainer](./.devcontainer) 資料夾
2. 放到你的專案根目錄
3. 在 VS Code 中，打開 "Command Palette"，選擇 "Dev Containers: Rebuild and Reopen in Container" 
4. 等待遠端環境建置完成

# 操作示範
https://github.com/eugenechen0514/todo-list-sequelize/assets/20304035/f13358ef-ffe0-42b7-b7ea-d384cbb704b6

# wiki
[操作示範－以 Heroku CLI 為例](https://github.com/eugenechen0514/todo-list-sequelize-devcontainer/wiki/%E6%93%8D%E4%BD%9C%E7%A4%BA%E7%AF%84%EF%BC%8D%E4%BB%A5-Heroku-CLI-%E7%82%BA%E4%BE%8B)
