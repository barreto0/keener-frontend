import SignIn from './components/user/SignIn';
import SignUp from './components/user/SignUp';
import Dashboard from './components/management/Dashboard'
import NotFound from './components/errors/NotFound';
import Product from './components/products/Product';
import Transaction from './components/transactions/Transaction'

export const routes = [
    {path: '', component: SignIn, title: 'Sign In'},
    {path: '/signup', component: SignUp, title: 'Sign Up'},
    {path: '/dashboard', component: Dashboard, title: 'Dashboard'},
    {path: '/product/:id', component: Product, title: 'Product'},
    {path: '/transaction/:type/:productId', component: Transaction, title: 'Transaction'},
    {path: '*', component: NotFound, title: 'Not Found'}
];