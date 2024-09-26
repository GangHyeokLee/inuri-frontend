import {Child, Customer, Donation, News} from "@/types/type";

export const MockChildren: Child[] = [{
    chid: 1,
    chdob: new Date(),
    chname: "test",
    chdate: new Date(),
    chdesc: "test",
    chgender: "male",
    chimg: "/child/r1.png",
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
        chimg: "/child/r2.png",
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
    role: "etst",
    username: "testest",
    questions: [],
    caddr: "tertst",
    ctel: "010-0000-0000",
    postcode: "12345"
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

export const MockNews: News[] = [{
    nid: 1,
    ndate: new Date(),
    ntitle: "공지사항 테으스트",
    ndesc: "테스트입니다.",
    ncate: "공지사항",
    nkind: 1,
    nhit: 1,
    images: ["/child/r1.png", "/child/r2.png"]
}]

export const mockCategories = [
    {name:"기업소식", link:"/news/info/2"},
    {name:"후원금 사용내역", link:"/news/info/3"},
]