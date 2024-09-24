import {Child, Customer, Donation} from "@/type";

export const MockChildren: Child[] = [{
    chid: 1,
    chdob: new Date(),
    chname: "test",
    chdate: new Date(),
    chdesc: "test",
    chgender: "male",
    chimg: "1rtr",
    chlocation: "test",
    donations: [],
},
    {
        chid: 2,
        chdob: new Date(),
        chname: "test2",
        chdate: new Date(),
        chdesc: "test",
        chgender: "female",
        chimg: "1rtr",
        chlocation: "test",
        donations: [],
    }];

export const MockPatron: Customer[] = [{
    cid: 1,
    cdate: new Date(),
    name: "test",
    answers: [],
    donation: [],
    enabled: true,
    password: "testse",
    role: "etst",
    username: "testest",
    questions: [],
}]

export const MockDonation: Donation[] = [{
    child: MockChildren[0],
    customer: MockPatron[0],
    did: 1,
    ddate: new Date(),
    donationAmount: 100000,
    donationMethod: "일시 후원",
    donationPeriod: 0
}]