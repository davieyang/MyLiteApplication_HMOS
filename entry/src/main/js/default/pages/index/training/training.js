import router from '@system.router';
export default {
    data: {
        title: 'Training Page',
        clime:'返回'
    },
    clickAction(){
        console.log("The button of training page is Clicked");
        router.replace({uri:'pages/index/index'});
    }
}
