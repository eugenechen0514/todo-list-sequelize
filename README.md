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
