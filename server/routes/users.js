const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../passport');

const { validateBody, schemas } = require('../helpers/routehelpers');
const UsersController = require('../controllers/users');

router.route('/signup')
    .post(validateBody(schemas.authSchema),UsersController.signUp);

router.route('/signin')
    .post(UsersController.signIn);

router.route('/secret')
    .get(passport.authenticate('jwt',{ session: false }), UsersController.secret);

router.route('/oauth/google')
    .post(passport.authenticate('googleToken', { session: false }));
module.exports = router;