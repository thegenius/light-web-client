import { ActionContext, Store, ActionTree, GetterTree, MutationTree } from 'vuex';

const namespace: string = 'login/';

export interface State {
    account: string;
    password: string;
}

const initState: State = {
    account: 'account',
    password: 'password',
};

export const GETTER_TYPE = {
    IS_ACCOUNT_VALID: namespace + 'IS_ACCOUNT_VALID',
};

const getters: GetterTree<any, any> = {
    [GETTER_TYPE.IS_ACCOUNT_VALID](state: State) {
        return state.account.length >= 6;
    },
};

export const MUTATION_TYPE = {
    SET_ACCOUNT: namespace + 'SET_ACCOUNT',
    SET_PASSWORD: namespace + 'SET_PASSWORD',
};
const mutations: MutationTree<any> = {
    [MUTATION_TYPE.SET_ACCOUNT](state: State, account: string) {
        state.account = account;
    },
    [MUTATION_TYPE.SET_PASSWORD](state: State, password: string) {
        state.password = password;
    },
};

export const ACTION_TYPE = {
    CHECK_ACCOUNT: namespace + 'CHECK_ACCOUNT',
};
const actions: ActionTree<any, any> = {
    async [ACTION_TYPE.CHECK_ACCOUNT](
        context: ActionContext<State, any>,
        payload: { account: string, password: string }) {
        if (context.getters[GETTER_TYPE.IS_ACCOUNT_VALID]) {
            setTimeout(() => {
                context.commit(MUTATION_TYPE.SET_ACCOUNT, payload.account);
                context.commit(MUTATION_TYPE.SET_PASSWORD, payload.password);
            }, 2000);
        } else {
            setTimeout(() => alert('invalid'), 1000);
        }
    },
};

export default {
    state: initState,
    getters,
    actions,
    mutations,
};
