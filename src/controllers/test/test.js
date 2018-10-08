const test = require('tape');
const supertest = require('supertest');
const app = require('../../app');

// Admin login
test('Home route with get method returns a status code of 200 ', (t) => {
  supertest(app)
    .get('/admin/login')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) t.error(err);
      t.equal(res.text.includes('<title>تسجيل الدخول</title>'), true, 'the page should have title \'تسجيل الدخول\'');
      t.equal(res.text.includes('<section class="content">'), true, 'the page should have content class');
      t.end();
    });
});

test('test for home page route ', (t) => {
  supertest(app)
    .get('/admin/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) {
        t.error(err);
      }
      t.equal(res.text.includes('<title>الرئيسية</title>'), true, 'the page should have title \'الرئيسية\'');
      t.end();
    });
});

test('test for borrowing section route ', (t) => {
  supertest(app)
    .get('/admin/borrow')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) {
        t.error(err);
      }
      t.equal(res.res.statusMessage, 'OK', 'statusMessage should return OK');
      t.equal(res.text.includes('<title>اﻹعارة</title>'), true, 'the page should have title \'اﻹعارة\'');
      t.end();
    });
});

// error pages tests
test('error page of status code of 404 ', (t) => {
  supertest(app)
    .get('/shsfgsgfh')
    .expect(404)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) t.error(err);
      t.equal(res.res.statusMessage, 'Not Found', 'statusMessage should return Not Found');
      t.equal(res.clientError, true, 'should use clientError function and return true');
      t.equal(res.text.includes('<title>Error | 404</title>'), true, 'the page should have title \'Error | 404\'');
      t.end();
    });
});

// test website homepage
test('test for website landing page route ', (t) => {
  supertest(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) {
        t.error(err);
      }
      t.equal(res.res.statusMessage, 'OK', 'statusMessage should return OK');
      t.equal(res.text.includes('<title>الرئيسية</title>'), true, 'the page should have title \'الرئيسية\'');
      t.end();
    });
});

test('test for library view page route ', (t) => {
  supertest(app)
    .get('/admin/books/library')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) {
        t.error(err);
      }
      t.equal(res.text.includes('<title>عرض المكتبة</title>'), true, 'the page should have title \'الرئيسية\'');
      t.end();
    });
});

test.onFinish(() => {
  process.exit(0);
});
