/*
 * @Author: yxtong
 * @Date: 2023-01-12 11:09:43
 * @LastEditors: yxtong
 * @LastEditTime: 2023-01-13 01:09:43
 */
// 定时器实现关键词切换

{
    // 1.获取搜索框的输入表单对象
    let input = document.querySelector(".search input");

    // 2.设置关键字数组
    const keyWords = ['Vue3.0', 'React', '爬虫技术', 'Java', '多线程'];

    // 3.使用setInterval 每隔2秒切换一个关键词
    let i = 0; // 下标
    input.placeholder = keyWords[i];
    setInterval(() => {
        i++;
        if (i == 5) {
            i = 0;
        }
        input.placeholder = keyWords[i];
    }, 2000);
}

{
    // 定义轮播图数组
    const swiperImgList = [
    {
        path: '../images/swiper/swiper-1.jpg',
        url: 'https://www.imooc.com/',
        bg: '../images/swiper/bj-1.jpg'
    },

    {
        path: '../images/swiper/swiper-2.jpg',
        url: 'https://www.imooc.com/',
        bg: '../images/swiper/bj-2.jpg'
    },

    {
        path: '../images/swiper/swiper-3.jpg',
        url: 'https://www.imooc.com/',
        bg: '../images/swiper/bj-3.jpg'
    },

    {
        path: '../images/swiper/swiper-4.jpg',
        url: 'https://www.imooc.com/',
        bg: '../images/swiper/bj-4.jpg'
    }
    ];

    // 找到 swiper下的a 标签
    const swiperA = document.querySelector('.swiper a');
    // 找到最外层的div
    const banner = document.querySelector('#banner');
    // 定时定时器
    let timer = null;
    // 数组索引
    let i = 0;

    // 封装第一个切换图片的函数
    function changeImg(index) {
        const obj = swiperImgList[index];
        swiperA.style.backgroundImage = `url(${obj.path})`;
        swiperA.href = obj.url;
        banner.style.backgroundImage = `url(${obj.bg})`;
    }

    // 初始化轮播，显示第一张图
    changeImg(i);

    // 启动定时器
    timer = setInterval(() => {
        i = ++i ===4 ? 0 : i;
        changeImg(i);
    }, 3000);
}






