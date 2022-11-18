import ResourceHandler from "../../bases/route/ResourceHandler.js";
import RequestHandler from "../../bases/route/RequestHandler.js";

const accountResource = new ResourceHandler("account")
accountResource
    .get(new RequestHandler("", async (req, res) => {
        res.send(`default account `)
    }))
    .get(new RequestHandler("/hello", (req, res) => {
        res.send('account hello')
    }));

export default accountResource;


