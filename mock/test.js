const list = [
  {
    nike: 'Aa',
    phone: '12345678901',
    name: '小A',
    subject: '计算机应用',
    job: 'web',
    year: '10',
    updateTime: '2022-03-01'
  },
  {
    nike: 'Bb',
    phone: '12345678901',
    name: '小B',
    subject: '数字媒体',
    job: 'web',
    year: '12',
    updateTime: '2022-03-01'
  },
  {
    nike: 'Cc',
    phone: '12345678901',
    name: '小C',
    subject: '网络工程',
    job: 'web',
    year: '8',
    updateTime: '2022-03-01'
  }
]
module.exports = [
  {
    url: '/vue-element-admin/test/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          total: list.length,
          items: list
        }
      }
    }
  }
]
