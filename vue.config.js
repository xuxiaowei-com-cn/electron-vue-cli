const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      productName: "Electron Vue Cli",
      // 应用程序ID
      // 仅限NSIS目标，不支持Squirrel.Windows
      // 强烈建议设置显式ID
      appId: "cn.com.xuxiaowei.electron-vue-cli",
      copyright: "Copyright © 2023 徐晓伟 <xuxiaowei@xuxiaowei.com.cn>",
      externals: [],
      // 是否使用 asar 打包前端产物
      asar: true,
      // 解压的文件
      asarUnpack: [],
      builderOptions: {
        // 苹果 打包产物配置
        mac: {
          target: [
            "dmg"
          ],
          category: "Utility",
          artifactName: "${productName}_${version}-${arch}.${ext}"
        },
        // Windows 打包产物配置
        win: {
          // 应用程序图标的路径。
          icon: "build/icon-256x256.ico",
          target: [
            {
              target: "nsis",
              arch: [
                "ia32",
                "x64"
              ]
            }
          ],
          artifactName: "${productName}_${version}-${arch}.${ext}"
        },
        // Linux 打包产物配置
        linux: {
          icon: "build/icon-256x256.png",
          target: [
            "AppImage",
            "tar.gz",
            "tar.xz"
          ],
          category: "Utility",
          artifactName: "${productName}_${version}-${arch}.${ext}"
        },
        // 额外资源
        extraResources: [
          {
            from: "build/icon-256x256.ico",
            to: "../build/icon-256x256.ico",
          },
          {
            from: "build/icon-256x256.png",
            to: "../build/icon-256x256.png",
          }
        ],
        // nsis 配置
        nsis: {
          // 安装程序图标的路径，默认：build/installerIcon.ico
          installerIcon: "build/installerIcon.ico",
          // 卸载程序图标的路径，默认：build/uninstallerIcon.ico
          uninstallerIcon: "build/uninstallerIcon.ico",
          // 仅辅助安装程序，默认：build/installerHeader.bmp
          installerHeader: "build/installerHeader.bmp",
          // *仅限单击安装程序。*标题图标的路径（进度条上方），默认：build/installerHeaderIcon.ico
          installerHeaderIcon: "build/installerHeaderIcon.ico",
          // 一键安装
          oneClick: false,
          // 是否按所有用户（每台机器）安装。
          perMachine: false,
          // *仅支持安装程序。*是否允许用户更改安装目录。
          allowToChangeInstallationDirectory: true,
          // *仅限一键安装程序。*是否在卸载时删除应用程序数据。
          deleteAppDataOnUninstall: false,
          // https://github.com/electron-userland/electron-builder/blob/master/docs/configuration/nsis.md#guid-vs-application-name
          // https://jihulab.com/mirrors-github/electron-userland/electron-builder/-/blob/master/docs/configuration/nsis.md#guid-vs-application-name
          guid: "electron-vue-cli",
          // 是否创建开始菜单快捷方式。默认：true
          createStartMenuShortcut: true,
          // 是否创建桌面快捷方式。如果在重新安装时也要重新创建（即使被用户删除），则设置为“always”。默认：true
          createDesktopShortcut: "always",
          // 将用于所有快捷方式的名称。默认为应用程序名称。
          shortcutName: "electron 工具箱",
          // NSIS的路径包括用于自定义安装程序的脚本。默认为“build/installer.nsh”。
          // 自定义安装目录
          // https://github.com/electron-userland/electron-builder/blob/master/docs/configuration/nsis.md#common-questions
          // https://jihulab.com/mirrors-github/electron-userland/electron-builder/-/blob/master/docs/configuration/nsis.md#common-questions
          // include: "build/installer.nsh"
        }
      }
    }
  }
})
