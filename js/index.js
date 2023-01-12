/*
 * @Author: yxtong
 * @Date: 2023-01-12 11:09:43
 * @LastEditors: yxtong
 * @LastEditTime: 2023-01-12 11:23:48
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