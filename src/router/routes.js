import SignIn from '../components/user/SignIn';
import SignUp from '../components/user/SignUp';
import Dashboard from '../components/management/Dashboard'
import NotFound from '../components/errors/NotFound';
import Product from '../components/products/Product';
import Transaction from '../components/transactions/Transaction'

export const routes = [
    {path: '', component: SignIn, title: 'Sign In', meta: {guest: true}},
    {path: '/signup', component: SignUp, title: 'Sign Up', meta: {guest: true}},
    {path: '/dashboard', component: Dashboard, title: 'Dashboard', meta: {requiresAuth: true}},
    {path: '/product/:id', component: Product, title: 'Product', meta: {requiresAuth: true}},
    {path: '/transaction/:type/:productId', component: Transaction, title: 'Transaction', meta: {requiresAuth: true}},
    {path: '*', component: NotFound, title: 'Not Found', meta: {guest: true}}
];