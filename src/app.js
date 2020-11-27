// 载入默认全局样式 normalize
import '@alifd/next/reset.scss';
import { runApp } from 'ice';

const appConfig = {
  router: {
    type: 'browser', // 配置 browser 路由
  },
};

runApp(appConfig);