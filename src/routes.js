import SignIn from './components/user/SignIn';
import NotFound from './components/errors/NotFound';

export const routes = [
    {path: '', component: SignIn, title: 'Sign In'},
    {path: '*', component: NotFound, title: 'Not Found'}
];