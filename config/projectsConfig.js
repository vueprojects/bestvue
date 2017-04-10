module.exports = {
  indexNames: ['todoMvc'],
  allProjects: [
    {
      name: 'index',
      name_cn: '首页',
      HtmlWebpackPlugin: {
        filename: 'index.html',
        template: 'src/templates/indexlist.html',
        inject: true,
        chunks: ['indexList']
      },
      entry: ['indexList']
    },
    {
      name: 'todo-mvc',
      name_cn: 'todoMvcDemo',
      HtmlWebpackPlugin: {
        filename: 'todo-mvc.html',
        template: 'src/templates/example.html',
        inject: true,
        chunks: ['todo']
      },
      entry: ['todo']
    },
    {
      name: 'gio',
      name_cn: '埋点demo',
      HtmlWebpackPlugin: {
        filename: 'gio.html',
        template: 'src/templates/example.html',
        inject: true,
        chunks: ['gio']
      },
      entry: ['gio']
    },
    {
      name: 'unit',
      name_cn: '开发单页测试',
      HtmlWebpackPlugin: {
        filename: 'unit.html',
        template: 'src/templates/unit.html',
        inject: true,
        chunks: ['unit']
      },
      entry: ['unit']
    },
    {
      name: 'ff15',
      name_cn: 'FF15项目',
      HtmlWebpackPlugin: {
        filename: 'index.html',
        template: 'src/templates/index.html',
        inject: true,
        chunks: ['ff15']
      },
      entry: ['ff15']
    },
    {
      name: 'uop',
      name_cn: '运营前端公众号小红巢',
      HtmlWebpackPlugin: {
        filename: 'uop.html',
        template: 'src/templates/index.html',
        inject: true,
        chunks: ['uop']
      },
      entry: ['uop']
    }
  ],
  projects: [
    {
      name: 'ff15',
      name_cn: 'FF15项目',
      HtmlWebpackPlugin: {
        filename: 'index.html',
        template: 'src/templates/index.html',
        inject: true,
        chunks: ['ff15']
      },
      entry: ['ff15']
    },
    {
      name: 'uop',
      name_cn: '运营前端公众号小红巢',
      HtmlWebpackPlugin: {
        filename: 'index.html',
        template: 'src/templates/uop.html',
        title: 'uop',
        inject: true,
        chunks: ['uop']
      },
      entry: ['uop']
    }
  ]
}
