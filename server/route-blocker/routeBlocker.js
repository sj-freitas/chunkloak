const hasPermission = true;

const responseOnBlock = `(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{22:function(n,u,o){"use strict";o.r(u);o(0);u.default=function(){return null}}}]);
//# sourceMappingURL=ultra-top-secret.js.map`;

const getAllMeta = () => (['/static/js/ultra-top-secret.js']);

module.exports = (app) => {
    getAllMeta().forEach(t => {
        app.use(t, (req, res, next) => {

            // Check permission
            if (!hasPermission) {
                res.send(responseOnBlock);

                return;
            }

            next();
        })
    });
};
