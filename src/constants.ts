/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 */

export enum Endpoints {
    LIST_USERS = '/users'
}

export const BASE_URL = 'https://my-json-server.typicode.com/devjuliocesar/list_customer';
