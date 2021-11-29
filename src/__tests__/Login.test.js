import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Login from "../pages/Login/Login";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Provider } from "react-redux";
import { findTestAttr, storefactory } from "../testUtils";
import { Switch, BrowserRouter } from "react-router-dom";
import moxios from "moxios";
import Sendlogin from "../redux/actions/action";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (onMock) => {
  const store = storefactory();
  return mount(
    <BrowserRouter>
      <Switch>
        <Provider store={store}>
          <Login handleSubmit={onMock} />
        </Provider>
      </Switch>
    </BrowserRouter>
  );
};

describe("should element check", () => {
  const wrapper = setup();
  test("should username available", () => {
    const username = findTestAttr(wrapper, "username");
    expect(username.length).toBe(1);
  });
  test("should password available", async () => {
    const password = findTestAttr(wrapper, "Password");
    expect(password.length).toBe(1);
  });
  test("should login button available", async () => {
    const LoginButton = findTestAttr(wrapper, "LoginButton");
    expect(LoginButton.length).toBe(1);
  });
  test("should email", async () => {
    const LoginButton = findTestAttr(wrapper, "LoginButton");
    expect(LoginButton.length).toBe(1);
  });
  test("should submit button available", async () => {
    const SubmitButton = findTestAttr(wrapper, "SubmitButton");
    expect(SubmitButton.length).toBe(1);
  });
  test("should email box available", async () => {
    const emailbox = findTestAttr(wrapper, "email");
    expect(emailbox.length).toBe(1);
  });
});

