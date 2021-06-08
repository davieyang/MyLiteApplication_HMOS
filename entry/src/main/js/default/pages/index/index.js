import router from '@system.router';
export default {
    data: {
        title: 'LeadsCloud',
        clime:'点我'
    },
    clickAction(){
        console.log("The button of main page is Clicked");
        router.replace({uri:'pages/index/training/training'});
    }

}
