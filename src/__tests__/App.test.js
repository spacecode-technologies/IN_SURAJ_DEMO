// import React from 'react';
// import { mount } from 'enzyme';

import Enzyme, { mount} from "enzyme";

import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Provider } from "react-redux";
import { findTestAttr, storefactory } from "../testUtils";
import {Switch,BrowserRouter } from "react-router-dom";
import App from "../App";
Enzyme.configure({adapter:new EnzymeAdapter()});
// import App from './App';
// import { findTestAttr, storefactory } from './testUtils';
// import { Provider } from 'react-redux';

// jest.mock('./redux/action');
// import Signin from "./redux/actions";








// const setup=()=>{
//     const store=storefactory()
//     return mount(<Provider store={store}><App/></Provider>)
//   }
  
//   test('renders learn react link', () => {
//     const wrapper=setup()
//     const appComponent=findTestAttr(wrapper,"component-app")
//     expect(appComponent).toHaveLength(1);
  
  
//     // render(<App />);
//     // const linkElement = screen.getByText(/learn react/i);
//     // expect(linkElement).toBeInTheDocument();
//   });
  
//   describe('get secrete word', () => {
//   beforeEach(()=>{
//     getsecreteword.mockClear();
//   })
  
//     test('get secreate word on app mount', () => {
//       const wrapper=setup()
//       expect(getsecreteword).toHaveBeenCalledTimes(0)
      
//     })
    
//   test('get secreate word will not run on update',()=>{
//     const wrapper=setup()
//     getsecreteword.mockClear()
//     wrapper.setProps()
  
//     expect(getsecreteword).toHaveBeenCalledTimes(0)
  
//   })
  
//   })


const setup=()=>{
    const store=storefactory()
    return mount(<BrowserRouter><Switch><Provider store={store}><App/></Provider></Switch></BrowserRouter>)

}

describe("should",()=>{
test('should component available', () => {
    const wrapper=setup()
    const component=findTestAttr(wrapper,"component")
    expect(component.length).toBe(1)
})

})