describe("should mock axios",()=>{
  const post={username:5252,password:"admin"}
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




describe("input state change while changing value", () => {
  let mocksetguess = jest.fn();
  // const [state, setstate] = useState(initialState)

  let wrapper;
  let originalUseState;
  beforeEach(() => {
    mocksetguess.mockClear();
    originalUseState = React.useState;
    React.useState = jest.fn(() => ["", mocksetguess]);
    wrapper = setup();
  });
  afterEach(() => {
    React.useState = originalUseState;
  });

  test("state value inputbox upon change", () => {
    const MockEvent = { target: { value: 5252 } };

    const InputBox = findTestAttr(wrapper, "username");
    InputBox.simulate("change", MockEvent);
    expect(mocksetguess).toHaveBeenCalledWith(5252);
  });
  test("state value password upon change", async () => {
    const MockEvent = { target: { value: "admin" } };

    const InputBox = findTestAttr(wrapper, "Password");
    InputBox.simulate("change", MockEvent);

    // console.log(InputBox.text());

    expect(mocksetguess).toHaveBeenCalledWith("admin");
  });
});


describe("functions should work and call api",()=>{


test("should onsubmit and functional part work properly store work after calling", async () => {
  const store = storefactory();

  // const onMock = jest.fn();
  const wrapper = setup();
  const username = findTestAttr(wrapper, "usernames");
  // username.simulate("change",{target:{value:5252}})
  const password = findTestAttr(wrapper, "Password");
  // // password.simulate("change",{target:{value:"admin"}})()
  const e = { preventDefault: jest.fn(), target: { value: "admin" } };
  const event = { target: { value: 5252 } };
  password.invoke("onChange")(e);
  username.invoke("onChange")(event);

  const form = wrapper.find("form");
  
  // console.log();
  const handleSubmit = jest.fn(async (username, password) => {
    const post = { username, password };
    store.dispatch(Sendlogin(post));
  });
  const handlevalidation = jest.fn(() => {
    if (username.length !== 0 && password.length !== 0) {
      handleSubmit(username, password);
    }
  });

  const handlelogin = jest.fn((e) => {
    e.preventDefault();
    handlevalidation();
  });
form.invoke("onSubmit", handlelogin(e));
//   console.log(data1);
  expect(handleSubmit).toHaveBeenCalledTimes(1);

  expect(form.length).toBe(1);

  const data =  store.getState().Signin;
  // console.log(data);

  expect(data.loading).toBe(true);
});
});





// import { storefactory } from "../../testUtils";
// import Sendlogin from "./action";
// import { describe } from "yargs";






// test("should be chech mock useState", () => {
//   let setusername = jest.fn();
//   setusername.mockClear();
//   React.useState = () => ["", setusername];

//   const mock = setup();
//   const username = findTestAttr(mock, "usernames");
//   username.instance().value = "12345";
//   username.simulate("change");
//   expect(setusername).toHaveBeenCalledWith("12345");
// });


// test("should store work before submiting", () => {
//   const store = storefactory();
//   let setpassword = jest.fn();
//   setpassword.mockClear();
//   React.useState = () => ["", setpassword];
//   // const onSubmitMock = jest.fn();
//   // const wrapper = shallow(<SearchForm />)
//   const wrapper = setup();
//   const username = findTestAttr(wrapper, "usernames");
//   username.simulate("change", { target: { value: 5252 } });
//   const password = findTestAttr(wrapper, "Password");
//   password.simulate("change", { target: { value: "admin" } });
//   const form = wrapper.find("form");
//   expect(form.length).toBe(1);
//   // console.log(form.debug());l
//   form.simulate("submit");
  
// //   console.log(secreateword);
// });






// expect(password).toHaveBeenCalledWith("admin")
// expect(username).toHaveBeenCalledWith(5252)
// console.log(data1)

// expect(handlevalidation).toHaveBeenCalledTimes(1)

// .then((data)=>{
// console.log(data);
// })
// console.log(form.debug());

// it("passwords must be 8 char long", () => {

//     const onMock = jest.fn();
//     const wrapper = setup(onMock);
//     let setpassword = jest.fn()
//         // setpassword.mockClear()
//         React.useState = () => ['', setpassword]
//     const passInput =findTestAttr(wrapper,"Password")
//     const username = findTestAttr(wrapper,"usernames")
//     passInput.simulate("change", { target: { value: "admin" } });
//     username.simulate("change", { target: { value: 5252 } });

//     const form = wrapper.find("form");
//     form.simulate("submit", { preventDefault: () => {} });
//     expect(setpassword).toHaveBeenCalledWith("admin")

//     // expect(wrapper.find("#password-validation-error").text()).toContain(
//     //   "*Passwords must be at least 8 characters long!"
//     // );
//   });


  // beforeEach(()=>{
  //     Sendlogin.mockClear()
  // })
  //     test('should mock called once', () => {
  //         const wrapper=setup()
  //         const mocksetusername=jest.fn()
  //         React.useState=jest.fn(()=>["",mocksetusername])
  //         const username=findTestAttr(wrapper,"username")
  //         username.simulate("change",{target:{value:5252}})
  //         expect(mocksetusername).toHaveBeenCalledWith(5252)
  //     })
  // })


// expect(data.datastatus).toBe(true)
// form.simulate("submit", { preventDefault: () => {} })
// expect(e.preventDefault).toHaveBeenCalledTimes(1)
// form.simulate("submit",{username:5252,password:"admin"})
// form.invoke("onSubmit")().then(()=>{

// expect(data.data.status).toBe(true)

// })

// console.log(data);

// test('should function work properly', async() => {
//     const store=storefactory()
// const wrapper=setup()
//  const handlelogin= jest.fn()
// const handlelogin=jest.fn(()=>{
//     // e.preventDefault()
//     store.dispatch(Sendlogin({username:5252,password:"admin"}))
// })

// const form=wrapper.find("form");
// form.simulate('submit', ( preventDefault,store.dispatch(Sendlogin{username:5252,password:"admin"}) ));
// console.log(form.instance());

// form.props().onSubmit(handlelogin)

// expect(form.length).toBe(1)
// expect(handlelogin).toBeCalledTimes(1)
// console.log(form.debug());
// form.simulate("submit",handlelogin);
// expect(handlelogin).toHaveBeenCalledTimes(1)
// await fireEvent.submit(form,formEventMocked)
// const response=await store.getState().Signin
// console.log(response)
// expect(response.loading).toBe(true)

// expect(await screen.findAllByRole("alert")).toHaveLength(2)
// expect(mockLogin).not.toBeCalled();

// })

// expect(Object.values(secreateword)[1].data.data.status).toBe(true)

// console.log("onClickMock.mock", onSubmitMock.mock)
// expect(onSubmitMock).toBeCalled()

// const mockedEvent = { target: {}, preventDefault: () => {} }

// wrapper.find('form').simulate('submit', mockedEvent)
// expect(spy).toHaveBeenCalled()
//     const store=storefactory()
//   const handlelogin=jest.fn(()=>{
//     // jest.fn(()=>{
//     //     jest.fn(()=>{
//             store.dispatch(Sendlogin({ username:5252, password:"admin" }))
//         // })
//     // })

//   })
//   const wrapper=setup()
//   const button=findTestAttr(wrapper,"LoginButton")

// //   console.log(button.debug());
// //   expect(button.length).toBe(1)
// //   button.simulate("click")

// fireEvent.click(button)
//   const secreateword=store.getState().Signin
//   console.log(secreateword)
// //   expect(Object.values(secreateword)[1].data.data.status).toBe(true)
//   expect(handlelogin).toHaveBeenCalledTimes(1)

// test('useState mock', () => {
//     const initialStateForFirstUseStateCall = 'My First Initial State'
//     const initialStateForSecondUseStateCall = 'My Second Initial State'
//     const initialStateForThirdUseStateCall='my third i'

//     React.useState = jest.fn()
//       .mockReturnValueOnce([initialStateForFirstUseStateCall, {}])
//       .mockReturnValueOnce([initialStateForSecondUseStateCall, {}])
//       .mockReturnValueOnce([initialStateForThirdUseStateCall, {}])
//     //   .mockReturnValueOnce([initialStateForSecondUseStateCall, {}])

//     const wrapper = setup()
//     const username=findTestAttr(wrapper,"usernames")
//     const paasword=findTestAttr(wrapper,"Password")
//     const form=wrapper.find("form")
//     console.log(form.debug());

// })

// let setpassword = jest.fn()
// setpassword.mockClear()
// React.useState = () => ['test', setpassword]
// const MockEven={target:{value:5252}}
//     // const wrapper=setup()
//     const password=findTestAttr(wrapper,"username")
//     password.simulate("change",MockEven)
//     expect(setpassword).toHaveBeenCalledWith(5252);

// test('useState mock', () => {
//     const initialStateForFirstUseStateCall = 'My First Initial State'
//     const initialStateForSecondUseStateCall = 'My Second Initial State'

//     React.useState = jest.fn()
//       .mockReturnValueOnce([initialStateForFirstUseStateCall, {}])
//       .mockReturnValueOnce([initialStateForSecondUseStateCall, {}])

//       const wrapper=setup()

// describe("usestate",()=>{
//     let mockusername=jest.fn()
//     let wrapper;
//     beforeEach(()=>{
//         React.useState=jest.fn(()=>["",mockusername])
//         wrapper=setup()
//     })
//     test('should setState', () => {
//         const MockEvent={target:{value:"train"}}
//         const inputBox=findTestAttr(wrapper,"username")
//         inputBox.simulate("change",MockEvent)
//         expect(mockusername).toHaveBeenCalledWith("train");

//     })

// })

// describe("state controlled input",()=>{
//     let mocksetguess=jest.fn();
// let wrapper;
// beforeEach(() => {
//     const mocksetguess=jest.fn()
//     React.useState=jest.fn(()=>["",mocksetguess])
//     const wrapper=setup()
// });

// let wrapper;
// let originalUseState;
// beforeEach(() => {
//     mocksetguess.mockClear();
//     originalUseState=React.useState
//     React.useState=jest.fn(()=>["",mocksetguess])
//   wrapper = setup();
// });
// afterEach(()=>{
//     React.useState=originalUseState
// })

// test('state value inputbox upon change', () => {

//     const MockEvent={target:{value:"train"}}

//     const InputBox=findTestAttr(wrapper,"username")
// InputBox.simulate("change",MockEvent)
// expect(mocksetguess).toHaveBeenCalledWith("train");

// })

//     // test('should be clear upon submit', () => {
//     //     const button=findTestAttr(wrapper,"submit-button")
//     //     button.simulate("click",{preventDefault(){}})
//     //     expect(mocksetguess).toHaveBeenCalledWith("");
//     // })

// })

// describe("state controlled input",()=>{
//     let mocksetguess=jest.fn();
//     // let wrapper;
//     // beforeEach(() => {
//         // const mocksetguess=jest.fn()
//         // React.useState=jest.fn(()=>["",mocksetguess])
//     //     const wrapper=setup()
//     // });

//     let wrapper;
//     let originalUseState;
//     beforeEach(() => {
//         mocksetguess.mockClear();
//         originalUseState=React.useState
//         React.useState=jest.fn(()=>["",mocksetguess])
//       wrapper = setup();
//     });
//     afterEach(()=>{
//         React.useState=originalUseState
//     })

//     test('state value inputbox upon change', () => {

//         const MockEvent={target:{value:"train"}}

//         const InputBox=findTestAttr(wrapper,"username")
//         // InputBox.simulate("change",MockEvent)
//         // expect(mocksetguess).toHaveBeenCalledWith("train");

//     })

//     // test('should be clear upon submit', () => {
//     //     const button=findTestAttr(wrapper,"submit-button")
//     //     button.simulate("click",{preventDefault(){}})
//     //     expect(mocksetguess).toHaveBeenCalledWith("");
//     // })

// })
