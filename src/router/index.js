import { createRouter, createWebHistory } from "vue-router";
import AccountView from '../views/AccountView.vue';
import ContactUsPage from '../views/ContactUsPage.vue';
import DashBoard from '../views/Dashboard.vue';
import DepositView from '../views/DepositView.vue';
import Login from '../views/Login.vue';
import MessageView from '../views/MessageView.vue';
import Settings from '../views/SettingsPage.vue';
import SignUp from '../views/SignUp.vue';
import TransferView from '../views/TransferView.vue';
import Welcome from '../views/Welcome.vue';
import { store } from '../store';

const routes = [
  {
    name: 'Account',
    path: '/dashboard/account',
    component: AccountView,
    meta: { loggedIn: true }
  },
  {
    name: 'ContactUs',
    path: '/dashboard/contact-us',
    component: ContactUsPage,
    meta: { loggedIn: true }
  },
  {
    name: 'DashBoard',
    path: '/dashboard',
    component: DashBoard,
    meta: {
      loggedIn: true
    }
  },
  {
    name: 'Deposit',
    path: '/dashboard/deposit',
    component: DepositView,
    meta: {
      loggedIn: true
    }
  },
  {
    name: 'Login',
    path: '/login',
    component: Login
  },
  {
    name: 'Message',
    path: '/dashboard/messages',
    component: MessageView,
    meta: { loggedIn: true }
  },
  {
    name: 'Settings',
    path: '/dashboard/settings',
    component: Settings,
    meta: { loggedIn: true }
  },
  {
    name: 'SignUp',
    path: '/signup',
    component: SignUp
  },
  {
    name: 'Transfer',
    path: '/dashboard/transfer',
    component: TransferView,
    meta: { loggedIn: true }
  },
  {
    name: 'Welcome',
    path: '/',
    component: Welcome,
    meta: {
      loggedIn: false
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((_to, _from, next) => {
  if (!_to.meta.loggedIn) {
    next()
  } else {
    if (store.state.loggedIn) {
      next()
    } else {
      next('/login')
    }
  }
}) 

export default router;
