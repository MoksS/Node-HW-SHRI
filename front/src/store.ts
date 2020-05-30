import { createStore, applyMiddleware, compose } from "redux";
import allReducers from "./reducers";
import thunk from "redux-thunk";
import { Build } from "./reducers/buildList";
import { BuildDetails } from "./reducers/buildDetails";

export interface StateInteface {
  setting: string,
  repName: string,
  buildList: {
    build: Array<Build>,
    finish: Boolean
  },
  buildDetails: BuildDetails,
  lang: string
}

declare global {
  interface Window {
    __PRELOADED_STATE__ : StateInteface;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}


// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducers, preloadedState, composeEnhancers(applyMiddleware(thunk)));

export default store;


// {
//   setting: '/build',
//   repName: 'MoksS/homework-verstka-',
//   buildList: {
//     build: [
//       {
//         id: 'cac1b014-d5e3-4157-aaa6-8cfb453edf4b',
//         configurationId: '78e95023-7140-4502-b685-39ca3d9b6abd',
//         buildNumber: 6,
//         commitMessage: 'пофиксил дизайн системы, вынес в глобальные перменные отступы, размеры шрифтов, и высоту в глобальные перменные\n',
//         commitHash: '95294dd38f14a3a308ef91eaf61e42e9edc45b7e',
//         branchName: 'master',
//         authorName: 'MoksS',
//         status: 'Waiting'
//       },
//       {
//         id: '7d36a424-6619-4a76-9d4f-0e1724593e67',
//         configurationId: '78e95023-7140-4502-b685-39ca3d9b6abd',
//         buildNumber: 5,
//         commitMessage: 'пофиксил дизайн системы, вынес в глобальные перменные отступы, размеры шрифтов, и высоту в глобальные перменные\n',
//         commitHash: '95294dd38f14a3a308ef91eaf61e42e9edc45b7e',
//         branchName: 'master',
//         authorName: 'MoksS',
//         status: 'Waiting'
//       },
//       {
//         id: 'ba7beb8d-97c3-4efd-bb4d-bfd6c3b866c7',
//         configurationId: '78e95023-7140-4502-b685-39ca3d9b6abd',
//         buildNumber: 4,
//         commitMessage: '2\n',
//         commitHash: 'f33f9539c65c4a1b888330235906c2e403edd57e',
//         branchName: 'master',
//         authorName: 'MoksS',
//         status: 'Waiting'
//       },
//       {
//         id: '9eca01d9-b350-4de4-b52a-0bde76d3217a',
//         configurationId: '78e95023-7140-4502-b685-39ca3d9b6abd',
//         buildNumber: 3,
//         commitMessage: '2\n',
//         commitHash: 'f33f9539c65c4a1b888330235906c2e403edd57e',
//         branchName: 'master',
//         authorName: 'MoksS',
//         status: 'Waiting'
//       },
//       {
//         id: '5cbcd031-2c94-41a3-8c5e-6bc8146b25c3',
//         configurationId: '78e95023-7140-4502-b685-39ca3d9b6abd',
//         buildNumber: 2,
//         commitMessage: '2\n',
//         commitHash: 'f33f9539c65c4a1b888330235906c2e403edd57e',
//         branchName: 'master',
//         authorName: 'MoksS',
//         status: 'Waiting'
//       }
//     ],
//     finish: false
//   },
//   buildDetails: {
//     commitHash: '',
//     log: '',
//     loading: true
//   }
// }