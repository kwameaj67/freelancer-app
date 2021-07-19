type data = {
    status:String,
    msg:String,
    price:String,
    arrow:String
}
export const data = [
    {
        id:1,
        status:"Sent",
        msg:"Sending payments to clients",
        price:`$${150}`,
        arrow:"arrowup"
    },
    {
        id:2,
        status:"Receive",
        msg:"Receiving salary from company",
        price:`$${250}`,
        arrow:"arrowdown"
    },
    {
        id:3,
        status:"Loan",
        msg:"Loan for the car",
        price:`$${400}`,
        arrow:"arrowdown"
    },
    {
        id:4,
        status:"Receive",
        msg:"Receiving money from cousin",
        price:`$${1000}`,
        arrow:"arrowdown"
    },
]