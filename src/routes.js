import SignIn from './components/user/SignIn';
import SignUp from './components/user/SignUp';
import NotFound from './components/errors/NotFound';

export const routes = [
    {path: '', component: SignIn, title: 'Sign In'},
    {path: '/signup', component: SignUp, title: 'Sign Up'},
    {path: '*', component: NotFound, title: 'Not Found'}
];