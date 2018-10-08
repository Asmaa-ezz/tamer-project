const express = require('express');
const user = require('./user.js');
const login = require('./login');
const books = require('./books');
const borrow = require('./borrow');
const adminHomePage = require('./admin_homePage.js');
const websiteHomePage = require('./website_homepage');
const error = require('./error');

const router = express.Router();

router.get('/', websiteHomePage.get);

router.get('/admin/login', login.get);
router.get('/admin/', adminHomePage.get);
router.get('/admin/users', user.getViewUser);
router.get('/admin/users/borrower', user.getBorrowedUser);
router.get('/admin/books/library', books.getLibraryBooks);
router.get('/admin/books/store', books.getStoreBooks);
router.get('/admin/books/borrowed', books.getBorrowedBooks);
router.get('/admin/borrow', borrow.get);
router.get('/admin/books/add', books.getAddBookTab);
router.post('/admin/books/category', books.addCategory);
router.post('/admin/books/', books.addBook);
router.post('/admin/books/:bookId/library', books.addLibraryBook);

router.use(error.client);
router.use(error.server);

module.exports = router;
