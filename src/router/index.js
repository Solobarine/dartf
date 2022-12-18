import { createRouter, createWebHistory } from "vue-router";
import AccountView from '../views/AccountView.vue';
import DashBoard from '../views/Dashboard.vue';
import DepositView from '../views/DepositView.vue';
import Login from '../views/Login.vue';
import MessageView from '../views/MessageView.vue';
import Settings from '../views/Settings.vue';
import SignUp from '../views/SignUp.vue';
import TransferView from '../views/TransferView.vue';
import Welcome from '../views/Welcome.vue';

const routes = [
  {
    name: 'Account',
    path: '/dashboard/account',
    component: AccountView
  },
  {
    name: 'DashBoard',
    path: '/dashboard',
    component: DashBoard
  },
  {
    name: 'Deposit',
    path: '/dashboard/deposit',
    component: DepositView
  },
  {
    name: 'Login',
    path: '/login',
    component: Login
  },
  {
    name: 'Message',
    path: '/dashboard/messages',
    component: MessageView
  },
  {
    name: 'Settings',
    path: '/dashboard/settings',
    component: Settings
  },
  {
    name: 'SignUp',
    path: '/signup',
    component: SignUp
  },
  {
    name: 'Transfer',
    path: '/dashboard/transfer',
    component: TransferView
  },
  {
    name: 'Welcome',
    path: '/',
    component: Welcome
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
