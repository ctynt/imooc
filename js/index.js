/*
 * @Author: yxtong
 * @Date: 2023-01-12 11:09:43
 * @LastEditors: yxtong
 * @LastEditTime: 2023-01-14 01:03:23
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
        if (i === 5) {
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
        bg: '../images/swiper/bj-4.jpg'
    },

    {
        path: '../images/swiper/swiper-2.jpg',
        url: 'https://www.imooc.com/',
        bg: '../images/swiper/bj-4.jpg'
    },

    {
        path: '../images/swiper/swiper-3.jpg',
        url: 'https://www.imooc.com/',
        bg: '../images/swiper/bj-3.jpg'
    },

    {
        path: '../images/swiper/swiper-4.jpg',
        url: 'https://www.imooc.com/',
        bg: '../images/swiper/bj-3.jpg'
    },

    {
        path: '../images/swiper/swiper-5.jpg',
        url: 'https://www.imooc.com/',
        bg: '../images/swiper/bj-4.jpg'
    },

    {
        path: '../images/swiper/swiper-6.jpg',
        url: 'https://www.imooc.com/',
        bg: '../images/swiper/bj-1.jpg'
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

      // 找到左右切换按钮
    const prevArrow = document.querySelector('.prev');
    const nextArrow = document.querySelector('.next');

    // 找到所有的切换圆点
    const ul = document.querySelector('.circle-list');
    const list = document.querySelectorAll('.circle-list li');


    // 封装第一个切换图片的函数
    function changeImg(index) {
        const obj = swiperImgList[index];
        swiperA.style.backgroundImage = `url(${obj.path})`;
        swiperA.href = obj.url;
        banner.style.backgroundImage = `url(${obj.bg})`;
        
        currentCircle(index);
    }

    // 初始化轮播，显示第一张图
    changeImg(i);

    // 启动定时器
    timer = setInterval(() => {
        i = ++i === 4 ? 0 : i;
        changeImg(i);
    }, 3000);

    // 设置是否允许点击事件执行的标志位：true 则允许执行点击事件，false则不允许
    let flag = true;
    prevArrow.onclick = function () {
        // 如果当前不能点击，直接返回
        if(flag == false) {
            return;
        }

        flag = false;
        i = --i == -1 ? 3 : i;
        changeImg(i);
        // 一秒后，重新允许点击
        setTimeout(() => {
            flag = true;
        },1000)
    }

    nextArrow.onclick = function () {
        if (flag == false) {
            return;
        }

        flag = false;
        i = ++i == 4 ? 0 : i;
        changeImg(i);
        setTimeout(() =>{
            flag = true;
        },1000)
    }

    // 选中的圆点，对其进行函数封装
    function currentCircle(index) {
        for (let i = 0; i < list.length; i++) {
            list[i].className ='';
            list[index].className = 'current';
        }
    }

    // 循环注册所有圆点的点击事件，也注意1秒内不能重复点击
    for (let i = 0; i < list.length; i++) {
        list[i].onclick = function () {
            // 如果当前不能点击，直接返回
            if(flag == false) {
                return;
            }
    
            flag = false;
            changeImg(i);
            setTimeout(() => {
                flag = true;
            },1000)
        } 
    }

    // 鼠标悬停到轮播大图，清除定时器
    swiperA.onmouseenter = function () {
        clearInterval(timer);
    }

    // 鼠标离开，重新启动定时器
    swiperA.onmouseleave = function () {
        timer = setInterval(() => {
        i = ++i == 4 ? 0 : i;
        changeImg(i);
        },3000)
    }

    prevArrow.onmouseenter = function () {
        clearInterval(timer);
    }

    nextArrow.onmouseenter = function () {
        clearInterval(timer);
    }

    ul.onmouseenter = function () {
        clearInterval(timer);
    }
}





