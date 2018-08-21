import { ActionContext, Store, ActionTree, GetterTree, MutationTree } from 'vuex';

const namespace: string = 'article/';

export interface Article {
    title: string;
    content: string;
}

export interface State {
    articles: Article[];
}

const initState: State = {
    articles: [
        {
            title: 'title1',
            content: 'content1',
        },
        {
            title: 'title1',
            content: 'content1',
        },
        {
            title: 'title1',
            content: 'content1',
        },
        {
            title: 'title1',
            content: 'content1',
        },
        {
            title: 'title1',
            content: 'content1',
        },

        {
            title: 'title1',
            content: 'content1',
        },
        {
            title: 'title1',
            content: 'content1',
        },
        {
            title: 'title1',
            content: 'content1',
        },
        {
            title: 'title1',
            content: 'content1',
        },
        {
            title: 'title1',
            content: 'content1',
        },
    ],
};

export const GETTER_TYPE = {
    ARTICLE_NUM: namespace + 'ARTICLE_NUM',
};

const getters: GetterTree<any, any> = {
    [GETTER_TYPE.ARTICLE_NUM](state: State) {
        return state.articles.length;
    },
};

export const MUTATION_TYPE = {
    ADD_ARTICLE: namespace + 'ADD_ARTICLE',
    ADD_ARTICLES: namespace + 'ADD_ARTICLES',
};
const mutations: MutationTree<any> = {
    [MUTATION_TYPE.ADD_ARTICLE](state: State, article: Article) {
        state.articles.push(article);
    },
    [MUTATION_TYPE.ADD_ARTICLES](state: State, articles: Article[]) {
        for (const article of articles) {
            state.articles.push(article);
        }
    },
};

export const ACTION_TYPE = {
    FETCH_ARTICLES: namespace + 'FETCH_ARTICLES',
};
const actions: ActionTree<any, any> = {
    async [ACTION_TYPE.FETCH_ARTICLES](context: ActionContext<State, any>) {
        setTimeout(() => {
            const articles: Article[] = [];
            for (let i = 0; i < 10; ++i) {
                articles.push({ title: 'title' + i, content: 'content ' + i });
            }
            context.commit(MUTATION_TYPE.ADD_ARTICLES, articles);
        }, 2000);
    },
};

export default {
    state: initState,
    getters,
    actions,
    mutations,
};
