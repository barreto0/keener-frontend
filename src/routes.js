import SignIn from './components/user/SignIn';
import SignUp from './components/user/SignUp';
import Dashboard from './components/management/Dashboard'
import NotFound from './components/errors/NotFound';

export const routes = [
    {path: '', component: SignIn, title: 'Sign In'},
    {path: '/signup', component: SignUp, title: 'Sign Up'},
    {path: '/dashboard', component: Dashboard, title: 'Dashboard'},
    {path: '*', component: NotFound, title: 'Not Found'}
];