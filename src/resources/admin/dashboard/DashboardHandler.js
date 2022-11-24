"use strict";

const dashboard = (req, res) => {
    res.render('admin/Index', {
        title: 'View Engine Demo'
    })
};

const dashboardHandler = {
    dashboard
};
export default dashboardHandler;
