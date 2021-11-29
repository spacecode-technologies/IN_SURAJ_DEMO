import moxios from "moxios";
import { storefactory } from "../testUtils";
import Sendlogin from "../redux/actions/action";
// import { describe } from "yargs";
const post={username:5252,password:"admin"}

describe("getsecreteword",()=>{
    beforeEach(()=>{
        moxios.install();
    })
    afterEach(()=>{
        moxios.uninstall();
    })

    test("secrete word retun",()=>{
        const store=storefactory()
        moxios.wait(()=>{
            const request=moxios.requests.mostRecent();
            request.respondWith({
            status:200,
              response:{ data:{status:true}}
            });

        });
        return store.dispatch(Sendlogin(post))
        .then(()=>{
            
            const secreateword=store.getState().Signin
            expect(Object.values(secreateword)[1].data.data.status).toBe(true)
            
        })
    })

})
