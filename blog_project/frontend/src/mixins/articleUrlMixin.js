const api_url = 'http://rest-blog.run.goorm.io/api/'

export default {
    data() {
        return {
            
        }
    },
    methods: {
        articleAPIUrl(){
            return api_url + 'article/';
        },
        articleDetailUrl(articleId){
            return this.articleAPIUrl() + articleId;
        },
    }
};
