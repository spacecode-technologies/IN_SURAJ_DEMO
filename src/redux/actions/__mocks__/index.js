module.exports={
    ...jest.requireActual('../action'),
    __esModule:true,
    Sendlogin: jest.fn().mockResolvedValue({ status:200,
        response:{ data:{status:true}}})
}